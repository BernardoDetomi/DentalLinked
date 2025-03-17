import React from 'react';
import './Scheduling.css';


const Scheduling = () => {

  return (
    <div className='appointment-section'>
      <div className="overlay"></div>
      <div className="content">
        <h3>AGENDE SUA CONSULTA</h3>
        <div className="divider"></div>
        <div className="content-text">
        <p>
          Oferecemos uma ampla gama de serviços odontológicos especializados, incluindo próteses dentárias personalizadas para a reposição de dentes perdidos, ortodontia avançada para a correção de alinhamento dental com aparelhos fixos e móveis, endodontia especializada com tratamentos de canal para salvar dentes danificados, periodontia de precisão para tratamentos eficazes da saúde das gengivas, clareamento dental a laser com resultados visíveis em apenas uma sessão, odontologia estética para melhorar a aparência do seu sorriso e implantes dentários de alta qualidade, proporcionando soluções duradouras e naturais. Nossa equipe de profissionais experientes está pronta para cuidar de você com o que há de mais moderno em odontologia.
        </p>
        </div>
        <button className="appointment-button" onClick={() => window.location.href='/Contacts'}>
          AGENDAR SUA CONSULTA
        </button>
        <p> </p>
      </div>
    </div>
    );
}

export default Scheduling;