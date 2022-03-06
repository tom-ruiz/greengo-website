import React, { useRef } from "react";
import "../style/home.scss";
import typo from "../img/typo.png";
import { Button } from "react-bootstrap";
import ActionsPage from "./pages/ActionsPage";
import AboutPage from "./pages/AboutPage";

function HomeController() {
  const actionsSection = useRef(null);

  const goToActionsSection = () =>
    window.scrollTo({
      top: actionsSection.current.offsetTop,
      behavior: "smooth",
    });
  return (
    <>
      <div className="home-container">
        <img className="home-logo" src={typo} alt="typo" />
        <h2 className="home-text__orange">
          Ynov <span class="home-text__orange-span">Aix</span> Campus
        </h2>
        <Button
          variant="succes"
          className="home-button"
          onClick={goToActionsSection}
        >
          Découvrir nos actions
        </Button>{" "}
      </div>
      <ActionsPage />
      <AboutPage />
    </>
  );
}

export default HomeController;
