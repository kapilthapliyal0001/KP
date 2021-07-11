import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./homePage.css";

// Bootstrap imports
import {
  Container,
  Navbar,
  Form,
  Button,
  Nav,
  FormControl,
} from "react-bootstrap";

export default class HomePage extends Component {
  render() {
    return (
      <Container className="main-homepage" fluid>
        <div className="nav-bar" fluid>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand className="pl-4" href="#home">
              <img
                alt=""
                src="https://www.kaspersky.it/content/it-it/images/Boxshot_KISA_2017_mini_140x199px.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                fluid
              />
              Kaspersky
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link className="pl-3" href="#home">
                KIPS +
              </Nav.Link>
              <Nav.Link className="pl-3" href="#features">
                Products
              </Nav.Link>
              <Nav.Link className="pl-3" href="#pricing">
                Lisence
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
          <br />
        </div>
        {/* <div className="body-head">
          <div className="game-opt d-flex justify-content-around">
            <div className="option">
              <h3>Play Now</h3>
            </div>
            <div className="option">
              <h3>See Demo!</h3>
            </div>
          </div>
        </div> */}
        <div className="boy" fluid>
          <img
            src="https://image.freepik.com/free-vector/business-idea-search-office-manager-have-smart-mind-light-bulb-startup-concept-success-happy-work-character-cartoon-style_80590-5927.jpg"
            alt="office-boy"
          />
        </div>
      </Container>
    );
  }
}
