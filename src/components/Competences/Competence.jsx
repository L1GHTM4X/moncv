import React from 'react';
import './Competence.css';

function Competence() {
  const competences = [
    "- Support Logiciel + Matériel",
    "- Soutien technique (installation, rétablissement et optimisation)",
    "- VMware",
    "- Visual Studio",
    "- C++",
    "- C#",
    "- Java",
    "- Python",
    "- SQL/PHP",
    "- JavaScript",
    "- HTML/CSS"
  ];

  return (
    <div className="competence">
      <div className="competence-content">
        <h1>Compétences</h1>
        <ul>
          {competences.map((competence, index) => (
            <li key={index}>{competence}</li>
          ))}
        </ul>
        </div>
    </div>
  );
}

export default Competence;
