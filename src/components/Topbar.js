import React, {Component} from "react";
import AppLogo from "./elements/AppLogo";
import GoBtn from "./elements/GoBtn";
import Dropdown from "./elements/Dropdown";

class Topbar extends Component{
    render(){
        return (
            <div className="container-fluid Topbar">
                <div className="row">
                    <div className="col text-start">
                        <GoBtn className="GoBtn BackBtn" message="Inicio"/>
                    </div>
                    <div className="col text-center">
                        <AppLogo className="AppLogoMain"/>
                    </div>
                    <div className="col text-end">
                        <Dropdown className="MainDropdown "/>
                    </div>
                </div>
            </div>
        );
    }

} export default Topbar;