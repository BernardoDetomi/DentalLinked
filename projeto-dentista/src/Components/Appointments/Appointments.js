import React, { useState } from 'react';
import './Appointments.css';
import axios from 'axios';

const Appointment = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    dataNascimento: '',
    email: '',
    contato: '',
    endereco: '',
    cidade: '',
    cep: '',
    motivo: '',
    historico: ''
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formData);

    setFormData({
      nome: '',
      cpf: '',
      dataNascimento: '',
      email: '',
      contato: '',
      endereco: '',
      cidade: '',
      cep: '',
      motivo: '',
      historico: ''
    });

    try {
      const response = await axios.post('http://localhost:8080/message', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response && response.data) {
        setMessage(response.data.message);
      }
    } catch (error) {
      // Verifica se error.response existe antes de acessar message
      setMessage(error.response?.data?.message || "Erro ao enviar o formulário");
    }
  };

  return (
    <div>
      {/*<h1 className='title'>Agendamento</h1>*/}
      {message ? <p className='warning'>{message}</p> : ""}
      <div className="appointment">
        <form onSubmit={handleSubmit} className="form">
          <div className="form-columns">
            <div className="coluna">
              <div className="form-group">
                <label htmlFor="nome">Nome Completo:</label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Digite seu nome completo"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="cpf">CPF:</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  placeholder="Digite seu CPF"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="dataNascimento">Data de Nascimento:</label>
                <input
                  type="date"
                  id="dataNascimento"
                  name="dataNascimento"
                  value={formData.dataNascimento}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Digite seu e-mail"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contato">Número de Contato:</label>
                <input
                  type="text"
                  id="contato"
                  name="contato"
                  value={formData.contato}
                  onChange={handleChange}
                  placeholder="Digite o número de contato"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="endereco">Endereço:</label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                  placeholder="Digite seu endereço"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="cidade">Cidade:</label>
                <input
                  type="text"
                  id="cidade"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  placeholder="Digite sua cidade"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="cep">CEP:</label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                  placeholder="Digite seu CEP"
                  required
                />
              </div>
            </div>

            <div className="column">
              <div className="form-group">
                <label htmlFor="motivo">Motivo para o Encaminhamento:</label>
                <textarea
                  id="motivo"
                  name="motivo"
                  value={formData.motivo}
                  onChange={handleChange}
                  placeholder="Descreva o motivo para o encaminhamento"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="historico">Histórico Relevante:</label>
                <textarea
                  id="historico"
                  name="historico"
                  value={formData.historico}
                  onChange={handleChange}
                  placeholder="Informe algum histórico relevante"
                />
              </div>
              <div className='doubts'>
                <h2>
                  Dúvida? Entre em contato
                  <p>Telefone: (38) 99808-9253</p>
                  <p className='whatsapp'>Whatsapp: (31) 99876-9253</p>
                </h2>
              </div>
            </div>
          </div>
          <button type="submit">Agendar</button>
        </form>
      </div>
    </div>
  );
};       

export default Appointment;