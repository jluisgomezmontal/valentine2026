import { useEffect, useState, useRef } from 'react';
import './Celebration.css';

function createParticle(type) {
  const chars = type === 'confetti'
    ? ['🎉', '✨', '💖', '💕', '❤️', '🌹', '💗', '🥂']
    : ['♥', '♡', '❤', '💕', '💖'];
  return {
    id: Math.random(),
    char: chars[Math.floor(Math.random() * chars.length)],
    x: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 3,
    size: 14 + Math.random() * 24,
    rotation: Math.random() * 360,
  };
}

export default function Celebration({ show }) {
  const [particles, setParticles] = useState([]);
  const [visible, setVisible] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!show) return;

    // Initial burst
    const initial = Array.from({ length: 50 }, () => createParticle('confetti'));
    setParticles(initial);
    setVisible(true);

    // Continuous gentle particles
    intervalRef.current = setInterval(() => {
      setParticles((prev) => [
        ...prev.slice(-60),
        createParticle('heart'),
      ]);
    }, 300);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className={`celebration-overlay ${visible ? 'celebration-visible' : ''}`}>
      <div className="celebration-particles" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="celebration-particle"
            style={{
              left: `${p.x}%`,
              fontSize: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              '--rot': `${p.rotation}deg`,
            }}
          >
            {p.char}
          </span>
        ))}
      </div>

      <div className="celebration-content">
        <div className="celebration-glow" />
        <div className="celebration-card">
          <span className="celebration-emoji">💖</span>
          <h2 className="celebration-title script-font">¡Sabía que dirías que sí!</h2>
          <div className="celebration-divider">
            <span>♥</span>
          </div>
          <p className="celebration-message">
            Entonces prepárate…
          </p>
          <p className="celebration-reveal">
            Tengo una reservación especial para una
            <strong> comida en Acapulco</strong> a las
            <strong> 4:30 pm</strong> 🌅🍽️
          </p>
          <p className="celebration-footer script-font">
            Te amo, Stephanie ❤️
          </p>
        </div>
      </div>
    </div>
  );
}
