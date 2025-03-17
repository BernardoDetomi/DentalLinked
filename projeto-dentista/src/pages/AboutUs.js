import './AboutUs.css';
import imageDr from '../assets/imageDr.jpg';
import Footer from '../Components/Footer';
import Cabecalho from '../Components/Cabecalho';

const DentistProfile = ({ image, nome, info }) => (
  <div className="dentist">
    <img src={image} alt={nome} className="dentist-photo" />
    <div className="dentist-info">
      <h3>{nome}</h3>
      <p>{info}</p>
    </div>
  </div>
);

const AboutSection = ({ titulo, children}) => (
  <section className="about-me">
    <h1>{titulo}</h1>
    <p>{children}</p>
  </section>
);

const AboutUs = () => {
  return (
    <div>
      <Cabecalho />
      <div className="about-us">
        <DentistProfile
          image={imageDr}
          nome="Dr. Lucas Almeida"
          info="Graduado em Odontologia pela Universidade de São Paulo (USP), com especialização em Implantodontia. Possui mais de 10 anos de experiência, focando em reabilitação oral e estética, sempre utilizando as técnicas mais modernas para proporcionar conforto e segurança aos pacientes."
        />
        <AboutSection titulo="Sobre mim">
        &nbsp;&nbsp;Em 2010, o Dr. Lucas Almeida fundou sua clínica odontológica de referência, localizada em um dos bairros mais prestigiados de São Paulo. Desde o início, o compromisso foi oferecer tratamentos de alta qualidade com uma abordagem personalizada, utilizando tecnologias avançadas e práticas inovadoras para garantir o melhor cuidado aos pacientes.
        <br/>&nbsp;&nbsp;O Dr. Lucas é especialista em Implantodontia pela Universidade de São Paulo (USP) e possui experiência em diversas áreas da odontologia, incluindo ortodontia, endodontia, odontopediatria e periodontia. Ele também se destaca por sua atuação na estética dental, oferecendo procedimentos como lentes de contato dental, clareamento e harmonização orofacial.
        <br/>&nbsp;&nbsp;Desde 2015, o Dr. Lucas ampliou seus serviços para incluir Harmonização Orofacial, utilizando técnicas modernas para melhorar a estética e o equilíbrio facial. Ele aplica preenchedores, toxina botulínica (botox) e ácido hialurônico para moldar os traços faciais, realçar os lábios, suavizar rugas e obter resultados naturais e duradouros.
        <br/>&nbsp;&nbsp;Com uma filosofia de cuidado que prioriza o bem-estar e a satisfação dos pacientes, o Dr. Lucas Almeida continua a investir em atualizações e novas tecnologias para proporcionar tratamentos odontológicos de excelência, sempre respeitando a individualidade e os traços naturais de cada pessoa.
        </AboutSection>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;