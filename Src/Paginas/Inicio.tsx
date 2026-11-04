import Desplazate from '../Componentes/Atomos/Desplazate'
import Live from '../Componentes/Atomos/Live'
import '../Css/Paginas/Inicio.css'

function Inicio() {
    return (

        <section className = 'Inicio'>
            
            <Live Video = '../../Public/Lives/Leaves_Live.mp4' />

            <span className = 'Capa' />

            <div className = 'Contenido'>
                
                <p className = 'Etiqueta'> Un mundo infinito donde tu única frontera es tu propia imaginación </p>
                
                <h1 className = 'Titulo'> Minecraft : La Verdadera Odisea</h1>

                <p className = 'Sub'>
                    No estás limitado por historias preestablecidas ni caminos obligatorios: todo lo que ves puede ser 
                    destruido, recogido y transformado en lo que sea que se te ocurra. Esto es Minecraft, y es mucho 
                    más que un simple videojuego; es un lienzo en blanco gigante, que tu puedes destruir o diseñar.
                </p>

            </div>

            <Desplazate />

        </section>

    )
} export default Inicio