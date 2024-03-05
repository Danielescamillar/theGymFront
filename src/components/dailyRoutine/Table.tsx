import React from 'react'

const Table = ({formulario}) => {

  return (
    <table className='max-w-md mx-auto p-6 bg-white shadow-md rounded'>
    <thead>
      <tr>
        <th>Nombre Ejercicio</th>
        <th>Series</th>
        <th>Carga</th>
        <th>Repeticiones</th>
        <th>Repeticiones en Reserva</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
        <tr >
          <td>{formulario.nameExercise}</td>
          <td>{formulario.series}</td>
          <td>{formulario.load}</td>
          <td>{formulario.repeticions}</td>
          <td>{formulario.replaysInReserve}</td>
          <td>{formulario.date.toISOString().slice(0, formulario.date.toISOString().indexOf('T'))}</td>
        </tr>

    </tbody>
  </table>
  )
}

export default Table
