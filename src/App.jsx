import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRandomFromArr from './services/getRandomFromArr'
import Phrase from './components/Phrase';

function App() {
  
  const quote = getRandomFromArr(phrases);
  const [ randomPhrase, setRandomPhrase] = useState( quote );

  return (
    <>
      <div> 
        <h1> Galleta de la fortuna</h1>
        <Phrase 
          randomPhrase={randomPhrase}
        />
      </div>
    </>
  )
}

export default App
