import { createContext, useState, useEffect } from 'react'
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode'

export const AuthContext = createContext()

export function AuthProvider (props) {
  const [isAuth, setIsAuth] = useState(false) // ¿Estoy autenticado?
  const [user, setUser] = useState(null) // Info del usuario DESCIFRADA

  const loginUser = (token) => {
    // Guardamos el token en el localStorage del navegador
    // Este dato permance aún si el navegador se cierrra y se vuelve abrir.
    window.localStorage.setItem('token', token)
    const decoded = jwt_decode(token)
    setUser(decoded) // Guardo la info del token decodificado en su estado
    setIsAuth(true) // Estoy autenticado
  }

  const logout = () => {
    window.localStorage.removeItem('token') // Borramos el token del localStorage
    setIsAuth(false) // Estoy deslogeado
    setUser(null)
  }

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (token) {
      const decoded = jwt_decode(token)
      setUser(decoded)
      setIsAuth(true)
    }
  }, [])

  const values = {
    isAuth,
    user,
    loginUser,
    logout
  }

  return (
    <AuthContext.Provider value={values}>
      {props.children}
    </AuthContext.Provider>
  )
}
