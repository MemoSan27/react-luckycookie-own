import getRandomFromArr, { getRandomImage } from "../services/getRandomFromArr"
import phrases from '../utils/phrases.json'

const Button = ({ setRandomPhrase, setRandomImage }) => {
    const handleChangePhrase = () => {
        const quote = getRandomFromArr(phrases);
        const image = getRandomImage();
        setRandomPhrase(quote);
        setRandomImage( image );
    }

  return (
    <>
      <button className="btnNext" onClick={handleChangePhrase}>New Phrase</button>  
    </>
  )
}

export default Button
