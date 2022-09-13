import { useRef, useEffect } from 'react'

const RefDom = () => {
  const inputRef = useRef()

  useEffect(() => {
    console.log(inputRef.current)
    inputRef.current.focus()
    inputRef.current.value = 'Hola Mundo'
  }, [])

  return (
    <div>
      <input ref={inputRef} type='text' />
    </div>
  )
}
export default RefDom
