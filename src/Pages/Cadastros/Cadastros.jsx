import Sidebar from "../../Components/SideBar/SideBar";
import TopBar from "../../Components/TopBar/TopBar";
import "./Cadastros.css";

export function Cadastros() {
  return (
    <div className="container">
      <TopBar />
      <Sidebar />
      <div className="form-container">
        <form className="form">
          <div className="form-group">
            <input type="text" placeholder="Nome" />
            <input type="text" placeholder="Sobrenome" />
          </div>
          <div className="form-group">
            <select>
              <option value="">Sexo</option>
              <option value="Masculino">Masculino</option>
              <option value="Feminino">Feminino</option>
            </select>
            <input type="date" placeholder="Data de nascimento" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="CPF" />
            <input type="text" placeholder="RG" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Nome da mãe" />
            <input type="text" placeholder="Nome social" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Telefone" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Estado" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Endereço" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="Número" />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
