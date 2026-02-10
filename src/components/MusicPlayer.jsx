import { useState, useRef, useEffect } from 'react';
import ordinarySong from '../assets/ordinary.mp3';
import './MusicPlayer.css';

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(ordinarySong);
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    // Autoplay on first user interaction (browsers block autoplay without interaction)
    const autoplay = () => {
      audio.play().then(() => setPlaying(true)).catch(() => {});
      document.removeEventListener('click', autoplay);
      document.removeEventListener('touchstart', autoplay);
      document.removeEventListener('scroll', autoplay);
    };

    // Try immediate autoplay first
    audio.play().then(() => {
      setPlaying(true);
    }).catch(() => {
      // If blocked, wait for first user interaction
      document.addEventListener('click', autoplay, { once: false });
      document.addEventListener('touchstart', autoplay, { once: false });
      document.addEventListener('scroll', autoplay, { once: false });
    });

    return () => {
      audio.pause();
      audio.src = '';
      document.removeEventListener('click', autoplay);
      document.removeEventListener('touchstart', autoplay);
      document.removeEventListener('scroll', autoplay);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <button
      className={`music-btn ${playing ? 'music-playing' : ''}`}
      onClick={togglePlay}
      aria-label={playing ? 'Pausar música' : 'Reproducir música'}
      title={playing ? 'Pausar música' : 'Reproducir música'}
    >
      <span className="music-icon">{playing ? '♪' : '♫'}</span>
      <span className="music-rings">
        <span className="ring ring-1" />
        <span className="ring ring-2" />
      </span>
    </button>
  );
}
