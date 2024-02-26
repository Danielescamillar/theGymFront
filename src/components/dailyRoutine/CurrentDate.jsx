import { useState, useEffect } from 'react';

const CurrentDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
        setDate(new Date());
    }, 100000);

    return () => clearInterval(intervalId);
  }, []);

  const day = date.getDate();
  const month = date.toLocaleString('es-ES', { month: 'long' });
  const year = date.getFullYear();

  return (
    <div className=' font-extrabold hover:bg-slate-200'>
      <p>Date:</p>
      <p>{`${day} de ${month} de ${year}`}</p>
    </div>
  );
};

export default CurrentDate;