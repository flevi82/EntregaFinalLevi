
import ItemList from './ItemList';

function ItemListContainer(greeting) {
  return (
    <>
    <h2>Hola {greeting.nombre}, Bienvenido a Fono.ar</h2>
    <ItemList/>
    </>
  )
}

export default ItemListContainer