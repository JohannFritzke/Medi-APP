import React from "react";
import TopBar from "../../Components/TopBar/TopBar";
import Sidebar from "../../Components/SideBar/SideBar";
import "./Agendamentos.css";

export function Agendamentos() {
  return (
    <div className="container">
      <TopBar />
      <Sidebar />
      <div className="form-container">
        <form className="form">
          <div className="form-group input">
            <label htmlFor="medico">Médico:</label>
            <select id="medico" name="medico">
              <option value="">Selecione o Médico</option>
              <option value="Medico1">Médico 1</option>
              <option value="Medico2">Médico 2</option>
              <option value="Medico3">Médico 3</option>
            </select>
          </div>
          <div className="form-group input">
            <label htmlFor="paciente">Paciente:</label>
            <input
              type="text"
              id="paciente"
              name="paciente"
              placeholder="Paciente"
            />
          </div>
          <div className="form-group input">
            <label htmlFor="data">Data:</label>
            <input type="date" id="data" name="data" placeholder="Data" />
            <label htmlFor="inicioConsulta">Início da Consulta:</label>
            <input
              type="time"
              id="inicioConsulta"
              name="inicioConsulta"
              placeholder="Início da Consulta"
            />
            <label htmlFor="fimConsulta">Fim da Consulta:</label>
            <input
              type="time"
              id="fimConsulta"
              name="fimConsulta"
              placeholder="Fim da Consulta"
            />
          </div>
          <div className="form-group input">
            <label htmlFor="servico">Serviço:</label>
            <select id="servico" name="servico">
              <option value="">Selecione o Serviço</option>
              <option value="Servico1">Serviço 1</option>
              <option value="Servico2">Serviço 2</option>
              <option value="Servico3">Serviço 3</option>
            </select>
            <label>
              <input type="checkbox" name="enviarNotificacao" /> Enviar
              Notificação?
            </label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
