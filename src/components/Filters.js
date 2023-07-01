import FilterCharacter from './FilterCharacter';
import FilterSpecie from './FilterSpecie';

function Filters({ searchName, searchSpecie, handleFilter }) {
  return (
    <form className='form'>
      <FilterCharacter searchName={searchName} handleFilter={handleFilter} />
      <FilterSpecie searchSpecie={searchSpecie} handleFilter={handleFilter} />
    </form>
  );
}
export default Filters;
