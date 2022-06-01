import React, {Component} from "react";
import AppLogo from "./AppLogo";
import "./css/WelcomeScreen.css";

class WelcomeScreen extends Component{

    render(){
        return  <div className="App">
                    <header className="AppHeader">
                        <AppLogo/>
                        <h1 className="AppTittle">
                            Bienvenido a 101Calcus
                        </h1>
                        <p className="AppSubTittle">
                            Es como 101Dálmatas pero de calculadoras.
                        </p>
                        <button className="GoAppBtn">
                            Ir a la app
                        </button>
                    </header>
                </div>
    }
}

export default WelcomeScreen;