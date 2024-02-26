import  { useState } from 'react';
import Table from './Table';

const MiComponente = () => {
  const [valorSeleccionado, setValorSeleccionado] = useState('');
  const [formulario, setFormulario] = useState([{
    nameExercise: '',
    series: 0,
    load: 0,
    repeticions: 0,
    replaysInReserve: 0,
    date: '',
  }]);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (event) => {
    setValorSeleccionado(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormulario({
      ...formulario,
      date: new Date(),
      [name]: valorSeleccionado,
    });
  };

  const handleSubmit = (event) => {
    // Puedes realizar acciones con los datos del formulario aquí
    console.log('Formulario enviado:', formulario);
    // Evita que el formulario realice la acción predeterminada de recargar la página
    event.preventDefault();
    setIsEditing(!isEditing);
  };

  return (
    <div>
      <label htmlFor="miSelect">Selecciona una opción:</label>
      <select id="miSelect" value={valorSeleccionado} onChange={handleChange}>
        <option value="opcion1">Opción 1</option>
        <option value="opcion2">Opción 2</option>
        <option value="opcion3">Opción 3</option>
      </select>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nameExercise">Nombre del ejercicio:</label>
        <input
          type="text"
          id="nameExercise"
          name="nameExercise"
          value={formulario.nameExercise}
          onChange={handleInputChange}
        />

        <label htmlFor="series">Número de series:</label>
        <input
          type="number"
          id="series"
          name="series"
          value={formulario.series}
          onChange={handleInputChange}
        />

        <label htmlFor="load">Carga:</label>
        <input
          type="number"
          id="load"
          name="load"
          value={formulario.load}
          onChange={handleInputChange}
        />

        <label htmlFor="repeticions">Número de repeticiones:</label>
        <input
          type="number"
          id="repeticions"
          name="repeticions"
          value={formulario.repeticions}
          onChange={handleInputChange}
        />

        <label htmlFor="replaysInReserve">Repeticiones en reserva:</label>
        <input
          type="number"
          id="replaysInReserve"
          name="replaysInReserve"
          value={formulario.replaysInReserve}
          onChange={handleInputChange}
        />

        <button type="submit" className="text-gray-900 bg-gradient-to-r from-slate-800 via-slate-500 to-slate-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-100 dark:focus:ring-slate-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 p-1 m-1">Submit</button>
      </form>

      <p>Valor seleccionado: {valorSeleccionado}</p>
    
    { isEditing && <Table formulario= {formulario}/>}

    </div>
  );
};

export default MiComponente;
