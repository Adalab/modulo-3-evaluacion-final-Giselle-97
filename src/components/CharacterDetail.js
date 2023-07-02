import { Link } from 'react-router-dom';
function CharacterDetail({ characterData }) {
  if (characterData) {
    return (
      <div>
        <section>
          <h2>{characterData.name}</h2>
          <p>Raza:{characterData.species}</p>
          <p>Planeta de origen: {characterData.origin}</p>
          <p>
            Número de episodios en los que aparace:
            {characterData.episode}
          </p>
          <p>Estado actual: x</p>
        </section>
        <Link to='/'>Volver</Link>
        <img
          className='cardList__card--image'
          src={characterData.image}
          alt={`Foto de ${characterData.name}`}
        />
      </div>
    );
  } else {
    return (
      <div>
        <p className='error'>Lo sentimos, ese personaje no existe!</p>
        <Link to='/'>Volver</Link>
      </div>
    );
  }
}
export default CharacterDetail;
