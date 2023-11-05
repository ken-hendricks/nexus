import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={9} md={8}>
                <Form.Control
                  type="text"
                  value={word} //the value of the input, linking it to "word"
                  onChange={(e) => setWord(e.target.value)} //on change of the value, there will be an event, and on that event, we call setWord and send through the events value
                  placeholder="Search for new image ..."
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Search image
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;