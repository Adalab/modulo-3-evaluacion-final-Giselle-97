import { Link } from 'react-router-dom';
function CharacterDetail() {
  return (
    <div>
      <section>
        <h2>Nombre</h2>
        <p>Raza: Raza</p>
        <p>Planeta de origen: Planeta</p>
        <p>Número de episodios en los que parace: x</p>
        <p>Estado Vital: x</p>
      </section>
      <Link to='/'>Volver</Link>
    </div>
  );
}
export default CharacterDetail;
