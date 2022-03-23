import React from "react";
import "../../style/events.scss";
import { Badge, Button, Col, ListGroup, Row, Tab } from "react-bootstrap";

function Events() {
  return (
    <div className="events-container">
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup className="events__list-links">
              <ListGroup.Item
                action
                variant="success"
                href="#link1"
                className="d-flex justify-content-between align-items-start events__link"
              >
                <div className="fw-bold">Tournoi Z5</div>

                <Badge bg="success" pill>
                  09/04/2022
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                action
                href="#link2"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="fw-bold">Distribution de paniers</div>

                <Badge bg="secondary" pill>
                  08/03/2022
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <div className="events__content">
                  <h2 className="events__content-title">Tournoi Z5</h2>
                  <p>
                    Holà la team YNOV Aix en provence ! Préparez vos roulettes,
                    passement de jambes et cassage de reins ! Un tournoi foot à
                    5 débarque chez Ynov Aix en provence !😄⚽️ 🗓 Samedi 09
                    Avril 🕖 À partir de 13h00 (premier match à 13h30)
                    📍Montclub Futbol à 5 Bouc-Bel-Air Pour les inscriptions,
                    vous trouverez ci-dessous un lien Google form où vous
                    pourrez renseigner : <br />- Le nom de votre équipe <br />-
                    Votre nom et prénom <br />- Votre numéro de téléphone
                    <br /><br />
                    Prix de participation : 10€/personne
                    <br />
                    5€ reversé à une asso
                  </p>
                  <Button
                    variant="success"
                    href="https://docs.google.com/spreadsheets/d/1YcAAO6626Ce7LkFeKp4d2am0ql1HmSA7M-xPmCWOFHw/edit#gid=744338324"
                  >
                    Lien d'inscription
                  </Button>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <div className="events__content">
                  <h2 className="events__content-title">
                    Distribution de paniers
                  </h2>
                  <p>
                    🍅 🥦 Manger 5 fruits et légumes par jour, tu connais ? On
                    sait que cette phrase est plus facile à lire qu’à faire.
                    C’est pourquoi on a décidé d’organiser un partenariat avec
                    Le Marché Bio de Pierre pour vous proposer des paniers bio
                    de fruits et légumes à 10€. 🍎🍇 Puisque la nature n’est pas
                    prévisible, on ne connaît pas d’avance le contenu des
                    paniers, mais on peut te donner des exemples alléchants pour
                    tes futurs repas healthy 👇🏻 <br />
                    🥬 1 petit chou chinois <br />
                    🥕 500g de carottes <br />
                    🧅 1 oignon <br />
                    🍎 500g de pommes <br />
                    🍊 500g de clémentines <br /><br />❌ Infos importantes ❌ <br />{" "}
                    ✅ Réserve ton panier avant le 08 mars 12h via le formulaire
                    (lien dans la bio) 💁🏻‍♀️ La distribution s'effectuera dans la
                    salle de pause à partir de 13h45
                  </p>
                  <Button variant="secondary" disabled="true">
                    Lien d'inscription
                  </Button>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}

export default Events;
