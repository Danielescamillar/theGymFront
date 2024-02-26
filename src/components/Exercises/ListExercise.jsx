import { useEffect, useState } from 'react';
import { getExercises } from '../../services/exercises';

function ListExercise() {

    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        const fetchExercises = async () => {
            const data = await getExercises()
            setExercises(data)
        };

        fetchExercises();
    }, []);
    console.log(exercises)
    return (
        <div className='block content-center justify-center items-center font-bold h-screen'><h2 >My Exercises</h2>
            <ul>
                {exercises.map(exercise => (
                    <div className=' bg-slate-400 h-auto w-auto p-5 m-5' key={exercise._id}>
                        <strong>{exercise.name}</strong><br/>{exercise.description}
                    </div>
                ))}
            </ul></div>
    )
}



export default ListExercise
