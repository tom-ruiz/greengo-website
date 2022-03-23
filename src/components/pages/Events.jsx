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
                <div>
                  <h2 className="events__content-title">Tournoi Z5</h2>
                  <p>
                    Holà la team YNOV Aix en provence ! Préparez vos roulettes,
                    passement de jambes et cassage de reins ! Un tournoi foot à
                    5 débarque chez Ynov Aix en provence !😄⚽️ 🗓 Samedi 09
                    Avril 🕖 À partir de 13h00 (premier match à 13h30)
                    📍Montclub Futbol à 5 Bouc-Bel-Air Pour les inscriptions,
                    vous trouverez ci-dessous un lien Google form où vous
                    pourrez renseigner : - Le nom de votre équipe - Votre nom et
                    prénom - Votre numéro de téléphone
                    <br />
                    Prix de participation : 10€/personne
                    <br />
                    5€ reversé à une asso
                  </p>
                  <Button variant="success" href="https://docs.google.com/spreadsheets/d/1YcAAO6626Ce7LkFeKp4d2am0ql1HmSA7M-xPmCWOFHw/edit#gid=744338324">Lien d'inscription</Button>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <div>
                  <h2 className="events__content-title">Tournoi Z5</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam hendrerit volutpat elit in facilisis. Nulla et
                    efficitur lorem. Pellentesque laoreet urna a pellentesque
                    tempor. Aliquam tincidunt in dolor ut volutpat. Nam enim
                    velit, tincidunt a diam at, dapibus venenatis turpis. Donec
                    vehicula euismod neque et mollis. Mauris quis velit
                    consectetur nunc lacinia eleifend sit amet vitae erat. Duis
                    eleifend mauris condimentum velit dictum, id iaculis augue
                    fermentum. Interdum et malesuada fames ac ante ipsum primis
                    in faucibus. Donec volutpat justo sed nisl accumsan
                    tincidunt. Sed euismod tellus sodales arcu fermentum mattis.
                    Vivamus non pellentesque velit. Cras sed pharetra eros.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. In ac quam id erat
                    sollicitudin malesuada.
                  </p>
                  <Button variant="secondary" disabled="true">Lien d'inscription</Button>
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
