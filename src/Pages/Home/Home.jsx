import React from "react";
import Sidebar from "../../Components/SideBar/SideBar";
import TopBar from "../../Components/TopBar/TopBar";
import "./Home.css";

import dadosPacientes from "./dadosPacientes.json";
import dadosConsultas from "./dadosConsultas.json";

export function Home() {
  return (
    <div className="container">
      <Sidebar />
      <TopBar />
      <div className="home-content">
        <div className="tabela-format">
          <span>Lista de Agendamentos</span>
          <table className="tabela">
            <thead>
              <tr>
                <th>Médico</th>
                <th>Tipo de Consulta</th>
                <th>Data</th>
                <th>Hora Inicial</th>
                <th>Hora Final</th>
              </tr>
            </thead>
            <tbody>
              {dadosConsultas.map((item, index) => (
                <tr key={index}>
                  <td>{item.medico}</td>
                  <td>{item.tipoConsulta}</td>
                  <td>{item.data}</td>
                  <td>{item.horaInicial}</td>
                  <td>{item.horaFinal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="tabela-format">
          <span>Lista de Pacientes</span>
          <table className="tabela">
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>E-mail</th>
                <th>Data/Horário</th>
              </tr>
            </thead>
            <tbody>
              {dadosPacientes.map((item, index) => (
                <tr key={index}>
                  <td>{item.nome}</td>
                  <td>{item.cpf}</td>
                  <td>{item.telefone}</td>
                  <td>{item.email}</td>
                  <td>{item.dataHorario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
