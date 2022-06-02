import React, {Component} from "react";
import AppLogo from "./elements/AppLogo";
import GoBtn from "./elements/GoBtn";

class WelcomeScreen extends Component{
    render(){
        return (
            <div className="AppHeader">
                <AppLogo className="AppLogoWelcome"/>
                <h1 className="AppTittle">
                    Bienvenido a 101Calcus
                </h1>
                <p className="AppSubTittle">
                    Es como 101Dálmatas pero de calculadoras
                </p>
                <GoBtn className="GoBtn" message="Ir a la app"/>
            </div>
        );
    }

} export default WelcomeScreen;