import { useEffect, useState } from 'react';
import getDataApi from '../services/api';
import CharacterList from './CharacterList';
import imgHeader from '../images/rick-y-morty.jpg';
import imgLogo from '../images/logo.png';
import '../styles/App.scss';

function App() {
  const [charactersList, setCharactersList] = useState([]);
  const [searchName, setSearchName] = useState('');
  const [searchSpecie, setSearchSpecie] = useState('');
  //1-Fetch
  useEffect(() => {
    getDataApi().then((cleanData) => {
      setCharactersList(cleanData);
    });
  }, []);

  //function
  const handleInputSearchName = (ev) => {
    setSearchName(ev.target.value);
  };

  const handleInputSearchSpecie = (ev) => {
    setSearchSpecie(ev.target.value);
  };

  const filterCharacters = charactersList.filter(
    (eachCard) =>
      eachCard.name.toLowerCase().includes(searchName.toLowerCase()).filter
  );

  /* const filterSpecies = charactersList.filter((eachCard) =>
    eachCard.species.toLowerCase().includes(searchSpecie.toLowerCase())
  );*/

  return (
    <div>
      <header className='header'>
        <img className='header__img' src={imgHeader} alt='' />
        <p className='header__title'>Rick and Morty</p>
      </header>
      <main>
        <form className='form'>
          <div className='container'>
            <label className='container__search' htmlFor=''>
              Buscar personaje
            </label>
            <input
              className='container__search--input'
              type='text'
              placeholder='Ej: Rick'
              value={searchName}
              onInput={handleInputSearchName}
            />
          </div>
          <div className='container'>
            <label className='container__search2' htmlFor=''>
              Buscar especie
            </label>
            <input
              className='container__search2--input'
              type='text'
              placeholder='Ej: Human'
              value={searchSpecie}
              onInput={handleInputSearchSpecie}
            />
          </div>
        </form>
        <CharacterList charactersList={filterCharacters} />
      </main>
      <footer className='footer'>
        <img className='footer__img' src={imgLogo} alt='' />
        <p className='footer__text'>Adalab &copy;2023</p>
      </footer>
    </div>
  );
}
export default App;
