import React, { useState } from 'react';
import './Contact.css';
import { FaPhone, FaMapMarker, FaEnvelope } from 'react-icons/fa'; // Importe les icônes

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Récupérez les données du formulaire
    const { name, email, message } = formData;

    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Réinitialisez le formulaire après la soumission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact">
      <div className="contact-content">
        <h1>Contactez-moi</h1>
        <div className="contact-info">
            <p><FaMapMarker /> 123 Nom de la Rue, Ville</p>
            <p><FaPhone /> +1 123-456-7890</p>              
            <p><FaEnvelope /> email@example.com</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Entrez votre nom..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Entrez votre E-mail..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Entrez votre message..."
            />
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
