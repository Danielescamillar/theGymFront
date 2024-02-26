import React from 'react'

const Table = (props) => {
  return (
    <table className=' bg-slate-500'>
    <thead>
      <tr>
        <th>Nombre Ejercicio</th>
        <th>Series</th>
        <th>Carga</th>
        <th>Repeticiones</th>
        <th>Repeticiones en Reserva</th>
      </tr>
    </thead>
    <tbody>
      {props.formulario.map((elemento, index) => (
        <tr key={index}>
          <td>{elemento.nameExercise}</td>
          <td>{elemento.series}</td>
          <td>{elemento.load}</td>
          <td>{elemento.repeticions}</td>
          <td>{elemento.replaysInReserve}</td>
          <td>{elemento.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default Table
