import CharacterCard from './CharacterCard';

function CharacterList(charactersList) {
  const cardLi = charactersList.map((eachCard) => {
    <li key={eachCard.id} className='card'>
      <CharacterCard eachCard={eachCard} />
    </li>;
  });

  return (
    <ul className='cards'>
      <li>{cardLi}</li>
    </ul>
  );
}
export default CharacterList;
