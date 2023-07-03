import { Link } from 'react-router-dom';
function CharacterDetail({ characterData }) {
  if (characterData) {
    //console.log(characterData);
    return (
      <div>
        <div className='containerCardInfo'>
          <img
            className='containerCardInfo__image'
            src={characterData.image}
            alt={`Foto de ${characterData.name}`}
          />
          <section className='cardInfo'>
            <h2 className='cardInfo__name'>{characterData.name}</h2>
            <p className='cardInfo__specie'>
              *Raza: {''}
              {characterData.species}
            </p>
            <p className='cardInfo__origin'>
              *Planeta de origen: {''} {characterData.origin}
            </p>
            <p className='cardInfo__episodes'>
              *Número de episodios en los que aparace: {''}
              {characterData.episode.length}
            </p>
            <p className='cardInfo__status'>
              *Estado actual: {''} {characterData.status}
            </p>
          </section>
        </div>
        <div className='divReturn'>
          <Link to='/' className='divReturn__text'>
            Volver
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <p className='errorCharacter'>Lo sentimos, ese personaje no existe!</p>
        <Link to='/'>Volver</Link>
      </div>
    );
  }
}
export default CharacterDetail;
