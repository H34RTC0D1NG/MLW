import Navbar from './Componentes/Organismos/Navbar'
import Footer from './Componentes/Organismos/Footer'
import { Routes, Route } from 'react-router-dom'

import '../Src/Css/General/Global.css'

import Inicio from './Paginas/Inicio'

function App() {
    return (
        <>

            <Navbar />

            <Routes>

                <Route 
                
                    path = '/'
                    element = {<Inicio />}
                
                />
            
                <Route 
                
                    path = '/'
                    element = {<Inicio />}
                
                />

            </Routes>

            <Footer />

        </>
    )
}
export default App
