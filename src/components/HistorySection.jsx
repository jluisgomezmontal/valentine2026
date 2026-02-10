import { useScrollReveal } from '../hooks/useScrollReveal';
import './HistorySection.css';

const milestones = [
  {
    year: '16 Abr 2013',
    title: 'El día que nos conocimos',
    text: 'Dos almas que se encontraron un 16 de abril y supieron, desde el primer momento, que algo especial estaba por escribirse.',
    icon: '✨',
  },
  {
    year: '15 May 2013',
    title: 'Nuestro primer "Sí"',
    text: 'Un mes después, el corazón ya lo sabía. El 15 de mayo comenzamos a escribir juntos la historia de amor más bonita.',
    icon: '💕',
  },
  {
    year: '2013–2022',
    title: 'Años de amor y crecimiento',
    text: 'Risas compartidas, sueños construidos juntos, noches de pláticas infinitas y un amor que creció con cada día.',
    icon: '🌱',
  },
  {
    year: '18 Dic 2022',
    title: 'La pregunta más importante',
    text: 'Un 18 de diciembre me arrodillé y te pedí que fueras mi para siempre. Tu "sí" fue el mejor regalo de mi vida.',
    icon: '💍',
  },
  {
    year: '3 Jun 2023',
    title: 'El día que dijimos "Sí, acepto"',
    text: 'El día más hermoso. Prometimos amarnos para siempre y sellamos nuestra historia con un beso eterno.',
    icon: '�',
  },
  {
    year: '2023–2026',
    title: 'Construyendo nuestro hogar',
    text: 'Casi tres años de matrimonio llenos de complicidad, apoyo incondicional y la certeza de que juntos todo es mejor.',
    icon: '🏠',
  },
  {
    year: 'Hoy y siempre',
    title: 'Nuestro futuro juntos',
    text: 'Cada mañana a tu lado es un regalo. El futuro brilla porque lo escribimos juntos, tú y yo.',
    icon: '🌅',
  },
];

export default function HistorySection() {
  const sectionRef = useScrollReveal(0.1);

  return (
    <section className="history" ref={sectionRef}>
      <div className="history-container">
        <h2 className="history-heading fade-in">
          <span className="script-font">Nuestra</span> Historia
        </h2>
        <p className="history-intro fade-in">
          12 años de amor. Casi 3 de matrimonio. Una vida entera por compartir.
        </p>

        <div className="timeline">
          {milestones.map((m, i) => (
            <div
              key={i}
              className={`timeline-item ${i % 2 === 0 ? 'slide-left' : 'slide-right'}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="timeline-dot">
                <span>{m.icon}</span>
              </div>
              <div className="timeline-card">
                <span className="timeline-year">{m.year}</span>
                <h3 className="timeline-title">{m.title}</h3>
                <p className="timeline-text">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
