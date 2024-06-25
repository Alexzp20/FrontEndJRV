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
import Footer from './Components/Footer/Footer';
import Miembros from './Components/Junta Directiva/Miembros';
import NuevaAgenda from './Components/Agenda/NuevaAgenda';
import RevisionSolicitud from './Components/Buzon/RevisionSolicitud';
import { MenuActas } from './Components/Actas/MenuActas';
import { NuevaActa } from './Components/Actas/NuevaActa';
import { GestionActas } from './Components/Actas/GestionActas';
import { MenuInformes } from './Components/Informes/MenuInformes';
import { NuevoInforme } from './Components/Informes/NuevoInforme';
import { GestionInformes } from './Components/Informes/GestionInformes';
import { VerPdf } from './Components/Pdf/VerPdf';
import { MenuAgenda } from './Components/Agenda/MenuAgenda';

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
          <Route path='/buzon/revision' element={<RevisionSolicitud/>}/>
          <Route path='/buscador' element={<MenuBuscador/>}/>
          <Route path='/buscador/solicitud' element={<BusquedaSolicitud/>}/>
          <Route path='/buscador/agenda' element={<BusquedaAgenda/>}/>
          <Route path='/buscador/acuerdo' element={<BusquedaAcuerdo/>}/>
          <Route path='/estadistico' element={<MenuEstadistico/>}/>
          <Route path='/estadistico/fechas' element={<EstRanFecha/>}/>
          <Route path='/estadistico/areas' element={<EstAreas/>}/>
          <Route path='/ajustes' element={<MenuAjustes/>}/>
          <Route path='/ajustes/usuarios' element={<MenuUsuarios/>}/>
          <Route path='/junta/miembros' element={<Miembros/>}/>
          <Route path='/agenda' element={<MenuAgenda/>}/>
          <Route path='/agenda/nueva' element={<NuevaAgenda/>}/>
          <Route path='/acta' element={<MenuActas/>}/>
          <Route path='/acta/nueva' element={<NuevaActa/>}/>
          <Route path='/acta/gestion' element={<GestionActas/>}/>
          <Route path='/informe' element={<MenuInformes/>}/>
          <Route path='/informe/nuevo' element={<NuevoInforme/>}/>
          <Route path='/informe/gestion' element={<GestionInformes/>}/>
          <Route path='/' element={<InicioSesion/>}/>
          <Route path='*' element={<InicioSesion/>}/>
        </Routes>
      </BrowserRouter> 

      <Footer/>
    </div>
  );
}

export default App;
