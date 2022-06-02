import dropdown from "../imgs/dropdown.png";

function AppLogo({className = ''}){
    return(
        <img src={dropdown} className={className} alt="logo" />
    )
}

export default AppLogo;