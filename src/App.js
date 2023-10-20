import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header';
import Formation from './components/Formation/Formation';
import Experience from './components/Experience/Experience';
import Competence from './components/Competences/Competence';
import Interet from './components/Interet/Interet';
import APropos from './components/APropos/APropos';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="body-background">
        <Header />
        <Routes>
          <Route path="/" element={<APropos />} />
          <Route path="/formation" element={<Formation />} />
          <Route path="/competences" element={<Competence />} />
          <Route path="/interets" element={<Interet />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
