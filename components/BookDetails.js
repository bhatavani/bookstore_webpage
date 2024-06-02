import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import song from '../images/song.jpg';
import jjk from '../images/jjk.jpg';
import mov from '../images/mov.jpg';

const BookDetails = () => (
  <Container className="my-5">
    <Row>
      <Col md={4}>
        <img src={jjk} className="img-fluid" alt="You Like It Darker" />
      </Col>
      <Col md={8}>
        <h2>Jujutsu Kaisen </h2>
        <p><strong>Author:</strong>Gege Akutami</p>
        <p><strong>Price:</strong> $10.99</p>
        <p>A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.
        </p>
        <p><strong>Reviews:</strong></p>
        <ul>
          <li>Review 1: You Are My Special!</li>
          <li>Review 2: A must-read for everyone.</li>
        </ul>
        <Button variant="primary">Buy Now</Button>
      </Col>
    </Row>
    <br /><br />
    <Row>
      <Col md={4}>
        <img src={song} className="img-fluid" alt="Song Of The Forest" />
      </Col>
      <Col md={8}>
        <h2>Song Of The Forest</h2>
        <p><strong>Author:</strong> Ruskin Bond</p>
        <p><strong>Price:</strong> $10.99</p>
        <p>Ruskin Bond is a master of the short story. This pitch-perfect collection brings together the very best tales he has written in the twenty-first century. The book starts with the title story, ‘Song of the Forest’, which has never been published before, and includes extraordinary pieces of fiction like ‘A Man Called Brain’, ‘Rhododendrons in the Mist’, and ‘Miracle at Happy Bazaar’. Dazzling, comic, and gripping, Song of the Forest is the latest masterpiece from India’s most beloved writer.</p>
        <p><strong>Reviews:</strong></p>
        <ul>
          <li>Review 1: This book is amazing!</li>
          <li>Review 2: A must-read for everyone.</li>
        </ul>
        <Button variant="primary">Buy Now</Button>
      </Col>
    </Row>
    <br /><br />
    <Row>
      <Col md={4}>
        <img src={mov} className="img-fluid" alt="The Merchant Of Venice" />
      </Col>
      <Col md={8}>
        <h2>The Merchant Of Venice</h2>
        <p><strong>Author:</strong> William Shakespeare</p>
        <p><strong>Price:</strong> $10.99</p>
        <p>This early work of Shakespeare is considered to be the finest and most thought-provoking of all comedies of his time. Being so, it carries the universal theme of good triumphing over evil, as it depicts the interplay of vengeance and shrewdness. Antonio, the merchant of Venice, borrows money from the money-obsessed loan shark Shylock to help his friend Bassanio marry Portia, his lady love. He, in fact, offers himself as collateral for the loan, agreeing to Shylock’s terms—to cut a pound of flesh from his body—on failure to repay the loan, and now Shylock demands his flesh. Portia comes to Antonio’s rescue. How she outwits Shylock forms the rest of the story. The play can be well studied as a commentary on the racial and religious interactions of the English society of the 16th century. In terms of themes, the play reiterates along its course, the divine qualities of mercy and compassion that lie beneath the flesh.</p>
        <p><strong>Reviews:</strong></p>
        <ul>
          <li>Review 1: This book is amazing!</li>
          <li>Review 2: A must-read for everyone.</li>
        </ul>
        <Button variant="primary">Buy Now</Button>
      </Col>
    </Row>
    <br /><br />
  </Container>
);

export default BookDetails;
