import React from 'react';
import Footer from '../Components/Footer';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import news1 from '../assets/news1.jpg';
import news2 from '../assets/news2.jpg';
import news3 from '../assets/news3.jpg';
import Scheduling from '../Components/Scheduling';
import NewCarousel from '../Components/NewCarousel';
import Feedbacks from '../Components/Feedbacks';
import Header from '../Components/Header';

const Home = () => {
  return (
    <div className='home-conteiner'>
      <Header />
      <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay>
        <div>
          <img src={image1} alt="Imagem 1" className="blurred-image" />
          <div className="overlay2"></div> 
          <div className="carousel-caption">
            <h2>TECNOLOGIA DE PONTA EM ODONTOLOGIA</h2>
            <div className="divisor"></div>
            <p>Dedicação e Experiência</p>
          </div>
        </div>
        <div>
          <img src={image2} alt="Imagem 2" className="blurred-image" />
          <div className="overlay2"></div> 
          <div className="carousel-caption">
            <h2>SORRISO PERFEITO, CUIDADO COMPLETO</h2>
            <div className="divisor"></div>
            <p>Confiança e Qualidade</p>
          </div>
        </div>
        <div>
          <img src={image3} alt="Imagem 3" className="blurred-image" />
          <div className="overlay2"></div> 
          <div className="carousel-caption">
            <h2>EXCELÊNCIA EM TRATAMENTOS ODONTOLÓGICOS</h2>
            <div className="divisor"></div>
            <p>Inovação e Bem-Estar</p>
          </div>
        </div>
      </Carousel>
      <div className="procedures-carousel"></div>
      <div className="Specialties-title">
        <h1>ESPECIALIDADES</h1>
        <div className="divider"></div>
      </div>
      <NewCarousel centerMode centerSlidePercentage={80} showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay />
      <div className="specialties-box">
        <button onClick={() => window.location.href='/specialties'}>
          Saiba mais →
        </button>
      </div>
      <Scheduling />
      <Feedbacks centerMode centerSlidePercentage={80} showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay />
      <div className="news-section">
        <h1>ÚLTIMAS NOTÍCIAS</h1>
        <div className="news-container">
          <div className="news-item">
            <img src={news1} alt="Notícia 1" />
            <p>A limpeza dentária regular é essencial para manter a saúde bucal e prevenir problemas mais graves. Durante a limpeza, o dentista remove a placa bacteriana e o tártaro acumulados nos dentes e gengivas, que são os principais causadores de cáries e doenças gengivais.</p>
          </div>
          <div className="news-item">
            <img src={news2} alt="Notícia 2" />
            <p>A limpeza dentária regular é essencial para manter a saúde bucal e prevenir problemas mais graves. Durante a limpeza, o dentista remove a placa bacteriana e o tártaro acumulados nos dentes e gengivas, que são os principais causadores de cáries e doenças gengivais.</p>
          </div>
          <div className="news-item">
            <img src={news3} alt="Notícia 3" />
            <p>A limpeza dentária regular é essencial para manter a saúde bucal e prevenir problemas mais graves. Durante a limpeza, o dentista remove a placa bacteriana e o tártaro acumulados nos dentes e gengivas, que são os principais causadores de cáries e doenças gengivais.</p>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;