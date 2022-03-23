import React from "react";
import { Card, CardGroup, Carousel } from "react-bootstrap";
import "../../style/home.scss";
import actionDistrib from "../../img/actions/action-distrib.jpg";
import actionRecolte from "../../img/actions/action-recolte.jpg";
import calanques from "../../img/actions/calanques.jpg";
import newYear from "../../img/actions/new-year.jpg";
import recyclage from "../../img/actions/recyclage.jpg";
import foret from "../../img/actions/foret.jpg";

function ActionsPage() {
  return (
    <div className="actions-container">
      <h1 className="actions__title"> Nos actions </h1>{" "}
      <div class="actions__card-group">
        <Carousel className="actions__carousel">
          <Carousel.Item>
            <CardGroup className="actions__carousel__card-group">
              <Card className="actions__carousel__card">
                <Card.Img variant="top" src={foret} />
                <Card.Body>
                  <Card.Title className="actions__carousel__card-title">
                    Journée internationale de la fôret
                  </Card.Title>
                  <Card.Text className="actions__carousel__card-text">
                    Aujourd’hui, c’est la journée internationale des forêts !
                    Depuis 1990 nous avons perdu 1,3 millions de km2 de forêt
                    soit 800 terrains de foot L’Amérique latine a perdu 10% de
                    sa surface forestière La France a connu une pénurie de bois
                    en 2021
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">01/03/2022</small>
                </Card.Footer>
              </Card>
              <Card className="actions__carousel__card">
                <Card.Img variant="top" src={recyclage} />
                <Card.Body>
                  <Card.Title className="actions__carousel__card-title">
                    Journée mondiale du recyclage
                  </Card.Title>
                  <Card.Text className="actions__carousel__card-text">
                    51,5 kg d’emballages triés 89% des français trient leurs
                    emballages 1,6M de tonnes de CO2 évitées grâce au recyclage
                    100% des français ont accès à un dispositif de tri Continuez
                    de trier ! ✌🏻
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">03/18/2022</small>
                </Card.Footer>
              </Card>
              <Card className="actions__carousel__card">
                <Card.Img variant="top" src={actionDistrib} />
                <Card.Body>
                  <Card.Title className="actions__carousel__card-title">
                    Distribution de panier
                  </Card.Title>
                  <Card.Text className="actions__carousel__card-text">
                    🥬 1 petit chou chinois 🥕 500g de carottes 🧅 1 oignon 🍎
                    500g de pommes 🍊 500g de clémentines 💁🏻‍♀️ La distribution
                    s'effectuera dans la salle de pause à partir de 13h45
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">01/03/2022</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Carousel.Item>
          <Carousel.Item>
            <CardGroup className="actions__carousel__card-group">
              <Card className="actions__carousel__card">
                <Card.Img variant="top" src={calanques} />
                <Card.Body>
                  <Card.Title className="actions__carousel__card-title">
                    Clean my calanques
                  </Card.Title>
                  <Card.Text className="actions__carousel__card-text">
                    on t’encourage à rejoindre les évènements qu’organisent
                    Clean my Calanques. Cette association organise notamment des
                    opérations de ramassage de déchets dans Marseille. Grâce à
                    eux : 🤜🏻 60 sorties organisées 🤜🏻 48 152 kilos de déchets
                    ramassés 🤜🏻 2 540 jeunes sensibilisées Restez clean ! ✌🏻
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">15/02/2022</small>
                </Card.Footer>
              </Card>
              <Card className="actions__carousel__card">
                <Card.Img variant="top" src={newYear} />
                <Card.Body>
                  <Card.Title className="actions__carousel__card-title">
                    Bonne année !
                  </Card.Title>
                  <Card.Text className="actions__carousel__card-text">
                    On vous souhaite une jolie année naturelle et positive !
                    😃✨ Et si cette année vos bonnes résolutions étaient de
                    multiplier les gestes écolos ? 💁🏻‍♀️ Pas de panique, on va vous
                    aider. Restez connectés on vous prévoit quelques petites
                    astuces pour faire du bien à notre planète ! 🌍 À très vite
                    ! ✌🏻
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">01/01/2022</small>
                </Card.Footer>
              </Card>
              <Card className="actions__carousel__card">
                <Card.Img variant="top" src={actionRecolte} />
                <Card.Body>
                  <Card.Title className="actions__carousel__card-title">
                    Collecte de denrées
                  </Card.Title>
                  <Card.Text className="actions__carousel__card-text">
                    Nous organisons une collecte de denrées qui aura lieu le
                    mercredi 15 décembre de 9h30 à 17h30 au Uexpress (situé au
                    Rez de chaussée du bâtiment centraix). Venez nous apporter
                    vos dons ! Pour cette raison, on a décidé de donner
                    l'ensemble des denrées à l'association fami_interasso !
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">07/12/2021</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default ActionsPage;
