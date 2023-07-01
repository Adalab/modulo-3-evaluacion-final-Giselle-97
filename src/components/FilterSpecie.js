function FilterSpecie({ searchSpecie, handleFilter }) {
  const handleInputSearchSpecie = (ev) => {
    //setSearchSpecie(ev.target.value);
    handleFilter('species', ev.target.value);
  };
  return (
    <div className='container__search'>
      <label className='container__search2' htmlFor='search_specie'>
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
  );
}
export default FilterSpecie;
