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
import BusquedaAcuerdo from './Components/Buscador/BusquedaAcuerdo';
import MenuEstadistico from './Components/Estadisticos/MenuEstadistico';
import MenuAjustes from './Components/Ajustes/MenuAjustes';
import EstAreas from './Components/Estadisticos/EstAreas';
import EstRanFecha from './Components/Estadisticos/EsRanFecha';
import MenuUsuarios from './Components/Usuarios/MenuUsuarios';

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
          <Route path='/buscador/acuerdo' element={<BusquedaAcuerdo/>}/>
          <Route path='/estadistico' element={<MenuEstadistico/>}/>
           <Route path='/estadistico/fechas' element={<EstRanFecha/>}/>
         <Route path='/estadistico/areas' element={<EstAreas/>}/>
          <Route path='/ajustes' element={<MenuAjustes/>}/>
          <Route path='/ajustes/usuarios' element={<MenuUsuarios/>}/>
          <Route path='/' element={<InicioSesion/>}/>
          <Route path='*' element={<InicioSesion/>}/>
          
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
