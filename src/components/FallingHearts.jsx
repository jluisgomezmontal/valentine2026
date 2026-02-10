import { useEffect, useState } from 'react';
import './FallingHearts.css';

const HEART_CHARS = ['♥', '♡', '❤', '💕'];
const COLORS = ['#8B0000', '#FF6B6B', '#E8A0BF', '#F4C2C2', '#722F37', '#ff4d6d'];

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function FallingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      const id = Date.now() + Math.random();
      const heart = {
        id,
        left: randomBetween(0, 100),
        size: randomBetween(10, 28),
        duration: randomBetween(6, 14),
        delay: 0,
        opacity: randomBetween(0.15, 0.5),
        char: HEART_CHARS[Math.floor(Math.random() * HEART_CHARS.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        swing: randomBetween(-30, 30),
      };

      setHearts((prev) => [...prev.slice(-25), heart]);
    };

    // Create initial batch
    for (let i = 0; i < 12; i++) {
      setTimeout(() => createHeart(), i * 400);
    }

    const interval = setInterval(createHeart, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="falling-hearts" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="falling-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
            opacity: h.opacity,
            color: h.color,
            '--swing': `${h.swing}px`,
          }}
        >
          {h.char}
        </span>
      ))}
    </div>
  );
}
