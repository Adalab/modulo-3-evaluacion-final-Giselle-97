import { Link } from 'react-router-dom';

function CharacterCard({ eachCard }) {
  return (
    <Link to={'character/' + eachCard.id} className='card'>
      <img
        className='cardList__card--image'
        src={eachCard.image}
        alt={`Foto de ${eachCard.name}`}
      />
      <h2 className='cardList__card--name'>{eachCard.name}</h2>
      <p className='cardList__card--species'>{eachCard.species}</p>
    </Link>
  );
}
export default CharacterCard;
