import "./App.css";
import logo from "./logo.svg";

function App() {
  const usuario = "Beggiana";

  return (
    <div className="App">
      <h1>
        Parabens, <br /> <span>{usuario}</span>.
      </h1>
      <h2>Voce foi</h2>
      <h1>
        <span>aprovado</span>
      </h1>
      <h2>no processo seletivo!</h2>

      <img src={logo} alt="logotipo echosec" />

      <h3>
        Agora voce tem um encontro marcado conosco toda <span>terca-feira</span>
        , das <span>13h as 14h</span>.
      </h3>

      <p>
        Mas, antes disso, voce precisa confirmar a sua{" "}
        <a href="https://forms.gle/EQf8dSFwgM4XnNF79">inscricao</a> no clube e
        conhecer a nossa{" "}
        <a href="https://www.canva.com/design/DAGj_602GH8/tKxLZivdyRSPsIxnjpcbWw/edit?utm_content=DAGj_602GH8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">
          estrutura organizacional
        </a>
        .
      </p>
    </div>
  );
}

export default App;
