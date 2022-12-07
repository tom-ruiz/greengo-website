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

import Tom from "../../img/ekip/Tom.jpg";
import Léa from "../../img/ekip/lea.jpeg";
import Elody from "../../img/ekip/elody.jpg";
import Flo from "../../img/ekip/flo.jpg";
import Axel from "../../img/ekip/Axel.jpg";
import Héléna from "../../img/ekip/Héléna.JPG";
import Ilona from "../../img/ekip/ilona.jpeg";
import Marion from "../../img/ekip/Marion.jpg";
import Margot from "../../img/ekip/margot.jpeg";
import Lucien from "../../img/ekip/Lucien.JPG";
import Flora from "../../img/ekip/flora.jpeg";

function Ekip() {
  return (
    <>
      {" "}
      <div className="about__ekip__card about__ekip__card-dir">
        <img className="about__ekip__card__cadre-img" src={Tom} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Tom</div>
          <div className="about__ekip__card__job">
            <FcBusinessman className="about__ekip__card__job-logo" /> •
            Président
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-dir">
        <img className="about__ekip__card__cadre-img" src={Axel} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Axel</div>
          <div className="about__ekip__card__job">
            <FcBusinessman className="about__ekip__card__job-logo" /> •
            Co-Président
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-partenariat">
        <img className="about__ekip__card__cadre-img" src={Léa} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Léa</div>
          <div className="about__ekip__card__job">
            <FcMoneyTransfer className="about__ekip__card__job-logo" /> •
            Responsable partenariats
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-partenariat">
        <img className="about__ekip__card__cadre-img" src={Flo} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Florian</div>
          <div className="about__ekip__card__job">
            <FcCollaboration className="about__ekip__card__job-logo" /> •
            Chargé des partenariats
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-partenariat">
        <img className="about__ekip__card__cadre-img" src={Ilona} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Ilona</div>
          <div className="about__ekip__card__job">
            <FcCalendar className="about__ekip__card__job-logo" /> • Responsable
            events
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-info">
        <img className="about__ekip__card__cadre-img" src={Elody} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Elody</div>
          <div className="about__ekip__card__job">
            <FcCalendar className="about__ekip__card__job-logo" /> • Chargé des events
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-info">
        <img className="about__ekip__card__cadre-img" src={Marion} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Marion</div>
          <div className="about__ekip__card__job">
            <FcShare className="about__ekip__card__job-logo" /> •
            Responsable réseaux sociaux
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-comm">
        <img className="about__ekip__card__cadre-img" src={Flora} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Flora</div>
          <div className="about__ekip__card__job">
            <FcShare className="about__ekip__card__job-logo" /> • Chargé
            réseaux sociaux
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-comm">
        <img className="about__ekip__card__cadre-img" src={Lucien} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Lucien</div>
          <div className="about__ekip__card__job">
            <FcConferenceCall className="about__ekip__card__job-logo" /> • Chargé de communication
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-comm">
        <img className="about__ekip__card__cadre-img" src={Margot} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Margot</div>
          <div className="about__ekip__card__job">
            <FcConferenceCall className="about__ekip__card__job-logo" /> •
            Chargé de communication
          </div>
        </div>
      </div>
      <div className="about__ekip__card about__ekip__card-comm">
        <img className="about__ekip__card__cadre-img" src={Héléna} alt="" />
        <div className="about__ekip__card__infos">
          <div className="about__ekip__card__title">Héléna</div>
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
