import { useSongContext } from '@/context/SongContext'

const Header = () => {
  const context = useSongContext()
  const song = context.selectedSong

  const handleSearch = (e) => {
    context.setSearch(e.target.value)
  }

  const nextSong = () => {
    const songIndex = context.list.findIndex(s => s.id === song.id)
    context.list.length > songIndex + 1
      ? context.setSelectedSong(context.list[songIndex + 1])
      : context.setSelectedSong(context.list[0])
  }

  const prevSong = () => {
    const songIndex = context.list.findIndex(s => s.id === song.id)
    songIndex > 0
      ? context.setSelectedSong(context.list[songIndex - 1])
      : context.setSelectedSong(context.list[context.list.length - 1])
  }

  return (
    song.title
      ? (
        <div>
          Now Playing... {song.title} - {song.artist}
          <input type='search' onChange={handleSearch} />
          <button onClick={prevSong}> Prev </button>
          <button onClick={nextSong}> Next </button>
        </div>)
      : <div>Selecciona una canción...</div>
  )
}

export default Header
