import ItemCount from './ItemCount';

function ItemListContainer(greeting) {
  return (
    <>
    <h2>Hola {greeting.nombre}, Bienvenido a Fono.ar</h2>
    <ItemCount stock={5} initial={0} onAdd/>
    </>
  )
}

export default ItemListContainer