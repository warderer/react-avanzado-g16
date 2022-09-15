import { Routes, Route } from 'react-router-dom'
import Contacto from '../pages/Contacto'
import Home from '../pages/Home'
import Portafolio from '../pages/Portafolio'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portafolio' element={<Portafolio />} />
      <Route path='/contacto' element={<Contacto />} />
    </Routes>
  )
}
export default RoutesIndex
