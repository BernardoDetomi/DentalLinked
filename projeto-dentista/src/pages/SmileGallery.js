/*
import React from 'react';
import './SmileGallery.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Sorriso1 from '../assets/sorriso1.jpg';
import Sorriso2 from '../assets/sorriso2.jpg';
import Sorriso3 from '../assets/sorriso3.jpg';
import Sorriso4 from '../assets/sorriso4.jpg';
import Sorriso5 from '../assets/sorriso5.jpg';
import Sorriso6 from '../assets/sorriso6.jpg';
import Sorriso7 from '../assets/sorriso7.jpg';
import Sorriso8 from '../assets/sorriso8.jpg';
import Sorriso9 from '../assets/sorriso9.jpg';

const SmileGallery = () => {
  const imagens = [
    Sorriso1,
    Sorriso2,
    Sorriso3,
    Sorriso4,
    Sorriso5,
    Sorriso6,
    Sorriso7,
    Sorriso8,
    Sorriso9,
  ];
  return (
    <div className="galeria-container">
      <header>
        <Header/>
      </header>
      <div className="header">
        <h2>Milhares de Sorrisos já foram Transformados aqui no Nome da Clinica</h2>
        <p>O sucesso dos nossos tratamentos é baseado em um planejamento multidisciplinar visando a individualidade e expectativa de cada paciente.</p>
        <h3>A sua felicidade é a nossa meta</h3>
      </div>
      <div className="galeria-grid">
        {imagens.map((imagem, index) => (
          <div className={`galeria-item item-${index + 1}`} key={index}>
            <img src={imagem} alt={`Sorriso ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="black-bar"></div>
      <Footer />
    </div>
  );
};

export default SmileGallery;
*/