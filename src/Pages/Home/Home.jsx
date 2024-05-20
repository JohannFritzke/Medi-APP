import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/SideBar/SideBar";
import TopBar from "../../Components/TopBar/TopBar";
import "./Home.css";
export function Home() {

  const [pacientes, setPacientes] = useState([]);
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
   fetch('http://localhost:8080/patient').then((response )=> {
    return response.json()
   }).then(response => {
    setPacientes(response)
   })

   fetch('http://localhost:8080/schedule').then((response )=> {
    return response.json()
   }).then(response => {
    setAgendamentos(response)
   })

  }, [])

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
                <th>Paciente</th>
                <th>Tipo de Consulta</th>
                <th>Data</th>
                <th>Hora Inicial</th>
                <th>Hora Final</th>
              </tr>
            </thead>
            <tbody>
            {agendamentos.length > 0 && (
                <>
                {
                  agendamentos.map((item, index) => (
                    <tr key={index}>
                      <td>{item.doctor_name}</td>
                      <td>{item.patient_name}</td>
                      <td>{item.service_type}</td>
                      <td>{item.schedule_date}</td>
                      <td>{item.initial_time}</td>
                      <td>{item.final_time}</td>
                    </tr>
                  ))
                }
                </>
              ) }
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
              {pacientes.length > 0 && (
                <>
                {
                  pacientes.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.cpf}</td>
                      <td>{item.phone}</td>
                      <td>{item.email}</td>
                      <td>{item.birth_date}</td>
                    </tr>
                  ))
                }
                </>
              ) }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
