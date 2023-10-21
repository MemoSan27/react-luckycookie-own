import getRandomFromArr from "../services/getRandomFromArr"
import phrases from '../utils/phrases.json'
import bgArr from '../utils/bgArr.json'

const Button = ({ setRandomPhrase, setBgApp }) => {
    const handleChangePhrase = () => {
        const quote = getRandomFromArr(phrases)
        setRandomPhrase(quote)
        setBgApp(getRandomFromArr(bgArr))
    }

  return (
    <button
      className="app__btn" 
      onClick={handleChangePhrase}
      >
        New Phrase</button>  
    
  )
}

export default Button
