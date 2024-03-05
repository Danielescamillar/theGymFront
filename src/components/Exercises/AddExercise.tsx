import { SetStateAction, useState } from 'react';
import { addExercises } from '../../services/exercises/exercisesService';
import MenuAddExercise from './MenuAddExercise';

function AddExercise() {

    const [name, setName] = useState('');
    const [muscularZone, setMuscularZone] = useState('');
    const [description, setdescription] = useState('');
    const [exercises, setExercises] = useState([]);
    const [submit, setSubmit] = useState(false);

    const handleChangeName = (event: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
        event.preventDefault();
        setName(event.target.value);

    }
    const handleChangeMuscularZone = (event: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
        event.preventDefault();
        setMuscularZone(event.target.value);
    }
    const handleChangeDescription = (event: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
        event.preventDefault();
        setdescription(event.target.value);
    }

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        const data = await addExercises({name, muscularZone, description})
        setExercises([...exercises, data])
        setSubmit(!submit)
        setName('')
        setMuscularZone('')
        setdescription('')
    }

    return (
        <>
            <div>
                <h1 >Adding Exercise...</h1>
                <div className=' bg-slate-400 h-auto w-16 p-5 m-5'>
                    <form onSubmit={handleSubmit} className=' '>
                        <label >Name</label>
                        <input type="text" value={name} onChange={handleChangeName} className=' p-1 m-1' />
                        <label >Zone</label>
                        <input type="text" value={muscularZone}
                            onChange={handleChangeMuscularZone} className=' p-1 m-1' />
                        <label >Description</label>
                        <input type="text" value={description}
                            onChange={handleChangeDescription} className=' p-1 m-1' />
                        <button type="submit" className="text-gray-900 bg-gradient-to-r from-slate-800 via-slate-500 to-slate-300 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-slate-100 dark:focus:ring-slate-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 p-1 m-1">Submit</button>
                    </form>

                </div>
                
                { submit && <MenuAddExercise/>}

            </div>

        </>

    )
}



export default AddExercise
