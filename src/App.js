import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="AppTittle">
          Bienvenido a 101Calcus
        </h1>
        <p className="AppSubTittle">
          Es como 101 dalmatas pero de calculadoras.
        </p>
        <button className="btn">
          ir a la app
        </button>
      </header>
      
    </div>
  );
}

export default App;
