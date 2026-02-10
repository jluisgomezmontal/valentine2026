import { useScrollReveal } from '../hooks/useScrollReveal';
import './LoveMessages.css';

const messages = [
  'Elegirte todos los días ha sido mi mejor decisión.',
  'Mi lugar favorito siempre será contigo.',
  'Contigo aprendí que el amor no se busca, se construye.',
  'Eres mi paz en medio del caos.',
  'Gracias por ser mi hogar, mi refugio y mi aventura.',
  'Te amo más que ayer, pero menos que mañana.',
];

export default function LoveMessages() {
  const sectionRef = useScrollReveal(0.08);

  return (
    <section className="love-messages" ref={sectionRef}>
      <div className="love-messages-container">
        <h2 className="love-heading fade-in">
          <span className="script-font">Palabras</span> del corazón
        </h2>

        <div className="messages-grid">
          {messages.map((msg, i) => (
            <div
              key={i}
              className="message-card fade-in"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <span className="message-quote">"</span>
              <p className="message-text">{msg}</p>
              <span className="message-heart">♥</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
