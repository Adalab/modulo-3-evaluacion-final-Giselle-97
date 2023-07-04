import { Link } from 'react-router-dom';
import imgErrorCharacter from '../images/character-not-found-1.png';
import imgDead from '../images/skull.png';
import imgAlive from '../images/heart.png';
import imgUnknow from '../images/unknow.png';
function CharacterDetail({ characterData }) {
  const statusIcon = () => {
    if (characterData.status === 'Dead') {
      return <img className='icon' src={imgDead} alt='' />;
    } else if (characterData.status === 'Alive') {
      return <img className='icon' src={imgAlive} alt='' />;
    } else {
      return <img src={imgUnknow} alt='' />;
    }
  };
  if (characterData) {
    return (
      <div className='divCard'>
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
              *Estado actual: {''} {statusIcon()}
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
      <div className='divErrorCharacter'>
        <p className='errorCharacter'>
          "Lo sentimos, este personaje no existe"
        </p>
        <img className='imgCharacterNotFound' src={imgErrorCharacter} alt='' />
        <Link to='/' className='divReturn__text'>
          Volver
        </Link>
      </div>
    );
  }
}
export default CharacterDetail;
