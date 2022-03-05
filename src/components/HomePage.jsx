import React from "react";
import "../style/home.scss";
import typo from "../img/typo.png";
import { Button } from "react-bootstrap";

function HomePage() {
  return (
    <div>
      <div className="home-container">
        <img className="home-logo" src={typo} alt="typo" />
        <h2 className="home-text__orange">Ynov Aix Campus</h2>
        <Button variant="succes" className="home-button">
          Découvrir nos actions
        </Button>{" "}
      </div>
      <div className="actions-cointaner">
          <h1>Coucou</h1>
      </div>
    </div>
  );
}

export default HomePage;
