import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Login, Secret, Signup, Dashboard } from '@/pages'
import { AuthContext } from '@/context/AuthContext'

const RoutesIndex = () => {
  const { isAuth } = useContext(AuthContext)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/secret' element={<Secret />} />
      <Route path='/signup' element={<Signup />} />
      <Route
        path='/dashboard'
        element={isAuth ? <Dashboard /> : <Navigate to='/login' replace />}
      />
    </Routes>

  )
}
export default RoutesIndex
