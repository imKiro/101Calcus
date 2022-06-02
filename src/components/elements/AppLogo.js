import logo from "../imgs/logo.svg";

function AppLogo({className = ''}){
    return(
        <img src={logo} className={className} alt="logo" />
    )
}

export default AppLogo;