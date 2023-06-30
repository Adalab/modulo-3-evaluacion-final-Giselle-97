import { useEffect, useState } from 'react';
import getDataApi from '../services/api';
import CharacterList from './CharacterList';
import imgHeader from '../images/rick-y-morty.jpg';
import '../styles/App.scss';

function App() {
  const [charactersList, setCharactersList] = useState([]);
  //1-Fetch
  useEffect(() => {
    getDataApi().then((cleanData) => {
      setCharactersList(cleanData);
    });
  }, []);

  return (
    <div>
      <header className='header'>
        <img className='header__img' src={imgHeader} alt='' />
        <p className='header__title'>Rick and Morty</p>
      </header>
      <CharacterList charactersList={charactersList} />
    </div>
  );
}
export default App;
