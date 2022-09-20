import { createContext, useState, useEffect, useContext } from 'react'
import canciones from '@/assets/listaCanciones.json'
// CONTEXT tiene que ver con el manejo de estados globales en React
// Es decir, poder compartir LA MISMA información entre diferentes niveles de componentes.
// CONTEXT esta disponible a partir de la v16 de React.

// Para usar Context, necesitamos seguir una serie de pasos.

// #1 Creación del contexto vacío
// const SongContext = React.createContext()
const SongContext = createContext()

// #2 Creación del Componente Proveedor del Contexto
// Es decir, maneja de donde se obtiene y como se pasa la información

function SongProvider (props) {
  const [list, setList] = useState([]) // Lista de canciones
  const [loading, setLoading] = useState(true) // Ya cargo la información?
  const [selectedSong, setSelectedSong] = useState({}) // Info de la canción seleccionada

  // Simulo llamada a la API de la lista de canciones
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2000)
  }, [])

  const value = {
    list,
    loading,
    selectedSong,
    setSelectedSong
  }

  return (
    // Siempre se llama value el prop de Provider con la data
    // value es un objeto que indica que datos SON GLOBALES
    <SongContext.Provider value={value}>
      {props.children}
    </SongContext.Provider>
  )
}

// #3 Consumidor del contexto
// Brinda acceso a la data de los componentes

const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

// #4 Exportar las funciones del Provider y el Consumer
// para que puedan ser invocadas en nuestros componentes
export {
  SongProvider,
  useSongContext
}

// USO DE CONTEXT

// #5 Ahora debemos de ir a componente superior (por ejemplo Home)
// y envolver a los componentes que necesitan la información del contexto
