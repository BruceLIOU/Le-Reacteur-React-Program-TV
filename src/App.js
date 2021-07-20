import "./assets/css/App.css";
import logo from "./assets/img/logo.png";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="Logo M6" />
      </header>
      <Section />
    </div>
  );
}

export default App;
