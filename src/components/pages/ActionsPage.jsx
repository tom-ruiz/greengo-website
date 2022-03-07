import React from "react";
import { Card, CardGroup, Carousel } from "react-bootstrap";
import "../../style/home.scss";
import actionDistrib from "../../img/actions/action-distrib.jpg";
// import actionRecolte from "../../img/actions/action-recolte.jpg";

function ActionsPage() {
  return (
    <div className="actions-container">
      <h1 className="actions__title"> Nos actions </h1>{" "}
      <div class="actions__card-group">
        <Carousel className="actions__carousel">
          <Carousel.Item>
            <CardGroup className="actions__carousel__card-group">
              <Card className="actions__carousel__card">
                <Card.Img variant="top" src={actionDistrib} />
                <Card.Body>
                  <Card.Title className="actions__carousel__card-title">
                    Distribution de panier
                  </Card.Title>
                  <Card.Text className="actions__carousel__card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">01/03/2022</small>
                </Card.Footer>
              </Card>
              <Card className="actions__carousel__card">
                <Card.Img variant="top" src={actionDistrib} />
                <Card.Body>
                  <Card.Title className="actions__carousel__card-title">
                    Distribution de panier
                  </Card.Title>
                  <Card.Text className="actions__carousel__card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">01/03/2022</small>
                </Card.Footer>
              </Card>
              <Card className="actions__carousel__card">
                <Card.Img variant="top" src={actionDistrib} />
                <Card.Body>
                  <Card.Title className="actions__carousel__card-title">
                    Distribution de panier
                  </Card.Title>
                  <Card.Text className="actions__carousel__card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
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
                <Card.Img variant="top" src={actionDistrib} />
                <Card.Body>
                  <Card.Title className="actions__carousel__card-title">
                    Distribution de panier
                  </Card.Title>
                  <Card.Text className="actions__carousel__card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">01/03/2022</small>
                </Card.Footer>
              </Card>
              <Card className="actions__carousel__card">
                <Card.Img variant="top" src={actionDistrib} />
                <Card.Body>
                  <Card.Title className="actions__carousel__card-title">
                    Distribution de panier
                  </Card.Title>
                  <Card.Text className="actions__carousel__card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">01/03/2022</small>
                </Card.Footer>
              </Card>
              <Card className="actions__carousel__card">
                <Card.Img variant="top" src={actionDistrib} />
                <Card.Body>
                  <Card.Title className="actions__carousel__card-title">
                    Distribution de panier
                  </Card.Title>
                  <Card.Text className="actions__carousel__card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">01/03/2022</small>
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
