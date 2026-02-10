import { useState, useRef, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './ValentineQuestion.css';

export default function ValentineQuestion({ onAccept }) {
  const sectionRef = useScrollReveal(0.15);
  const noButtonRef = useRef(null);
  const containerRef = useRef(null);
  const yesBtnRef = useRef(null);
  const [noText, setNoText] = useState('No 🙈');
  const [attempts, setAttempts] = useState(0);

  const noTexts = [
    'No 🙈',
    '¿Segura? 🥺',
    'Piénsalo bien… 💔',
    '¡No puedes! 😢',
    'Imposible 🙅‍♂️',
    '¡Inténtalo! 😏',
    'Nope 🚫',
    '¿De verdad? 😭',
  ];

  const moveNoButton = useCallback(() => {
    const btn = noButtonRef.current;
    const container = containerRef.current;
    const yesBtn = yesBtnRef.current;
    if (!btn || !container || !yesBtn) return;

    const containerRect = container.getBoundingClientRect();
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;

    // Sí button center (relative to container)
    const yesRect = yesBtn.getBoundingClientRect();
    const yesCenterX = yesRect.left - containerRect.left + yesRect.width / 2;
    const yesCenterY = yesRect.top - containerRect.top + yesRect.height / 2;
    const safeRadius = 120; // min distance from Sí button

    const pad = 10;
    const areaW = containerRect.width - btnWidth - pad * 2;
    const areaH = containerRect.height - btnHeight - pad * 2;

    let newX, newY, dist, tries = 0;
    do {
      newX = pad + Math.random() * Math.max(areaW, 200);
      newY = pad + Math.random() * Math.max(areaH, 250);
      const cx = newX + btnWidth / 2;
      const cy = newY + btnHeight / 2;
      dist = Math.sqrt((cx - yesCenterX) ** 2 + (cy - yesCenterY) ** 2);
      tries++;
    } while (dist < safeRadius && tries < 50);

    btn.style.left = `${Math.min(Math.max(newX, pad), Math.max(areaW, 10))}px`;
    btn.style.top = `${Math.min(Math.max(newY, pad), Math.max(areaH, 10))}px`;

    setAttempts((prev) => prev + 1);
    setNoText(noTexts[(attempts + 1) % noTexts.length]);
  }, [attempts, noTexts]);

  return (
    <section className="valentine-question" ref={sectionRef}>
      <div className="vq-container">
        <div className="vq-heart-icon fade-in">💖</div>
        <h2 className="vq-title fade-in">
          Stephanie…
        </h2>
        <p className="vq-text fade-in script-font">
          ¿Quieres ser mi Valentine este 14 de febrero?
        </p>

        <div className="vq-buttons-area fade-in" ref={containerRef}>
          <div className="btn-yes-wrapper">
            <button ref={yesBtnRef} className="btn-yes" onClick={onAccept}>
              Sí 💕
            </button>
          </div>
          <button
            ref={noButtonRef}
            className="btn-no"
            onMouseEnter={moveNoButton}
            onTouchStart={(e) => {
              e.preventDefault();
              moveNoButton();
            }}
          >
            {noText}
          </button>
        </div>
      </div>
    </section>
  );
}
