import Btn_Contacto from '../Atomos/Btn_Contacto'
import '../../Css/Organismos/Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (

        <nav className = 'nav-craft'>
            <img className = 'logocraft' src = '../../../../Public/Icons/01.png' alt = '' />
            <Link className = 'logo' to = '/' >
                Minecraft
            </Link>

            <ul>

                <li className = 'item'>
                    <Link to = '/'>Inicio</Link>
                    <span className = 'hilo' />
                </li>

                <li className = 'item'>
                    <Link to = '/MD'>Mods</Link>
                    <span className = 'hilo' />
                </li>

                <li className = 'item'>
                    <Link to = '/TP'>Texture Packs</Link>
                    <span className = 'hilo' />
                </li>

                <li className = 'item'>
                    <Link to = '/VS'>Versiones</Link>
                    <span className = 'hilo' />
                </li>

                <li className = 'item'>
                    <Link to = '/DP'>DataPacks</Link>
                    <span className = 'hilo' />
                </li>

                <li className = 'item'>
                    <Link to = '/SK'>Skins</Link>
                    <span className = 'hilo' />
                </li>

                <li className = 'item'>
                    <Link to = '/MP'>Mods Packs</Link>
                    <span className = 'hilo' />
                </li>

                <li className = 'item'>
                    <Link to = '/SM'>Sobre Mi</Link>
                    <span className = 'hilo' />
                </li>

            </ul>

            <Btn_Contacto />

        </nav>

    )
} export default Navbar