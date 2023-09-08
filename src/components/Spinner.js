import { PulseLoader } from "react-spinners"

function Spinner (){
    return (
        <div className="carga">
        <h5 className="cargando">Cargando</h5>
        <PulseLoader className="spinner" color="#acc9c3" size="5px"/>
        </div>
    )
}

export default Spinner