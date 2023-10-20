import getRandomFromArr from "../services/getRandomFromArr"
import phrases from '../utils/phrases.json'

const Button = ({ setRandomPhrase }) => {
    const handleChangePhrase = () => {
        const quote = getRandomFromArr(phrases)
        setRandomPhrase(quote)
    }

  return (
    <>
      <button onClick={handleChangePhrase}>New Phrase</button>  
    </>
  )
}

export default Button
