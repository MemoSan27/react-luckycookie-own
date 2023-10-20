
const Phrase = ({ randomPhrase }) => {
    const { phrase } = randomPhrase;

  return (
      <>
        <article>
            <p> {phrase} </p>
        </article>
      </>
    )
}

export default Phrase
