import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-light text-center text-lg-start">
    <Container className="p-4">
      <Row>
        <Col lg={6} md={12} className="mb-4 mb-md-0">
          <h5 className="text-uppercase">BOOK HAVEN</h5>
          <p>Find your next great read from our vast collection of books.</p>
        </Col>
        <Col lg={3} md={6} className="mb-4 mb-md-0">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled mb-0">
            <li><a href="#!" className="text-dark">Privacy Policy</a></li>
            <li><a href="#!" className="text-dark">Terms of Service</a></li>
            <li><a href="#!" className="text-dark">Contact Us</a></li>
          </ul>
        </Col>
        <Col lg={3} md={6} className="mb-4 mb-md-0">
          <h5 className="text-uppercase">Follow Us</h5>
          <ul className="list-unstyled mb-0">
            <li><a href="#!" className="text-dark">Facebook</a></li>
            <li><a href="#!" className="text-dark">Twitter</a></li>
            <li><a href="#!" className="text-dark">Instagram</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
