import ListExercises from "./ListExercise";
import AddExercise from "./AddExercise";
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
    <div className="bg-red-400 h-screen opacity-50 block content-center justify-center items-center font-bold">
      <div className=" bg-slate-400 h-5 w-1/2 p-5 m-5 flex content-center justify-center items-center hover:text-white cursor-pointer" onClick={listExercisesOpen}>
        List Exercises
      </div>
      <div className=" bg-slate-400 h-5 w-1/2 p-5 m-5 flex content-center justify-center items-center hover:text-white cursor-pointer" onClick={addExercisesOpen}>
        Add Exercises
      </div> 
      {listOpen &&  <ListExercises/>}
      {addOpen  && <AddExercise/>}
    </div>
  )
}

export default Exercises;
