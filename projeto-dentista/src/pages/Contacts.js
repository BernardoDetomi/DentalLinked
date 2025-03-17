import React from 'react';
import './Contacts.css';
import Footer from '../Components/Footer';
import contactImage from '../assets/contact.png';
import Appointment from '../Components/Appointments/Appointments';
import Cabecalho from '../Components/Cabecalho';

const HorarioFuncionamento = () => {
  const horarios = [
    { dia: "Segunda-feira", horario: "08:00 - 18:00" },
    { dia: "Terça-feira", horario: "08:00 - 18:00" },
    { dia: "Quarta-feira", horario: "08:00 - 18:00" },
    { dia: "Quinta-feira", horario: "08:00 - 18:00" },
    { dia: "Sexta-feira", horario: "08:00 - 18:00" },
    { dia: "Sábado", horario: "Fechado" },
    { dia: "Domingo", horario: "Fechado" }
  ];

  return (
    <section className="horario-funcionamento">
      <h2>Horário de Funcionamento</h2>
      <table>
        <thead>
          <tr>
            <th>Dia da Semana</th>
            <th>Horário de Funcionamento</th>
          </tr>
        </thead>
        <tbody>
          {horarios.map((item, index) => (
            <tr key={index}>
              <td><strong>{item.dia}</strong></td>
              <td>{item.horario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

const Contacts = () => {
  return (
    <div className="contacts">
      <header>
        <Cabecalho/>
      </header>
      <div className='imagem-banner'>
        <img src={contactImage} alt='banner de uma mulher no dentista' />
      </div>
      <h4>CONTATO</h4> 
      <Appointment/>
     <hr className='bar'></hr>
      <section className='contact'>
        <div className='contact-container'>
          <div className="contact-info">
          </div>
          <div className="map-and-hours">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.160812576942!2d-44.252188323983525!3d-21.10615397601082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1c80a47ca4b45%3A0x83cc7c8bc22690c6!2sLinked%20Empresa%20J%C3%BAnior!5e0!3m2!1spt-BR!2sbr!4v1726615507170!5m2!1spt-BR!2sbr"
                width="450"
                height="450"
                allowFullScreen=""
                loading="lazy"
                title="Localização da Clínica"
              ></iframe>
              <button className="location-button" onClick={() => window.open('https://maps.app.goo.gl/MZWhU67z7mk8LmDK8')}>
                Como chegar
              </button>
            </div>
            <HorarioFuncionamento />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contacts;
