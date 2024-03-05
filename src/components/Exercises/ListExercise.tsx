import { useEffect, useState } from 'react';
import { getExercises } from '../../services/exercises/exercisesService';
import { useQuery } from '@tanstack/react-query';

function ListExercise() {

    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        const fetchExercises = async () => {
            const data = await getExercises()
            setExercises(data)
        };

        fetchExercises();
    }, []);

    // useQuery()
    return (
        <div className='block content-center justify-center items-center font-bold h-screen'><h2 >My Exercises</h2>
            <ul>
                {exercises.map(exercise => (
                    <div className=" opacity-50 flex h-auto grow items-center justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:opacity-90 md:flex-none md:p-2 md:px-3 m-1"  key={exercise._id}>
                        <strong>{exercise.name}</strong><p>{exercise.description}</p>
                    </div>
                ))}
            </ul></div>
    )
}



export default ListExercise
