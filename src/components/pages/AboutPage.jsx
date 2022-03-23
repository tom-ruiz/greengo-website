import React from "react";
import Ekip from "./Ekip";

function AboutPage() {
  return (
    <div className="about-container">
      <h1 className="about__title">À propos</h1>
      <div className="about__infos-section">
          <h4>Objectif de l'association : </h4>
    
        <p>
          Créer un véritable lien avec les étudiants et leur prouver que le
          développement durable est à la portée de tous.
        </p>
      </div>
      <h2 className="about__ekip__title">Notre équipe</h2>
      <div className="about__ekip-section">
        <Ekip />
      </div>
    </div>
  );
}

export default AboutPage;
