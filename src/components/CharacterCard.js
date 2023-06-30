function CharacterCard(eachCard) {
  return (
    <>
      <img src={eachCard.image} alt={`Foto de ${eachCard.name}`} />
      <h2>{eachCard.name}</h2>
      <p>{eachCard.species}</p>
    </>
  );
}
export default CharacterCard;
