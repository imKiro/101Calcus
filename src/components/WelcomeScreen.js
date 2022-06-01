import React, {useState} from "react";
import AppLogo from "./AppLogo";
import "./css/WelcomeScreen.css";

export default function WelcomeScreen() {

    const [view, setView] = useState(true);
    console.log(view);

    if (view === true){
        return (
            <div className="App">
                <header className="AppHeader">
                    <AppLogo/>
                    <h1 className="AppTittle">
                        Bienvenido a 101Calcus
                    </h1>
                    <p className="AppSubTittle">
                        Es como 101Dálmatas pero de calculadoras
                    </p>
                    <button className="GoAppBtn" onClick={()=>setView(false)}>
                        Ir a la app
                    </button>
                </header>
            </div>
        );
    } else {
        return (
            <div>
                <h1>The next component</h1>
                <button className="GoAppBtn" onClick={()=>setView(true)}>
                    Ir al inicio
                </button>
            </div>
        )
    }
}