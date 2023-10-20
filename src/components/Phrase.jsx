
const Phrase = ({ randomPhrase }) => {
    const { phrase } = randomPhrase;

  return (
      <>
        <article className="article">
            <p className="phrase"> {phrase} </p>
        </article>
      </>
    )
}

export default Phrase
