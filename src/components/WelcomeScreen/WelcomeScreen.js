import logo from "./logo.svg";
import "./WelcomeScreen.css";

function WelcomeScreen(){
    return(
        <div className="App">
            <header className="AppHeader">
            <img src={logo} className="AppLogo" alt="logo" />
            <h1 className="AppTittle">
                Bienvenido a 101Calcus
            </h1>
            <p className="AppSubTittle">
                Es como 101 dalmatas pero de calculadoras.
            </p>
            <button className="goBtn">
                Ir a la app
            </button>
            </header>
        </div>
    );
}

export default WelcomeScreen;

