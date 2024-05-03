//Logo del carrito con la notificacion del numero en el carrito.
//Agregarlo dentro del NavBar con estilos de bootstrap o manual en css.
import logoCarrito from "../assets/logoCarrito.png"

export default function CartWidget() {
    return (
    
        <button>3<img src={logoCarrito} alt="logoCarrito" /></button>
    );
  }