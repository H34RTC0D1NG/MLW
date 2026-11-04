import { Link } from 'react-router-dom'
import '../../Css/Atomos/Btn.css'

function Btn_Contacto() {
    return (

        <button className = 'Contacto'>
            <Link to = '/Contacto'>
                Contacto
            </Link>
        </button>

    )
} export default Btn_Contacto