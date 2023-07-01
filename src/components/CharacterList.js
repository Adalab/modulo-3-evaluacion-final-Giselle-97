import CharacterCard from './CharacterCard';

function CharacterList({ charactersList }) {
  const cardLi = charactersList.map((eachCard) => (
    <li key={eachCard.id} className='cardList__card'>
      <CharacterCard eachCard={eachCard} />
    </li>
  ));

  return <ul className='cardList'>{cardLi}</ul>;
}
export default CharacterList;
