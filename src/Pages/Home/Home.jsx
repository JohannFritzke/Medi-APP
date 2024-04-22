import { FaHandHoldingMedical } from "react-icons/fa";

import "./Home.css";
import "./../Hexagono.css";

export function Home() {
  return (
    <div className="content-home">
      <div className="menu">
        <div className="logo">
          <span>
            <span style={{ color: "#c52233" }}>i</span>
            Medic
          </span>
          <div className="hexagon">
            <span>
              <FaHandHoldingMedical />
            </span>
          </div>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Cadastro de Medico</li>
          </ul>
        </nav>
      </div>
      <main>
        <span>main</span>
      </main>
    </div>
  );
}
