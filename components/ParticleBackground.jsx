'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';

const ParticleBackground = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                NET({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x3b82f6,       // Blue-500
                    backgroundColor: 0x0f172a, // Slate-900
                    points: 10.00,
                    maxDistance: 20.00,
                    spacing: 15.00
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <div
            ref={vantaRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
        />
    );
};

export default ParticleBackground;
