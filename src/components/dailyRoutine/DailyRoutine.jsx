import CurrenteDate from './CurrentDate';
import CreateRoutine from './CreateRoutine';

const DailyRoutine = () => {

    return (
      <div className="bg-red-500 h-screen opacity-50  flex content-center justify-center">
        <div>
        <CurrenteDate/>
        <CreateRoutine/>
        </div>
      </div>
    )
  }
  
  export default DailyRoutine;
  