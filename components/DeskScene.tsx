'use client';

import { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows, Html } from '@react-three/drei';
import * as THREE from 'three';

/**
 * The engineering desk — a minimal, premium workspace built from primitives.
 * Laptop, monitor, headphones, keyboard and coffee, with soft lighting and
 * subtle cursor parallax. Hovering an object reveals a small info layer.
 */

interface DeskObject {
  id: string;
  label: string;
  sub: string;
}

const INFO: Record<string, DeskObject> = {
  laptop: { id: 'laptop', label: 'LAPTOP', sub: 'BUILDING — Java · Spring Boot · APIs' },
  monitor: { id: 'monitor', label: 'MONITOR', sub: 'ARCHITECTING — Distributed Systems · Databases' },
  headphones: { id: 'headphones', label: 'HEADPHONES', sub: 'IN THE ZONE — Focus · Build · Ship' },
  coffee: { id: 'coffee', label: 'COFFEE', sub: 'FUEL — a subtle personality detail' },
};

function Laptop({ onHover }: { onHover: (id: string | null) => void }) {
  return (
    <group
      position={[0, 0, 0]}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover('laptop');
      }}
      onPointerOut={() => onHover(null)}
    >
      {/* base */}
      <mesh position={[0, -0.06, 0.15]} rotation={[0, 0, 0]}>
        <boxGeometry args={[2.6, 0.1, 1.7]} />
        <meshStandardMaterial color="#1c1c1f" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* screen */}
      <mesh position={[0, 0.42, -0.35]} rotation={[-0.25, 0, 0]}>
        <boxGeometry args={[2.6, 1.6, 0.06]} />
        <meshStandardMaterial color="#151518" metalness={0.5} roughness={0.4} />
      </mesh>
      {/* screen glow (abstract dev environment) */}
      <mesh position={[0, 0.42, -0.31]} rotation={[-0.25, 0, 0]}>
        <planeGeometry args={[2.4, 1.4]} />
        <meshBasicMaterial color="#0b0f16" />
      </mesh>
      <mesh position={[0, 0.42, -0.305]} rotation={[-0.25, 0, 0]}>
        <planeGeometry args={[2.4, 1.4]} />
        <meshBasicMaterial color="#9db4d0" transparent opacity={0.06} />
      </mesh>
      {/* accent strip */}
      <mesh position={[0, 0.42, -0.30]} rotation={[-0.25, 0, 0]}>
        <planeGeometry args={[2.0, 0.04]} />
        <meshBasicMaterial color="#e3a856" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function Monitor({ onHover }: { onHover: (id: string | null) => void }) {
  return (
    <group
      position={[2.6, 0, -0.3]}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover('monitor');
      }}
      onPointerOut={() => onHover(null)}
    >
      {/* stand */}
      <mesh position={[0, -0.1, 0]}>
        <cylinderGeometry args={[0.1, 0.14, 0.6, 16]} />
        <meshStandardMaterial color="#1c1c1f" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[0, -0.35, 0]}>
        <boxGeometry args={[1.2, 0.06, 0.6]} />
        <meshStandardMaterial color="#1c1c1f" metalness={0.6} roughness={0.4} />
      </mesh>
      {/* screen */}
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[2.4, 1.5, 0.08]} />
        <meshStandardMaterial color="#151518" metalness={0.5} roughness={0.4} />
      </mesh>
      {/* architecture viz on screen */}
      <mesh position={[0, 0.6, 0.05]}>
        <planeGeometry args={[2.2, 1.3]} />
        <meshBasicMaterial color="#0b0f16" />
      </mesh>
      {[
        [0.4, 0.2],
        [-0.4, 0.2],
        [0, -0.25],
      ].map(([x, y], i) => (
        <mesh key={i} position={[x, 0.6 + y, 0.06]}>
          <circleGeometry args={[0.06, 24]} />
          <meshBasicMaterial color={i === 1 ? '#e3a856' : '#9db4d0'} transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function Headphones({ onHover }: { onHover: (id: string | null) => void }) {
  return (
    <group
      position={[1.5, 0.2, 1.1]}
      rotation={[0, 0.4, 0]}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover('headphones');
      }}
      onPointerOut={() => onHover(null)}
    >
      {/* headband */}
      <mesh position={[0, 0.28, 0]}>
        <torusGeometry args={[0.5, 0.05, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#232327" metalness={0.4} roughness={0.5} />
      </mesh>
      {/* ear cups */}
      {[-0.5, 0.5].map((x) => (
        <mesh key={x} position={[x, -0.02, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.22, 0.22, 0.16, 24]} />
          <meshStandardMaterial color="#1c1c1f" metalness={0.5} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function Keyboard({ onHover }: { onHover: (id: string | null) => void }) {
  return (
    <group
      position={[0, -0.02, 1.1]}
      rotation={[0, 0.15, 0]}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover(null);
      }}
    >
      <mesh>
        <boxGeometry args={[1.6, 0.06, 0.5]} />
        <meshStandardMaterial color="#1c1c1f" metalness={0.5} roughness={0.45} />
      </mesh>
      {/* keys */}
      {Array.from({ length: 24 }).map((_, i) => {
        const row = Math.floor(i / 12);
        const col = i % 12;
        return (
          <mesh key={i} position={[-0.7 + col * 0.125, 0.04, -0.15 + row * 0.15]}>
            <boxGeometry args={[0.1, 0.03, 0.1]} />
            <meshStandardMaterial color="#2a2a2f" roughness={0.6} />
          </mesh>
        );
      })}
    </group>
  );
}

function Coffee({ onHover }: { onHover: (id: string | null) => void }) {
  return (
    <group
      position={[-2.2, 0, 1.0]}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover('coffee');
      }}
      onPointerOut={() => onHover(null)}
    >
      <mesh position={[0, 0.08, 0]}>
        <cylinderGeometry args={[0.16, 0.13, 0.22, 24]} />
        <meshStandardMaterial color="#2a2622" roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.19, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.02, 24]} />
        <meshStandardMaterial color="#3a2f24" roughness={0.6} />
      </mesh>
      {/* handle */}
      <mesh position={[0.2, 0.08, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.09, 0.02, 12, 24, Math.PI]} />
        <meshStandardMaterial color="#2a2622" roughness={0.7} />
      </mesh>
    </group>
  );
}

function DeskSurface() {
  return (
    <mesh position={[0, -0.4, 0]}>
      <boxGeometry args={[7, 0.08, 3.4]} />
      <meshStandardMaterial color="#1a1a1d" metalness={0.4} roughness={0.6} />
    </mesh>
  );
}

function Rig({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const { x, y } = state.pointer;
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, x * 0.15, 0.05);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -y * 0.08, 0.05);
  });
  return <group ref={ref}>{children}</group>;
}

function Desk({ onHover }: { onHover: (id: string | null) => void }) {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 4]} intensity={1.1} color="#f4f2ef" />
      <pointLight position={[-4, 2, 2]} intensity={0.6} color="#e3a856" />
      <pointLight position={[2, 1.5, -3]} intensity={0.4} color="#9db4d0" />

      <Rig>
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
          <group position={[0, -0.2, 0]}>
            <DeskSurface />
            <Laptop onHover={onHover} />
            <Monitor onHover={onHover} />
            <Headphones onHover={onHover} />
            <Keyboard onHover={onHover} />
            <Coffee onHover={onHover} />
          </group>
        </Float>
      </Rig>

      <ContactShadows position={[0, -0.42, 0]} opacity={0.5} scale={10} blur={2.5} far={2} />
    </>
  );
}

export default function DeskScene() {
  const [hovered, setHovered] = useState<string | null>(null);
  const info = hovered ? INFO[hovered] : null;

  return (
    <div className="relative h-full w-full">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 1.2, 7], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <Desk onHover={setHovered} />
        </Suspense>
      </Canvas>

      {/* hover info layer */}
      {info && (
        <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
          <div className="rounded-xl border border-line bg-bg-900/80 px-5 py-3 text-center backdrop-blur-md">
            <p className="font-display text-sm font-semibold tracking-[0.12em] text-fg">{info.label}</p>
            <p className="font-mono-tech mt-1 text-[10px] tracking-[0.1em] text-fg-muted">{info.sub}</p>
          </div>
        </div>
      )}
    </div>
  );
}
