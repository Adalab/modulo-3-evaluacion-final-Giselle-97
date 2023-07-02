function FilterCharacter({ searchName, handleFilter }) {
  const handleInputSearchName = (ev) => {
    //setSearchName(ev.target.value);
    handleFilter('name', ev.target.value);
  };
  return (
    <div className='container'>
      <label className='container__search' htmlFor='search__character'>
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
  );
}
export default FilterCharacter;
