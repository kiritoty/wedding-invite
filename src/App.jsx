import { useState } from 'react'
import Hero from "./components/Hero";
import Story from './components/Story';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Invitation from './components/Invitation';
import MusicPlayer from './components/MusicPlayer';
import bgMusic from './assets/bgMusic.mp3';

function App() {

  return (
    <main className="w-full">
      <MusicPlayer url={bgMusic} />
      <Hero />
      <Story />
      <Gallery />
      <Invitation />
      <Location />
      {/* 之后的组件放这里，比如 Story, Map, RSVP */}
      {/* <section className="h-screen bg-white flex items-center justify-center">
        <p className="text-gray-400 font-serif italic">The Beginning of Our Story...</p>
      </section> */}
    </main>
  )
}

export default App
