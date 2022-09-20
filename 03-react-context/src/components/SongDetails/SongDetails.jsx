import { useSongContext } from '@/context/SongContext'
import './songdetails.css'

const SongDetails = () => {
  const context = useSongContext()
  return (
    <>
      {context.selectedSong.title
        ? <div>
          <img src={`https://picsum.photos/seed/${context.selectedSong.id}/400/400`} alt='Portada del Disco' />
          <h1>{context.selectedSong.title}</h1>
          <h4>{context.selectedSong.artist}</h4>
          <h6>{context.selectedSong.year}</h6>
        </div>
        : <h1>Selecciona una canción</h1>}
    </>
  )
}
export default SongDetails
