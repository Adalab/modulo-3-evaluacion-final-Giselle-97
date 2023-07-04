import FilterCharacter from './FilterCharacter';
import FilterSpecie from './FilterSpecie';
import imgCharacterNotFound2 from '../images/character-not-found.png';

function Filters({
  searchName,
  searchSpecie,
  handleFilter,
  filteredCharacters,
}) {
  const messageError = () => {
    if (searchName && filteredCharacters.length === 0) {
      return (
        <div className='divCharacterNotFound'>
          <img
            className='imgCharacterNotFound2'
            src={imgCharacterNotFound2}
            alt=''
          />
          <p className='messageError'>
            *Lo sentimos, no hay ningún personaje que coincida con la palabra "
            {searchName}"
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <form className='form'>
        <FilterCharacter searchName={searchName} handleFilter={handleFilter} />
        <FilterSpecie searchSpecie={searchSpecie} handleFilter={handleFilter} />
      </form>
      <div>{messageError()}</div>
    </>
  );
}
export default Filters;
