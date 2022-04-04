import React from "react";
import "../../style/contact.scss";
import Team from "../../img/photo-team.jpg";

function Contact() {
  return (
    <div className="contact__container">
      <div className="contact__title">Nous contacter</div>
      <div className="contact__section">
        <div className="contact__text">
          Alors comme ça tu as quelque chose à nous dire mais tu ne nous trouves
          pas, peu importe à quel point tu nous cherches sur le campus? Tu peux
          venir nous voir pour des demandes de partenariats, d'informations,
          tout ce que tu veux. Et pour cela, tu peux: <br />
          <br />
          <br /> - Nous trouver dans la{" "}
          <strong>salle de coworking pendant les Ydays</strong> <br /> - Nous
          envoyer un mail à <strong>greengo@gmail.com</strong>
          <br /> - Nous envoyer un message sur <strong>Instagram </strong><br />
          <br />
          Dans tous les cas, nous seront heureux de te répondre alors n'hésites
          pas !
        </div>{" "}
        <img className="contact__img" src={Team} alt="" />
      </div>
    </div>
  );
}

export default Contact;
