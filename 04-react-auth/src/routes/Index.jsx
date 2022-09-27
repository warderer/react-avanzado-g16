import { Routes, Route } from 'react-router-dom'
import { Home, Login, Secret, Signup } from '@/pages'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>

  )
}
export default RoutesIndex
