import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NewCarousel.css'; 
import implantodentistaImg from '../../assets/implantodontista.png'; 
import estomatologiaImg from '../../assets/estomatologia.png'; 
import periodontistaImg from '../../assets/periodontista.png'; 
import odontopediatriaImg from '../../assets/odontopediatria.png'; 
import clinicoGeralImg from '../../assets/clinico-geral.png'; 
import odontologiaEsteticaImg from '../../assets/odontologia-estetica.png';
import ortodontistaImg from '../../assets/ortodontista.png';

const NewCarousel = () => {  
  const newSettings = {      
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5, // Ajuste para telas menores
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ]
  };

  const specialties = [
    { img: implantodentistaImg, title: "Implantodontista" },
    { img: estomatologiaImg, title: "Estomatologia" },
    { img: periodontistaImg, title: "Periodontista" },
    { img: odontopediatriaImg, title: "Odontopediatria" },
    { img: clinicoGeralImg, title: "Clínico Geral" },
    { img: odontologiaEsteticaImg, title: "Odontologia Estética" },
    { img: ortodontistaImg, title: "Ortodontista" },
  ];

  return (
    <div className="new-carousel-container">  
      <Slider {...newSettings}>
        {specialties.map((specialty, index) => (
          <div key={index} className="carousel-item">
            <img src={specialty.img} alt={specialty.title} />
            <p>{specialty.title}</p>
          </div>
        ))}
      </Slider> 
    </div>
  );
};

export default NewCarousel; 