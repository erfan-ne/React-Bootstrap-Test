import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './Components/Header/Header';
import Card from './Components/Card/Card'

function App() {
  return (
    <Container>

      <Header></Header>

      <Row>
        <Col><Card/></Col>
        <Col><Card/></Col>
      </Row>

    </Container>
  );
}

export default App;
