import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './Components/Header/Header';
import LeftSide from './Components/LeftSide/LeftSide'
import RighteSide from './Components/RighteSide/RighteSide';

function App() {
  return (
    <Container>

      <Header></Header>

      <Row>
        <Col><LeftSide/></Col>
        <Col><RighteSide/></Col>
      </Row>

    </Container>
  );
}

export default App;
