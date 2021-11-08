import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Contacto from './pages/Contacto';
import EjemploHookUseState from './pages/EjemploHookUseState';
import EjemploHookUseEffect from './pages/EjemploHookUseEffect';
import Usuarios from './pages/admin/Usuarios';
import IndexAdmin from './pages/admin/Index';
import LayoutAdmin from './layout/LayoutAdmin';
import LayoutNormal from './layout/LayoutNormal';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Index />} />
          <Route path='/contacto' element = {<Contacto />} />
          <Route path="ejemplo" element={<LayoutNormal />}>
            <Route path='useState' element = {<EjemploHookUseState />} />
            <Route path='useEffect' element = {<EjemploHookUseEffect />} />
          </Route>
          <Route path='admin' element={<LayoutAdmin />}>
            <Route path='' element = {<IndexAdmin />} />
            <Route path='usuarios' element = {<Usuarios />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
