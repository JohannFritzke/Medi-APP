import background from "../../assets/img.jpg";
import "./Login.css";
import { FaUser } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import Logo from "../../Components/Logo/Logo";

export function Login() {
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
          <Logo/>
        </div>
        <span>Identifique-se</span>
        <div className="inputs">
          <div className="inputs-format">
            <FaUser />
            <input type="text" placeholder="Usuario" />
          </div>
          <select className="select">
            <option disabled selected value="">
              Tipo de Usuário
            </option>
            <option value="medico">Médico</option>
            <option value="paciente">Paciente</option>
          </select>
          <div className="inputs-format">
            <RiLockPasswordFill />
            <input type="text" placeholder="Senha" />
          </div>
        </div>

        <Link to={"/user/dashboard"}>
          <button>Acessar</button>
        </Link>

        <div className="change-password">
          <span>Esqueceu sua senha?</span>
        </div>
      </aside>
    </div>
  );
}
