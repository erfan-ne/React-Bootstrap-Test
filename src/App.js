import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './Components/Header/Header';
import Cards from './Components/Card/Card'

function App() {
  return (
    <Container>

      <Header></Header>

      <Row>
        <Col><Cards/></Col>
        <Col><Cards/></Col>
      </Row>

    </Container>
  );
}

export default App;
