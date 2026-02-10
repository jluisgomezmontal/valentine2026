import { useState } from 'react';
import FallingHearts from './components/FallingHearts';
import HeroSection from './components/HeroSection';
import HistorySection from './components/HistorySection';
import LoveMessages from './components/LoveMessages';
import ValentineQuestion from './components/ValentineQuestion';
import Celebration from './components/Celebration';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

function App() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="app">
      <FallingHearts />
      <HeroSection />
      <HistorySection />
      <LoveMessages />
      <ValentineQuestion onAccept={() => setAccepted(true)} />
      <Celebration show={accepted} />
      <MusicPlayer />
    </div>
  );
}

export default App;
