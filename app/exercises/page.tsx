"use client";

import ListExercise from "../../src/components/exercises/ListExercise";
import AddExercise from "../../src/components/exercises/AddExercise";
import { useState } from 'react';



const Exercises = () => {

  const [listOpen, setlistOpen] = useState(false)
  const [addOpen, setAddOpen] = useState(false)

  const listExercisesOpen = () => {
    setlistOpen(!listOpen)
  }

  const addExercisesOpen = () => {
    setAddOpen(!addOpen)
  }

  return (
    <div className="h-screen block content-center justify-center items-center font-bold">
      <div className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium opacity-50 hover:opacity-90 md:flex-none md:justify-start md:p-2 md:px-3 m-1" onClick={listExercisesOpen}>
        List Exercises
      </div>
      <div className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium opacity-50 hover:opacity-90 md:flex-none md:justify-start md:p-2 md:px-3 m-1" onClick={addExercisesOpen}>
        Add Exercises
      </div> 
      {listOpen &&  <ListExercise/>}
      {addOpen  && <AddExercise/>}
    </div>
  )
}

export default Exercises;
