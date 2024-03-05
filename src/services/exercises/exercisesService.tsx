
export const getExercises = async () => {
    try {

        const res = await fetch('http://localhost:3005/api/exercise/', {
        })
        const data = await res.json()
        return data
    } catch (error) {
        console.error('Error getting exercises:', error.message);
    }
}

export const addExercises = async ({ name, muscularZone, description }) => {
    try {

        const res = await fetch('http://localhost:3005/api/exercise/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'API-Key': process.env.DATA_API_KEY,
            },
            body: JSON.stringify({ name, muscularZone, description }),
        })

        const data = await res.json()

        return Response.json(data)
    } catch (error) {
        console.error('Error getting exercises:', error.message);
    }
}



