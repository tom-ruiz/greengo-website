import React from "react";
import {
  FcCommandLine,
  FcBusinesswoman,
  FcBusinessman,
  FcMoneyTransfer,
  FcCollaboration,
  FcShare,
  FcManager,
  FcPuzzle,
  FcCalendar,
  FcConferenceCall,
} from "react-icons/fc";

import picto from "../../img/picto.png";

import Tom from "../../img/ekip/Tom.jpg";
import Mae from "../../img/ekip/Maé.jpg";
import Nathan from "../../img/ekip/Nathan.jpg";
import Axel from "../../img/ekip/Axel.jpg";
import Tif from "../../img/ekip/Tiffani.png";
import Emma from "../../img/ekip/Emma.jpg";
import Marion from "../../img/ekip/Marion.jpg";
import Victor from "../../img/ekip/Victor.jpg";

function Ekip() {
  return (
    <>
      {" "}
      <div className="about__ekip__card about__ekip__card-dir">
        <img className="about__ekip__card__cadre-img" src={Mae} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Maé</div>
          <div className="about__ekip__card__job">
            <FcBusinesswoman className="about__ekip__card__job-logo" /> •
            Présidente
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-dir">
        <img className="about__ekip__card__cadre-img" src={Nathan} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Nathan</div>
          <div className="about__ekip__card__job">
            <FcBusinessman className="about__ekip__card__job-logo" /> •
            Co-Président
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-partenariat">
        <img className="about__ekip__card__cadre-img" src={picto} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Brice</div>
          <div className="about__ekip__card__job">
            <FcMoneyTransfer className="about__ekip__card__job-logo" /> •
            Responsable collectes
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-partenariat">
        <img className="about__ekip__card__cadre-img" src={Tif} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Tifanni</div>
          <div className="about__ekip__card__job">
            <FcCollaboration className="about__ekip__card__job-logo" /> •
            Responsable partenariats
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-partenariat">
        <img className="about__ekip__card__cadre-img" src={Victor} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Victor</div>
          <div className="about__ekip__card__job">
            <FcCalendar className="about__ekip__card__job-logo" /> • Responsable
            events
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-info">
        <img className="about__ekip__card__cadre-img" src={Tom} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Tom</div>
          <div className="about__ekip__card__job">
            <FcManager className="about__ekip__card__job-logo" /> • Responsable
            Dev
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-info">
        <img className="about__ekip__card__cadre-img" src={Axel} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Axel</div>
          <div className="about__ekip__card__job">
            <FcCommandLine className="about__ekip__card__job-logo" /> •
            Développeur web
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-comm">
        <img className="about__ekip__card__cadre-img" src={Marion} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Marion</div>
          <div className="about__ekip__card__job">
            <FcShare className="about__ekip__card__job-logo" /> • Responsable
            réseaux sociaux
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-comm">
        <img className="about__ekip__card__cadre-img" src={Emma} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Emma</div>
          <div className="about__ekip__card__job">
            <FcPuzzle className="about__ekip__card__job-logo" /> • Responsable
            ateliers DIY
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-comm">
        <img className="about__ekip__card__cadre-img" src={picto} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Alexan</div>
          <div className="about__ekip__card__job">
            <FcConferenceCall className="about__ekip__card__job-logo" /> •
            Chargé de communication
          </div>
        </div>
      </div>
    </>
  );
}

export default Ekip;
