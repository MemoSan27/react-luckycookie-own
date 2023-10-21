import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import getRandomFromArr from './services/getRandomFromArr'
import Phrase from './components/Phrase';
import Button from './components/Button';
import bgArr from './utils/bgArr.json';

function App() {
  
  const quote = getRandomFromArr(phrases);
  const image = getRandomFromArr(bgArr);

  const [ randomPhrase, setRandomPhrase] = useState( quote );
  const [ bgApp, setBgApp ] = useState(image);

  const objStyle = {
    backgroundImage: `url('../fondo${bgApp}.jpg')`
  }

  return (
    <div style={objStyle} className='app'> 
        <h1 className='app__title'> Galleta de la fortuna</h1>
        <article className='app__card'>
          <Phrase 
            randomPhrase={randomPhrase}
          />
          <Button
            setRandomPhrase={setRandomPhrase}
            setBgApp={setBgApp}
          />
        </article>
    </div>
    
  )
}

export default App
