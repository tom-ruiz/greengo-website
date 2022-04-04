import React from "react";
import "../style/footer.scss";
import { AiOutlineInstagram } from "react-icons/ai";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__text">
        Tous droits réservés à GreenGo @Ynov 2022 - 2 Rue le Corbustier 13090
        Aix-En-Provence
      </div>
      <a href="https://www.instagram.com/greengo_ynov/" className="footer_logo">
        <AiOutlineInstagram className="" />
      </a>
    </div>
  );
}

export default Footer;
