import { Routes, Route } from 'react-router-dom'
import Contacto from '../pages/Contacto'
import Error404 from '../pages/Error404'
import Home from '../pages/Home'
import Portafolio from '../pages/Portafolio'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portafolio' element={<Portafolio />} />
      <Route path='/contacto' element={<Contacto />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}
export default RoutesIndex
