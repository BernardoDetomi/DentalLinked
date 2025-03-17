import React from 'react';
import './Feedbacks.css';

import Edileia from '../../assets/Edileia.jpg';
import Ygor from '../../assets/Ygor.jpg';
import Francisco from '../../assets/Francisco.jpg';
import Marcia from '../../assets/Marcia.jpg';
import Edna from '../../assets/Edna.jpg';
import Janaíra from '../../assets/Janaíra.jpg';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const feedbacksData = [
  {
    id: 1,
    imagem: Edileia,
    avaliacao: "★★★★★",
    nome: "Edileia Vieira Silva",
    comentario: "Profissional atencioso, tem um bom atendimento e passa confiança. Por ser minha primeira consulta gostei muito."
  },
  {
    id: 2,
    imagem: Ygor,
    avaliacao: "★★★★☆",
    nome: "Ygor Gomes",
    comentario: "Me senti muito seguro em relação ao procedimento, o Dr. sanou as minhas dúvidas com muita propriedade e se mostrou um excelente e eficaz profissional."
  },
  {
    id: 3,
    imagem: Francisco,
    avaliacao: "★★★★★★",
    nome: "Francisco Justino",
    comentario: "Atencioso e muito prestativo ! Tirando todas as dúvidas possíveis."
  },
  {
    id: 4,
    imagem: Marcia,
    avaliacao: "★★★★★★",
    nome: "Marcia de Jesus",
    comentario: "Dr Marcus é muito atencioso e muito cuidadoso ao tratamento ter o melhor resultado."
  },
  {
    id: 5,
    imagem: Edna,
    avaliacao: "★★★★★",
    nome: "Edina Cristina Menezes",
    comentario: "Adorei a consulta, Dr. Marcus foi atencioso e muito solícito com minhas queixas. Me deixou tranquila e em paz durante toda a consulta."
  },
  {
    id: 6,
    imagem: Janaíra,
    avaliacao: "★☆☆☆☆",
    nome: "Janaíra França",
    comentario: "Excesso de desmarcações de última hora. Bom profissional, porém não é possível confiar se serei atendida no dia combinado."
  },
];

const FeedbackCard = ({ imagem, avaliacao, nome, comentario }) => (
  <div className="feedback">
    <div className='feedback-top'>
      <img src={imagem} alt={nome} className="photo-customer" /> 
      <div className="customer">
        <p className="name-customer">{nome}</p>
        <p className="rating-customer">{avaliacao}</p> 
      </div>
    </div>
    <div className="comment-customer">
      <p>{comentario}</p>
    </div>
  </div>
);

const Feedbacks = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="feedbacks-page">
      <h1>FEEDBACKS</h1>
      <div className="divider"></div>
      <div className="feedbacks">
        <Slider {...settings}>
          {feedbacksData.map(feedback => (
            <FeedbackCard
              key={feedback.id}
              imagem={feedback.imagem}
              altText={feedback.altText}
              avaliacao={feedback.avaliacao}
              nome={feedback.nome}
              comentario={feedback.comentario}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedbacks;
