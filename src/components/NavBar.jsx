
import BotonNavbar from "./BotonNavbar";
import CartWidget from "./CartWidget";
import logoBateria from "../assets/logoBateria.jpeg"


export default function NavBar(){

    return(
        <>
        <img src={logoBateria}alt="logoBateria" />
            <nav className="navbar">
                <BotonNavbar nombre="Baterías Acústicas"/>
                <BotonNavbar nombre="Baterías Eléctricas"/>
                <BotonNavbar nombre="Platillos"/>
                <BotonNavbar nombre="Accesorios"/>
                <CartWidget/>
            </nav>
        </>
    );
}