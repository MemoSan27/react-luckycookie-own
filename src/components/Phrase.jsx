
const Phrase = ({ randomPhrase }) => {
    const { phrase } = randomPhrase;

  return (
      <>
        <article className="article">
            <p> {phrase} </p>
        </article>
      </>
    )
}

export default Phrase
