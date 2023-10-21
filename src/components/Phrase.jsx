
const Phrase = ({ randomPhrase }) => {
    const { phrase } = randomPhrase;

  return (
      <p className="app__phrase"> {phrase} </p>
    )
}

export default Phrase
