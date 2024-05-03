//Mostrar mensaje de bienvenida
//Importarlo dentro de App.jsx y abajo de NavBar.
import "./ItemListContainer.css";
import PropTypes from 'prop-types';
import imagenBateria from "../assets/background3.jpg";

  export default function ItemListContainer({ greeting }) {
    return (
      <>
      <body>
      <h2 className="texto">{greeting}</h2>
          <div className="imagenBateria">
            <img  src={imagenBateria} alt="imagenBateria" />
          </div>
      </body>
      </>
    );
  }

  
  ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired 
};