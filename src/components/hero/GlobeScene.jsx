import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Line } from '@react-three/drei';
import * as THREE from 'three';

function Globe() {
  const ref = useRef();

  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.08;
  });

  return (
    <group>
      <mesh ref={ref}>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshStandardMaterial color="#1a6b5e" roughness={0.7} metalness={0.1} transparent opacity={0.88} />
      </mesh>
      {/* grid lines on top */}
      <mesh ref={ref}>
        <sphereGeometry args={[1.51, 24, 24]} />
        <meshBasicMaterial color="#6dd4ca" wireframe transparent opacity={0.13} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1.63, 32, 32]} />
        <meshBasicMaterial color="#6dd4ca" transparent opacity={0.055} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

function OrbitRing({ tilt = 0.5, radius = 2.2 }) {
  const pts = useMemo(() => {
    const arr = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      arr.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return arr;
  }, [radius]);

  return (
    <group rotation={[tilt, 0, 0]}>
      <Line points={pts} color="#6dd4ca" lineWidth={1} transparent opacity={0.38} />
    </group>
  );
}

function Satellite({ tilt = 0.5, radius = 2.2, speed = 0.5 }) {
  const meshRef = useRef();
  const angle = useRef(0);

  useFrame((_, dt) => {
    angle.current += dt * speed;
    const x = Math.cos(angle.current) * radius;
    const z = Math.sin(angle.current) * radius;
    const y = z * Math.sin(tilt);
    const zr = z * Math.cos(tilt);
    if (meshRef.current) meshRef.current.position.set(x, y, zr);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.055, 8, 8]} />
      <meshBasicMaterial color="#c47f1a" />
    </mesh>
  );
}

// blinking dot for Gandhinagar station
function StationMarker() {
  const ring = useRef();

  useFrame(({ clock }) => {
    if (!ring.current) return;
    const s = 1 + Math.sin(clock.elapsedTime * 2) * 0.4;
    ring.current.scale.set(s, s, s);
    ring.current.material.opacity = 0.8 - Math.sin(clock.elapsedTime * 2) * 0.6;
  });

  const lat = (23.2 * Math.PI) / 180;
  const lon = (72.6 * Math.PI) / 180;
  const r = 1.53;
  const x = r * Math.cos(lat) * Math.cos(lon);
  const y = r * Math.sin(lat);
  const z = r * Math.cos(lat) * Math.sin(lon);

  return (
    <group position={[x, y, z]}>
      <mesh>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color="#6dd4ca" />
      </mesh>
      <mesh ref={ring}>
        <ringGeometry args={[0.07, 0.1, 16]} />
        <meshBasicMaterial color="#6dd4ca" transparent opacity={0.7} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default function GlobeScene({ reduced }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <Stars radius={80} depth={40} count={1500} factor={4} saturation={0} fade />
      <Globe />
      <OrbitRing tilt={0.45} radius={2.2} />
      <OrbitRing tilt={-0.3} radius={2.5} />
      {!reduced && <Satellite tilt={0.45} radius={2.2} speed={0.45} />}
      {!reduced && <Satellite tilt={-0.3} radius={2.5} speed={0.3} />}
      <StationMarker />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={!reduced}
        autoRotateSpeed={0.4}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={(Math.PI * 3) / 4}
      />
    </Canvas>
  );
}
