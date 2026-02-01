"use client";

import { useEffect, useRef } from "react";

export default function AudioWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
      ctx!.scale(dpr, dpr);
    }

    resize();
    window.addEventListener("resize", resize);

    const waves = [
      { amplitude: 60, frequency: 0.0015, speed: 0.00015, opacity: 0.09, yOffset: 0.25 },
      { amplitude: 45, frequency: 0.002,  speed: 0.0001,  opacity: 0.07, yOffset: 0.38 },
      { amplitude: 80, frequency: 0.001,  speed: 0.0002,  opacity: 0.08, yOffset: 0.5  },
      { amplitude: 50, frequency: 0.0025, speed: 0.00012, opacity: 0.06, yOffset: 0.62 },
      { amplitude: 55, frequency: 0.0018, speed: 0.00018, opacity: 0.07, yOffset: 0.75 },
    ];

    function draw() {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx!.clearRect(0, 0, w, h);

      for (const wave of waves) {
        ctx!.beginPath();
        ctx!.strokeStyle = `rgba(255, 255, 255, ${wave.opacity})`;
        ctx!.lineWidth = 1.5;

        const baseY = h * wave.yOffset;

        for (let x = 0; x <= w; x += 2) {
          const y =
            baseY +
            Math.sin(x * wave.frequency + time * wave.speed * 60) * wave.amplitude +
            Math.sin(x * wave.frequency * 2.5 + time * wave.speed * 40) * (wave.amplitude * 0.3);

          if (x === 0) {
            ctx!.moveTo(x, y);
          } else {
            ctx!.lineTo(x, y);
          }
        }

        ctx!.stroke();
      }

      time++;
      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
