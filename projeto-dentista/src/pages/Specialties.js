import React from 'react';
import './Specialties.css';
import Cabecalho from '../Components/Cabecalho';
import Footer from '../Components/Footer';

// Importando as imagens
import implantodentistaImg from '../assets/implantodontista.png'; 
import estomatologiaImg from '../assets/estomatologia.png'; 
import periodontistaImg from '../assets/periodontista.png'; 
import odontopediatriaImg from '../assets/odontopediatria.png'; 
import clinicoGeralImg from '../assets/clinico-geral.png'; 
import odontologiaEsteticaImg from '../assets/odontologia-estetica.png';
import ortodontistaImg from '../assets/ortodontista.png';

const Specialties = () => {
  return (
    <div>
      <Cabecalho />
      <div className="specialties-container">
        <div className="specialties-list">
          <div className="specialty-item">
            <img src={implantodentistaImg} alt="Implantodontista" className="specialty-image" />
            <h2>Implantodontista</h2>
            <p>Descrição breve da especialidade.</p>
          </div>
          <div className="specialty-item">
            <img src={estomatologiaImg} alt="Estomatologia" className="specialty-image" />
            <h2>Estomatologia</h2>
            <p>Descrição breve da especialidade.</p>
          </div>
          <div className="specialty-item">
            <img src={periodontistaImg} alt="Periodontista" className="specialty-image" />
            <h2>Periodontista</h2>
            <p>Descrição breve da especialidade.</p>
          </div>
          <div className="specialty-item">
            <img src={odontopediatriaImg} alt="Odontopediatria" className="specialty-image" />
            <h2>Odontopediatria</h2>
            <p>Descrição breve da especialidade.</p>
          </div>
          <div className="specialty-item">
            <img src={clinicoGeralImg} alt="Clínico Geral" className="specialty-image" />
            <h2>Clínico Geral</h2>
            <p>Descrição breve da especialidade.</p>
          </div>
          <div className="specialty-item">
            <img src={odontologiaEsteticaImg} alt="Odontologia Estética" className="specialty-image" />
            <h2>Odontologia Estética</h2>
            <p>Descrição breve da especialidade.</p>
          </div>
          <div className="specialty-item">
            <img src={ortodontistaImg} alt="Ortodontista" className="specialty-image" />
            <h2>Ortodontista</h2>
            <p>Descrição breve da especialidade.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Specialties;