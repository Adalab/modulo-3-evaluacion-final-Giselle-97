import FilterCharacter from './FilterCharacter';
import FilterSpecie from './FilterSpecie';

function Filters({
  searchName,
  searchSpecie,
  handleFilter,
  filteredCharacters,
}) {
  const messageError = () => {
    if (searchName && filteredCharacters.length === 0) {
      return (
        <p className='messageError'>
          No hay ningún personaje que coincida con la palabra "{searchName}"
        </p>
      );
    }
    return null;
  };

  return (
    <form className='form'>
      <FilterCharacter searchName={searchName} handleFilter={handleFilter} />
      {messageError()}
      <FilterSpecie searchSpecie={searchSpecie} handleFilter={handleFilter} />
    </form>
  );
}
export default Filters;
