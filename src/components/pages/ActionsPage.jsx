import React, { useRef } from "react";
import { Card, CardGroup, Carousel } from "react-bootstrap";
import "../../style/home.scss";
import actionDistrib from "../../img/actions/action-distrib.jpg";
import actionRecolte from "../../img/actions/action-recolte.jpg";

function ActionsPage() {
  const actionsSection = useRef(null);
  return (
    <div className="actions-container" ref={actionsSection}>
      <h1 className="actions__title"> Nos actions </h1>{" "}
      <div class="actions__card-group">
        <Carousel className="actions__carousel">
          <Carousel.Item>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={actionDistrib} />
                <Card.Body>
                  <Card.Title>Distribution de panier</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">01/03/2022</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={actionRecolte} />
                <Card.Body>
                  <Card.Title>Recolte alimentaire</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={actionDistrib} />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Carousel.Item>
          {/* <Carousel.Item>
   

  </Carousel.Item>
  <Carousel.Item>
   
  </Carousel.Item> */}
        </Carousel>
      </div>
    </div>
  );
}

export default ActionsPage;
