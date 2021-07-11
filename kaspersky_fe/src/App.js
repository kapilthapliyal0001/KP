import "./App.css";
import HomePage from "./components/homePage.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container} from "react-bootstrap";

function App() {
  return (
    <Container className="App" fluid>
      <HomePage />
    </Container>
  );
}

export default App;
