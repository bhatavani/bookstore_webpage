// src/components/Books.js
import React from 'react';
import BookCard from './BookCard';
import maiden from '../images/maiden.jpg';
import fire from '../images/fire.jpg';
import homecoming from '../images/homecoming.jpg';
import anne from '../images/anne.jpg';
import sapiens from '../images/sapiens.jpg';
import becoming from '../images/becoming.jpg';

const Books = () => {
  return (
    <div className="container my-5">
      <h1>Our Book Collection</h1>
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
            image={fire} 
            title="Where There Was Fire" 
            author="by John Manuel Arias" 
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
      </div>
      <div className="row">
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
  );
};

export default Books;
