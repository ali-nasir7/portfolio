import { ImageResponse } from 'next/og';
import { site } from '@/data/site';

export const runtime = 'edge';
export const alt = site.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '90px',
          backgroundColor: '#0b0b0c',
          position: 'relative',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        {/* grid */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex' }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={`v${i}`} style={{ position: 'absolute', top: 0, bottom: 0, left: `${(i + 1) * 10}%`, width: 1, background: 'rgba(244,242,239,0.05)' }} />
          ))}
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`h${i}`} style={{ position: 'absolute', left: 0, right: 0, top: `${(i + 1) * 16}%`, height: 1, background: 'rgba(244,242,239,0.05)' }} />
          ))}
        </div>
        {/* accent glow */}
        <div style={{ position: 'absolute', right: -80, top: -80, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(227,168,86,0.16), transparent 70%)' }} />
        {/* node motif */}
        <div style={{ position: 'absolute', right: 130, bottom: 120, display: 'flex', width: 90, height: 80 }}>
          <div style={{ position: 'absolute', left: 0, top: -40, width: 90, height: 80, border: '1.5px solid rgba(244,242,239,0.25)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', left: 0, top: -40, width: 18, height: 18, borderRadius: '50%', background: '#f4f2ef' }} />
          <div style={{ position: 'absolute', left: 60, top: 0, width: 18, height: 18, borderRadius: '50%', background: '#e3a856' }} />
          <div style={{ position: 'absolute', left: 30, top: 40, width: 18, height: 18, borderRadius: '50%', background: '#9db4d0' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#e3a856' }} />
            <span style={{ fontSize: 22, color: '#a5a09a', letterSpacing: 6, textTransform: 'uppercase' }}>{site.role}</span>
          </div>
          <div style={{ fontSize: 128, fontWeight: 800, color: '#f4f2ef', letterSpacing: -5, marginTop: 24, lineHeight: 1 }}>ALI NASIR</div>
          <div style={{ fontSize: 34, color: '#a5a09a', marginTop: 26, letterSpacing: 1 }}>I build systems — from idea to production.</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
