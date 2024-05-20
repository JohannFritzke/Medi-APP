import { useState } from "react";
import background from "../../assets/img.jpg";
import "./Login.css";
import { FaUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import Logo from "../../Components/Logo/Logo";

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {

    const newUser = {
      email,
      password,
      userType
    };

    fetch('http://localhost:8080/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    }).then(response => {
      if (response.ok) {
        alert("User registered successfully");
        navigate("/user/dashboard");
      } else {
        response.json().then(data => alert("Failed to register user: " + data.message));
      }
    }).catch(error => {
      alert("Failed to register user: " + error.message);
    });
  }

  return (
    <div className="content">
      <main>
        <div>
          <img src={background} alt="" />
        </div>
      </main>

      <aside>
        <div className="title">
          <div className="title-name">
            <span style={{ color: "#3a86ff" }}>i</span>
            Medic
          </div>
          <Logo />
        </div>
        <span>Cadastre-se</span>
        <div className="inputs">
          <div className="inputs-format">
            <FaUser />
            <input 
              type="email" 
              placeholder="Email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <select 
            className="select"
            value={userType}
            onChange={e => setUserType(e.target.value)}
          >
            <option disabled selected value="">
              Tipo de Usuário
            </option>
            <option value="p">Paciente</option>
            <option value="d">Médico</option>
          </select>
          <div className="inputs-format">
            <RiLockPasswordFill />
            <input 
              type="password" 
              placeholder="Senha" 
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button onClick={handleLogin}>Entrar</button>
      </aside>
    </div>
  );
}
