import React from "react";
import Ekip from "./Ekip";

function AboutPage() {
  return (
    <div className="about-container">
      <div className="about__infos-section">
        <h2>
          Qui sommes <br /> <span className="about__infos-us">nous ? </span>
        </h2>

        <p>
          Greengo, ou anciennement le Bureau du Développement Durable, c'est
          votre association étudiante verte mais pas trop ! Comme tu le sais
          peut-être déjà, nous faisons de notre mieux pour te proposer du
          contenu ou des évènements qui te seraient autant utiles, à toi,
          étudiant.e d'Ynov Aix, qu'à notre chère planète. Pourquoi verte mais
          pas trop? Parce que personne n'est parfait. Tu peux très bien trier
          tes déchets, mais te tromper de poubelle de temps en temps, personne
          ne t'en voudras si l'effort est là. C'est en quelques sortes le
          message que nous essayons de faire passer, tout en permettant des
          actions bonnes pour nous et pour l'environnement.
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
