
const Phrase = ({ randomPhrase }) => {

    console.log(randomPhrase);
    const { phrase } = randomPhrase;

  return (
      <>
        <article>
            <h2> {phrase} </h2>
        </article>
      </>
    )
}

export default Phrase
