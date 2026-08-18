'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ChevronRight, ArrowDown, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Preloader } from './Preloader';
import { MagneticButton } from './MagneticButton';
import { profile } from '@/data/profile';
import { site } from '@/data/site';

const ease = [0.16, 1, 0.3, 1] as const;

function AnimatedWord({ word, delay, serif, play }: { word: string; delay: number; serif?: boolean; play: boolean }) {
  const reduce = useReducedMotion();
  return (
    <span className="inline-block overflow-hidden align-bottom pb-[0.08em]">
      <motion.span
        className={`inline-block ${serif ? 'serif-accent font-normal text-accent' : ''}`}
        initial={{ y: '110%' }}
        animate={play ? { y: '0%' } : { y: '110%' }}
        transition={{ duration: reduce ? 0 : 0.9, delay: reduce ? 0 : delay, ease }}
      >
        {word}
      </motion.span>
    </span>
  );
}

/**
 * Hero — the intro video lives inside a large premium GLASS CARD (not a
 * full-screen background). No text over the video.
 *
 * Interaction:
 *  - initial state: polished poster preview with a subtle play affordance
 *  - double-click the card → plays WITH SOUND (voice)
 *  - single click / tap → toggles pause
 *  - accessible play/pause + sound controls
 * Falls back to a cinematic portrait when /media/ali-intro.mp4 is absent.
 */
export function Hero() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [videoState, setVideoState] = useState<'loading' | 'ready' | 'playing' | 'paused' | 'fallback'>('loading');
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false); // has the user initiated playback?
  const videoRef = useRef<HTMLVideoElement>(null);
  const clickTimer = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const yCard = useTransform(scrollYProgress, [0, 1], [0, -40]);

  /** Play with sound (a user gesture or double-click permits voice). */
  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    setMuted(false);
    setStarted(true);
    v.play().then(() => setVideoState('playing')).catch(() => {
      // blocked — keep poster, remain paused
      setVideoState('paused');
    });
  };

  const pause = () => {
    videoRef.current?.pause();
    setVideoState('paused');
  };

  /** Single click → toggle; double click → play (voice). */
  const handleClick = () => {
    if (clickTimer.current) return; // will be a double-click
    clickTimer.current = window.setTimeout(() => {
      clickTimer.current = null;
      if (videoState === 'playing') pause();
      else play();
    }, 220);
  };

  const handleDoubleClick = () => {
    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
      clickTimer.current = null;
    }
    play();
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  // Prepare the video source (do NOT autoplay — wait for user gesture).
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onReady = () => setVideoState((s) => (s === 'loading' ? 'paused' : s));
    const onError = () => setVideoState('fallback');
    v.addEventListener('loadeddata', onReady);
    v.addEventListener('error', onError);
    const watchdog = setTimeout(() => {
      if (!v.currentSrc && v.readyState < 2) setVideoState('fallback');
    }, 2500);
    return () => {
      clearTimeout(watchdog);
      v.removeEventListener('loadeddata', onReady);
      v.removeEventListener('error', onError);
    };
  }, []);

  // Command palette "Replay Intro"
  useEffect(() => {
    const onReplay = () => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      play();
    };
    window.addEventListener('play-intro', onReplay);
    return () => window.removeEventListener('play-intro', onReplay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 18 },
    animate: ready ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay, ease },
  });

  const isPlaying = videoState === 'playing';

  return (
    <section ref={sectionRef} className="relative flex min-h-[100svh] flex-col overflow-hidden" id="home">
      <Preloader onComplete={() => setReady(true)} />

      {/* ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute -right-32 top-16 h-[440px] w-[440px] rounded-full bg-accent/[0.07] blur-[130px]" />
        <div className="pointer-events-none absolute -left-32 bottom-16 h-[400px] w-[400px] rounded-full bg-steel/[0.06] blur-[130px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-12 px-6 pb-20 pt-32 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        {/* ---- Text ---- */}
        <motion.div style={reduce ? undefined : { y: yText }}>
          <motion.div {...fadeUp(0.05)} className="mb-7 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="font-mono-tech text-[11px] tracking-[0.28em] text-fg-muted">
              {profile.fullName.toUpperCase()} / {profile.role.toUpperCase()}
            </span>
          </motion.div>

          <h1 className="font-display text-[15vw] font-bold leading-[0.9] tracking-tightest text-fg sm:text-[12vw] lg:text-[7.5rem]">
            <AnimatedWord word="I BUILD" delay={0.1} play={ready} />
            <br />
            <AnimatedWord word="SYSTEMS." delay={0.26} serif play={ready} />
          </h1>

          <motion.p {...fadeUp(0.5)} className="mt-7 max-w-md text-lg leading-relaxed text-fg-muted sm:text-xl">
            {profile.heroSupport}
          </motion.p>

          <motion.div {...fadeUp(0.62)} className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href="/projects" variant="primary">
              Explore work
              <ChevronRight size={16} />
            </MagneticButton>
            <MagneticButton href="/resume" variant="outline">
              View resume
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* ---- Glass video card ---- */}
        <motion.div style={reduce ? undefined : { y: yCard }}>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30, scale: 0.96 }}
            animate={ready ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="relative"
          >
            {/* floating glass frame */}
            <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-line-strong bg-white/[0.02]" />
            <div className="absolute -inset-3 -z-10 translate-x-4 translate-y-4 rounded-[2rem] bg-accent/[0.06]" />

            <div
              className="group relative aspect-video w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface shadow-[0_40px_120px_-30px_rgba(0,0,0,0.85)] backdrop-blur-md"
              onClick={handleClick}
              onDoubleClick={handleDoubleClick}
              role="button"
              aria-label="Intro video — double-click to play, click to pause"
            >
              {/* glass sheen */}
              <div className="pointer-events-none absolute inset-0 z-10 rounded-[1.75rem]" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 0 60px rgba(255,255,255,0.02)' }} />

              {videoState !== 'fallback' ? (
                <video
                  ref={videoRef}
                  src={site.introVideo}
                  poster={site.portrait}
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="relative h-full w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={site.portrait} alt={site.fullName} className="h-full w-full object-cover animate-ken-burns" draggable={false} />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono-tech rounded-full border border-line bg-bg-900/70 px-4 py-2 text-[10px] tracking-[0.2em] text-fg-muted backdrop-blur">
                      INTRO VIDEO — DROP ali-intro.mp4
                    </span>
                  </div>
                </div>
              )}

              {/* play/pause indicator (also the accessible control) */}
              {videoState !== 'fallback' && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (clickTimer.current) {
                      clearTimeout(clickTimer.current);
                      clickTimer.current = null;
                    }
                    if (isPlaying) pause();
                    else play();
                  }}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className={`absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-bg-900/60 text-fg backdrop-blur-md transition-all duration-300 ${
                    isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                  }`}
                >
                  {isPlaying ? <Pause size={22} /> : <Play size={22} className="ml-1" fill="currentColor" />}
                </button>
              )}

              {/* sound toggle */}
              {started && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                  aria-label={muted ? 'Unmute' : 'Mute'}
                  className="absolute bottom-3 right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-bg-900/60 text-fg backdrop-blur-md transition-colors hover:border-white/30"
                >
                  {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </button>
              )}

              {/* hint */}
              {!started && videoState !== 'fallback' && (
                <span className="font-mono-tech absolute bottom-3 left-4 z-20 text-[10px] tracking-[0.2em] text-fg-muted">
                  DOUBLE-CLICK TO PLAY · WITH SOUND
                </span>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono-tech text-[10px] tracking-[0.3em] text-fg-faint">SCROLL</span>
        <motion.span animate={reduce ? undefined : { y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <ArrowDown size={14} className="text-fg-faint" />
        </motion.span>
      </motion.div>
    </section>
  );
}
