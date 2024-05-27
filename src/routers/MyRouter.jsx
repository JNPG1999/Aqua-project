import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Contactos, Inicio, Nosotros, Productos } from '../pages'
import Navegacion from '../components/Navegacion'
import ScrollToTop from '../components/ScrollToTop'
import { DetalleProducto } from '../components/DetalleProducto'
import { Wasapp } from '../components/Wasapp'



const MyRouter = () => {
  return (
    <BrowserRouter>
      {/* <Navegacion /> */}
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Navegacion />}>
          <Route path='/' element={ <Inicio />} index /> 
          <Route path='/nosotros' element={ <Nosotros />} /> 
          <Route path='/productos' element={ <Productos />} />
          <Route path='/productos/:id' element={ <DetalleProducto />} />
          <Route path='/contactos' element={ <Contactos />} /> 
          <Route path='/*' element={ <Navigate to="/" />} />
        </Route>
      </Routes>
      <Wasapp />
    </BrowserRouter>
  )
}

export default MyRouter
