'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    return (
        <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.3}>
            <Sphere ref={meshRef} args={[1, 16, 16]} position={position}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={0.2}
                    speed={1.5}
                    roughness={0.4}
                />
            </Sphere>
        </Float>
    );
}

function ParticleField() {
    const particlesRef = useRef<THREE.Points>(null);
    const [isVisible, setIsVisible] = useState(true);

    const particlesGeometry = useMemo(() => {
        const count = 200; // Reduced from 300 for better performance
        const positions = new Float32Array(count * 3);

        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 20;
        }

        return positions;
    }, []);

    useFrame((state) => {
        if (particlesRef.current && isVisible) {
            // Slower rotation for smoother performance
            particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
        }
    });

    // Pause animation when tab is not visible
    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsVisible(!document.hidden);
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, []);

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesGeometry.length / 3}
                    array={particlesGeometry}
                    itemSize={3}
                    args={[particlesGeometry, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.05}
                color="#38bdf8"
                sizeAttenuation
                transparent
                opacity={0.6}
            />
        </points>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#38bdf8" />

            {/* Floating shapes - Reduced polygon count */}
            <FloatingShape position={[-3, 2, -2]} color="#0ea5e9" speed={1.2} />
            <FloatingShape position={[3, -1, -3]} color="#38bdf8" speed={1.0} />
            <FloatingShape position={[0, 3, -4]} color="#0284c7" speed={1.5} />

            {/* Particle field */}
            <ParticleField />
        </>
    );
}

export function ThreeBackground() {
    const [isMobile, setIsMobile] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        // Detect mobile devices
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Delay rendering to prioritize initial page load
        const timer = setTimeout(() => {
            setShouldRender(true);
        }, 100);

        return () => {
            window.removeEventListener('resize', checkMobile);
            clearTimeout(timer);
        };
    }, []);

    if (!shouldRender) {
        return <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-50 via-white to-sky-100" />;
    }

    return (
        <div className="absolute inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 75 }}
                dpr={isMobile ? [0.5, 1] : [1, 1.5]} // Lower DPR for better performance
                performance={{ min: 0.5 }}
                frameloop="demand" // Only render when needed
                gl={{
                    antialias: false, // Disable for better performance
                    powerPreference: 'high-performance',
                    alpha: true,
                    stencil: false,
                    depth: true,
                }}
            >
                <Scene />
            </Canvas>
        </div>
    );
}
