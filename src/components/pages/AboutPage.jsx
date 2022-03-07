import React from "react";
import Ekip from "./Ekip";

function AboutPage() {

  return (
    <div className="about-container">
      <h1 className="about__title">À propos</h1>
      <div className="about__infos-section">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          velit eros, lacinia ac faucibus id, egestas ut augue. Pellentesque eu
          erat enim. Nullam odio eros, ultrices sit amet eleifend vel, commodo
          vitae mi. Morbi vitae pretium sem. Pellentesque interdum est auctor,
          consectetur ligula dignissim, euismod velit. Phasellus congue lacinia
          tempus. Sed tortor nulla, lobortis nec orci nec, condimentum tempor
          metus. In hac habitasse platea dictumst. Interdum et malesuada fames
          ac ante ipsum primis in faucibus.
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
