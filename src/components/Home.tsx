import { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";

import UserList from "./UserList";

const Home: FC = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="main-board">
          <h1 className="mt-5 mb-4">Onboarding tracker</h1>
          <Row>
            <Col md={{ span: 5 }}>
              <UserList redirect={true} />
            </Col>
            <Col md={{ span: 7 }}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
