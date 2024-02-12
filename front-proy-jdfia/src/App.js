import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';
import MenuInicio from './Components/Inicio/MenuInicio';
import MenuBuzon from './Components/Buzon/MenuBuzon';
import MenuBuscador from './Components/Buscador/MenuBuscador';
import InicioSesion from './Components/InicioSesion/InicioSesion';
import BuzonSolicitudes from './Components/Buzon/BuzonSolicitudes';
import HistorialBuzon from './Components/Buzon/HistorialBuzon';
import BusquedaSolicitud from './Components/Buscador/BusquedaSolicitud';
import BusquedaAgenda from './Components/Buscador/BusquedaAgenda';

function App() {
  return (
    <div className="App">
       <BrowserRouter>

        <NavBar/>

        <Routes>
          <Route path='/inicio' element={<MenuInicio/>}/>
          <Route path='/buzon' element={<MenuBuzon/>}/>
          <Route path='/buzon/nuevaSolicitud' element={<BuzonSolicitudes/>}/>
          <Route path='/buzon/historial' element={<HistorialBuzon/>}/>
          <Route path='/buscador' element={<MenuBuscador/>}/>
          <Route path='/buscador/solicitud' element={<BusquedaSolicitud/>}/>
          <Route path='/buscador/agenda' element={<BusquedaAgenda/>}/>
          <Route path='/' element={<InicioSesion/>}/>
          
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
