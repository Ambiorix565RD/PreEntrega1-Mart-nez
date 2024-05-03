import PropTypes from 'prop-types';

export default function BotonNavbar({ nombre }) {
    return (
        <button>
            {nombre}
        </button>
    );
  }


BotonNavbar.propTypes = {
    nombre: PropTypes.string.isRequired 
};