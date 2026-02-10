import { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(
      'https://cdn.pixabay.com/audio/2022/02/14/audio_7a0c4bfcee.mp3'
    );
    audio.loop = true;
    audio.volume = 0.3;
    audio.addEventListener('canplaythrough', () => setLoaded(true));
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
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
