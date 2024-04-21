import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

import puppiesData from "./assets/data/data";

import "./App.css";

function App() {
  return (
    <>
      <Header title="Adopta un perrito" />
      <Container className="card-container">
        <Row>
          {puppiesData.map((data) => (
            <Col key={data.id} sm>
              <MyCard data={data} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
