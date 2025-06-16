import { useState } from 'react'
import '../style/App.css'
import MainBody from './MainBody'

function App() {
    const [count, setCount] = useState(0)
    return (
      <>
        <MainBody/>
      </>
    )
}

export default App
