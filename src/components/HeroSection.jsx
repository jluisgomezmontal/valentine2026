import { useEffect, useState } from 'react';
import './HeroSection.css';

export default function HeroSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className={`hero-content ${show ? 'hero-visible' : ''}`}>
        <p className="hero-prelude script-font">Para mi amor</p>
        <h1 className="hero-title">
          Stephanie, mi historia favorita
          <br />
          <span className="hero-highlight">empezó contigo</span> ❤️
        </h1>
        <p className="hero-subtitle">
          12 años amándote. 3 años siendo tu esposo.
          <br />
          Y toda una vida por delante.
        </p>
        <div className="hero-scroll-hint">
          <span className="scroll-arrow">↓</span>
        </div>
      </div>
    </section>
  );
}
