import { useState, useEffect } from 'react'

const FormHook = () => {
  /* Paso 1: Crear un ÚNICO estado con toda la info en forma de objeto */
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    edad: 0,
    genero: '',
    email: '',
    password: ''
  })

  /* Paso 2: Voy a simular traer datos de una API y prerellenar el formulario */
  useEffect(() => {
    setTimeout(() => {
      const info = {
        // JSON que manda el backend
        nombre: 'César',
        apellido: 'Guerra',
        edad: 37,
        genero: 'M',
        email: 'cesar@devf.mx',
        password: 'passwordmuyseguro'
      }
      setDatos(info)
    }, 2000)
  }, [])

  return (
    <div>FormHook</div>
  )
}
export default FormHook
