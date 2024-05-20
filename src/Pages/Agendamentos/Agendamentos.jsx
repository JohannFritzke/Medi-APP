import React, { useState } from "react";
import TopBar from "../../Components/TopBar/TopBar";
import Sidebar from "../../Components/SideBar/SideBar";
import "./Agendamentos.css";

export function Agendamentos() {
  const [medico, setMedico] = useState('');
  const [paciente, setPaciente] = useState('');
  const [data, setData] = useState('');
  const [inicioConsulta, setInicioConsulta] = useState('');
  const [fimConsulta, setFimConsulta] = useState('');
  const [servico, setServico] = useState('');
  const [enviarNotificacao, setEnviarNotificacao] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const schedule = {
      doctor_name: medico,
      patient_name: paciente,
      schedule_date: data,
      initial_time: inicioConsulta,
      final_time: fimConsulta,
      service_type: servico,
      notification: enviarNotificacao
    };

    fetch('http://localhost:8080/schedule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(schedule)
    })
    .then(response => response.json())
    .then(data => {
      alert('Agendamento registrado com sucesso!');
      console.log(data);
    })
    .catch(error => {
      console.error('Erro ao registrar agendamento:', error);
      alert('Erro ao registrar agendamento');
    });
  };

  return (
    <div className="container">
      <TopBar />
      <Sidebar />
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
        <div className="form-group input">
            <label htmlFor="médico">Médico:</label>
            <input
              type="text"
              id="médico"
              name="médico"
              placeholder="Médico"
              value={paciente}
              onChange={(e) => setMedico(e.target.value)}
            />
          </div>
          <div className="form-group input">
            <label htmlFor="paciente">Paciente:</label>
            <input
              type="text"
              id="paciente"
              name="paciente"
              placeholder="Paciente"
              value={paciente}
              onChange={(e) => setPaciente(e.target.value)}
            />
          </div>
          <div className="form-group input">
            <label htmlFor="data">Data:</label>
            <input type="date" id="data" name="data" value={data} onChange={(e) => setData(e.target.value)} />
            <label htmlFor="inicioConsulta">Início da Consulta:</label>
            <input
              type="time"
              id="inicioConsulta"
              name="inicioConsulta"
              value={inicioConsulta}
              onChange={(e) => setInicioConsulta(e.target.value)}
            />
            <label htmlFor="fimConsulta">Fim da Consulta:</label>
            <input
              type="time"
              id="fimConsulta"
              name="fimConsulta"
              value={fimConsulta}
              onChange={(e) => setFimConsulta(e.target.value)}
            />
          </div>
          <div className="form-group input">
            <label htmlFor="servico">Serviço:</label>
            <select id="servico" name="servico" value={servico} onChange={(e) => setServico(e.target.value)}>
              <option value="">Selecione o Serviço</option>
              <option value="Servico1">Serviço 1</option>
              <option value="Servico2">Serviço 2</option>
              <option value="Servico3">Serviço 3</option>
            </select>
            <label>
              <input type="checkbox" name="enviarNotificacao" checked={enviarNotificacao} onChange={(e) => setEnviarNotificacao(e.target.checked)} /> Enviar
              Notificação?
            </label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
