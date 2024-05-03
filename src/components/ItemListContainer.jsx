//Mostrar mensaje de bienvenida
//Importarlo dentro de App.jsx y abajo de NavBar.
import PropTypes from 'prop-types';
  export default function ItemListContainer({ greeting }) {
    return (
      <>
        <h2>{greeting}</h2>
      </>
    );
  }

  
  ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired 
};