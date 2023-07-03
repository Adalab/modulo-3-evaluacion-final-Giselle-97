import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';
import getDataApi from '../services/api';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import imgHeader from '../images/rick-y-morty.jpg';
import imgLogo from '../images/logo.png';
import localS from '../services/localStorage';
import Filters from './Filters';
import '../styles/App.scss';

function App() {
  const [charactersList, setCharactersList] = useState(
    localS.get('characters', [])
  );

  //1-Fetch y localS
  useEffect(() => {
    if (localS.get('characters', null) === null) {
      getDataApi().then((cleanData) => {
        setCharactersList(cleanData);
        localS.set('characters', cleanData);
      });
    }
  }, []);

  //variables estado para filtro
  const [searchName, setSearchName] = useState('');
  const [searchSpecie, setSearchSpecie] = useState('');

  //function handlefilter
  const handleFilter = (varName, varValue) => {
    if (varName === 'name') {
      setSearchName(varValue);
    } else if (varName === 'species') {
      setSearchSpecie(varValue);
    }
  };

  const filteredCharacters = charactersList
    .filter((eachCard) =>
      eachCard.name.toLowerCase().includes(searchName.toLowerCase())
    )
    .filter((eachCard) =>
      eachCard.species.toLowerCase().includes(searchSpecie.toLowerCase())
    );

  //obtener información del personaje
  const { pathname } = useLocation();

  const routeData = matchPath('/character/:characterId', pathname);
  //console.log(routeData);

  const characterId = routeData !== null ? routeData.params.characterId : '';

  //console.log(characterId);

  const characterData = charactersList.find(
    (character) => character.id === parseInt(characterId)
  );

  // console.log(characterData);

  //html
  return (
    <div>
      <header className='header'>
        <img className='header__img' src={imgHeader} alt='' />
        <p className='header__title'>Rick and Morty</p>
      </header>
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Filters
                  searchName={searchName}
                  searchSpecie={searchSpecie}
                  handleFilter={handleFilter}
                  filteredCharacters={filteredCharacters}
                />
                <CharacterList charactersList={filteredCharacters} />
              </>
            }
          />
          <Route
            path='/character/:characterId'
            element={<CharacterDetail characterData={characterData} />}
          />
        </Routes>
      </main>
      <footer className='footer'>
        <img className='footer__img' src={imgLogo} alt='' />
        <p className='footer__text'>Adalab &copy;2023</p>
      </footer>
    </div>
  );
}
export default App;
