import { FC } from "react";
import { Container, Row, Col } from "react-bootstrap";

import UserList from "./UserList";
import TaskList from "./TaskList";

const Tracker: FC = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="main-board">
          <h1 className="mt-5 mb-4">Onboarding tracker</h1>
          <Row>
            <Col md={{ span: 5 }}>
              <UserList />
            </Col>
            <Col md={{ span: 7 }}>
              <TaskList />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Tracker;
