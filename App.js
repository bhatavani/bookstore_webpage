import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import BookCarousel from './components/Carousel';
import BookCard from './components/BookCard';
import BookDetails from './components/BookDetails';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import Books from './components/Books';
import Categories from './components/Categories';
import About from './components/About';
import maiden from './images/maiden.jpg';
import sandb from './images/sandb.jpg';
import homecoming from './images/homecoming.jpg';
import anne from './images/anne.jpg';
import sapiens from './images/sapiens.jpg';
import becoming from './images/becoming.jpg';

function App() {
  const [modalShow, setModalShow] = useState(false);

  const handleModalShow = () => setModalShow(true);
  const handleModalClose = () => setModalShow(false);

  return (
    <Router>
      <div>
        <Header handleModalShow={handleModalShow} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        <Footer />
        <ContactModal show={modalShow} handleClose={handleModalClose} />
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <BookCarousel />
    <div className="container my-5">
      <h1>Fictionals</h1>
      <div className="row">
        <div className="col-md-4">
          <BookCard 
            image={maiden} 
            title="The Maiden" 
            author="by Kate Foster" 
            price="10.99" 
          />
        </div>
        <div className="col-md-4">
          <BookCard 
            image={sandb} 
            title="Shadow And Bone" 
            author="by Leigh Bardugo" 
            price="12.99" 
          />
        </div>
        <div className="col-md-4">
          <BookCard 
            image={homecoming} 
            title="Homecoming" 
            author="by Kate Morton" 
            price="15.99" 
          />
        </div>
       
        <h1>Non Fictionals</h1>
        <div className="row"><br></br>
        <br></br>
        <div className="col-md-4">
          <BookCard 
            image={anne} 
            title="The Diary Of A Young Girl" 
            author="by Anne Frank" 
            price="15.99" 
          />
        </div>
        <div className="col-md-4">
          <BookCard 
            image={sapiens} 
            title="Sapiens: A Brief History Of Mankind" 
            author="by Yuval Noah Harari" 
            price="15.99" 
          />
        </div>
        <div className="col-md-4">
          <BookCard 
            image={becoming} 
            title="Becoming" 
            author="by Michelle Obama" 
            price="15.99" 
          />
        </div>
        </div>
      </div>
    </div>
    <BookDetails />
  </div>
);

export default App;
