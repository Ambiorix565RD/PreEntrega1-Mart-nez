
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"¡Bienvenidos a la mejor tienda de instrumentos musicales!"}/>
    </>
  )
}

export default App
