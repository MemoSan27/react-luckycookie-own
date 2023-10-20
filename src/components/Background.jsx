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
        <div> 
          <h1> Galleta de la fortuna</h1>
          <Phrase 
            randomPhrase={randomPhrase}
          />
          <Button
            setRandomPhrase={setRandomPhrase}
            setRandomImage={setRandomImage} 
          />
        </div>
      </div>
    </div>
  )
}

export default Background
