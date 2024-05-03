import  "./NavBar.css";
import BotonNavbar from "./BotonNavbar";
import CartWidget from "./CartWidget";
import logoBateria from "../assets/logoBateria.jpeg";


export default function NavBar(){

    return(
        <>
        <header className="navbarjsx">
        <img className="logoBateria" src={logoBateria}alt="logoBateria" />
            <nav className="navbarEspacio">
                <BotonNavbar nombre="Baterías Acústicas"/>
                <BotonNavbar nombre="Baterías Eléctricas"/>
                <BotonNavbar nombre="Platillos"/>
                <BotonNavbar nombre="Accesorios"/>
                <CartWidget/>
            </nav>
            </header>
        </>
    );
}