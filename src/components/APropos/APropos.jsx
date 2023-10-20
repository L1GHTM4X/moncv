import React from 'react';
import Header from '../Header/header';
import './APropos.css';
import { FaPhone, FaMapMarker, FaEnvelope } from 'react-icons/fa'; // Importe les icônes

function APropos() {
  return (
    <div>
      <Header />
      <div className="content">
        <div className="apropos-content">
          <div className="apropos-text">
            <h1>À Propos</h1>
            <p>Je suis étudiant au collège LaSalle en Programmeur Analyste en technologies de l'information.</p>
            
            <div className="contact-info-propos">
              <p><FaMapMarker /> 123 Nom de la Rue, Ville</p>
              <p><FaPhone /> +1 123-456-7890</p>              
              <p><FaEnvelope /> email@example.com</p>
            </div>        
          </div>
        </div>
      </div>
    </div>
  );
}

export default APropos;