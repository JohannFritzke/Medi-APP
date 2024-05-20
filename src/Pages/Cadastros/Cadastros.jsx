import React, { useState } from 'react';
import Sidebar from "../../Components/SideBar/SideBar";
import TopBar from "../../Components/TopBar/TopBar";
import "./Cadastros.css";

export function Cadastros() {
  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    birth_date: "",
    cpf: "",
    rg: "",
    mother_name: "",
    social_name: "",
    phone: "",
    email: "",
    cep: "",
    address: "",
    number: "",
    neighborhood: "",
    city: "",
    province: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const dataToSend = {
      ...formData,
      sex: formData.sex === "Masculino" ? "m" : "f",
      number: parseInt(formData.number, 10)
    };

    try {
      const response = await fetch('http://localhost:8080/patient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend)
      });

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        setFormData({});
      } else {
        alert('Erro ao cadastrar paciente');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao conectar ao servidor');
    }
  }

  return (
    <div className="container">
      <TopBar />
      <Sidebar />
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome completo:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Sexo:</label>
            <select name="sex" value={formData.sex} onChange={handleChange}>
              <option value="">Selecione</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
          </div>
          <div className="form-group">
            <label>Data de nascimento:</label>
            <input type="date" name="birth_date" value={formData.birth_date} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>CPF:</label>
            <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>RG:</label>
            <input type="text" name="rg" value={formData.rg} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Nome da mãe:</label>
            <input type="text" name="mother_name" value={formData.mother_name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Nome social:</label>
            <input type="text" name="social_name" value={formData.social_name} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Telefone:</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>CEP:</label>
            <input type="text" name="cep" value={formData.cep} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Endereço:</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Número:</label>
            <input type="text" name="number" value={formData.number} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Bairro:</label>
            <input type="text" name="neighborhood" value={formData.neighborhood} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Cidade:</label>
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Estado:</label>
            <input type="text" name="province" value={formData.province} onChange={handleChange} />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
