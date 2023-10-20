import { useState } from 'react'
import phrases from '../utils/phrases.json'
import getRandomFromArr, { getRandomImage } from '../services/getRandomFromArr'
import Phrase from '../components/Phrase';
import Button from '../components/Button';

const Background = () => {

    const quote = getRandomFromArr(phrases);
    const [ randomPhrase, setRandomPhrase] = useState( quote );
    const image = getRandomImage();
    const [ randomImage, setRandomImage] = useState( image );

  return (
    <div>
      <div 
        className='background' 
        style={{ backgroundImage: `url("./src/assets/fondo${ randomImage }.jpg")` 
         }}
        
         >
        <div className='container'>
          <div className='box'>
            <h1> Galleta de la fortuna</h1>
            <Phrase 
              randomPhrase={randomPhrase}
            />
            <Button
              setRandomPhrase={setRandomPhrase}
              setRandomImage={setRandomImage} 
            />
            <img className='card' src='./src/assets/rectangle1.svg' alt='Img Rectangle'></img>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default Background
