import { 
    
    TbBrandMinecraft 

} from 'react-icons/tb'

import { 
    
    FaGithub, 
    FaYoutube, 
    FaSquareInstagram, 
    FaWindows, 
    FaEnvelope, 
    FaPhone, 
    FaLocationDot 

} from 'react-icons/fa6'

import '../../Css/Organismos/Footer.css'

function Footer() {
    return (

        <footer>
            <div className = 'container'>
                <div className = 'sec about'>
                    
                    <h1><TbBrandMinecraft className = 'Cubo' /> Sobre Mi </h1>
                    
                    <p>
                        Mi nombre es Isam Mejias tengo 25 Años, estoy estudiando Ing. Informatica
                        en el Duoc UC, soy alguien como cualquier otro los juegos me encantan.
                    </p>

                    <ul className = 'sci'>
                        <li><a href = 'https://github.com/H34RTC0D1NG' target = '_Blank'> <FaGithub /> </a></li>
                        <li><a href = 'https://www.youtube.com/@thehearthfirevevo' target = '_Blank'> <FaYoutube /> </a></li>
                        <li><a href = 'https://www.instagram.com/h34rtf1r3/' target = '_Blank'> <FaSquareInstagram /> </a></li>
                        <li><a href = ''> <FaWindows /> </a></li>
                    </ul>

                </div>

                <div className = 'sec lineas_rapidas'>
                    <h2>Habilidades</h2>
                    <ul>
                        <li><span>Pruebas Unitarias</span></li>
                        <li><span>React</span></li>
                        <li><span>Css</span></li>
                        <li><span>Componentes</span></li>
                    </ul>
                </div>

                <div className = 'sec lineas_rapidas'>
                    <h2>Herramientas</h2>
                    <ul>
                        <li><span>Visual Studio Code</span></li>
                        <li><span>Bootstrap</span></li>
                        <li><span>React Icons</span></li>
                        <li><span>Terminal</span></li>
                    </ul>
                </div>

                <div className = 'sec contacto'>
                    <h2>Contacto</h2>
                    <ul className = 'info'>
                        
                        <li>
                            <span> <FaPhone /> </span>
                            <p>+ 56 9 1234 5678</p>
                        </li>

                        <li>
                            <span> <FaEnvelope /> </span>
                            <p>isa.mejias@duocul.cl</p>
                        </li>

                        <li>
                            <span> <FaLocationDot /> </span>
                            <p>Chile, Santiago</p>  
                        </li>

                    </ul>
                </div>

            </div>

            <div className = 'bar_down'>
                <p className = 'left'>Creado x Isam Mejias</p>
                <p className = 'right'>Desarrollado x Gusto</p>
            </div>

        </footer>

    )
} export default Footer