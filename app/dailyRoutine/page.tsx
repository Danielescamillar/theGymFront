"use client";
import CurrenteDate from '../../src/components/dailyRoutine/CurrentDate';
import CreateRoutine from '../../src/components/dailyRoutine/CreateRoutine';

const DailyRoutine = () => {

    return (
      <div className=" h-screen opacity-50  flex content-center justify-center">
        <div>
        <CurrenteDate/>
        <CreateRoutine/>
        </div>
      </div>
    )
  }
  
  export default DailyRoutine;
  