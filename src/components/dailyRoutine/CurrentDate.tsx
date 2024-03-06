import { useState, useEffect } from 'react';

export const CurrentDate: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
        setDate(new Date());
    }, 100000);

    return () => clearInterval(intervalId);
  }, []);

  const day = date.getDate();
  const month = date.toLocaleString('en-EN', { month: 'long' });
  const year = date.getFullYear();

  return (
    <div className=' text-white font-extrabold hover:text-slate-200'>
      <p>Date: {`${day} de ${month} de ${year}`}</p>
    </div>
  );
};

export default CurrentDate;