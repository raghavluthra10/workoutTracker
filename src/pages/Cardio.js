import React,{ useState } from 'react';
import Button from '@material-ui/core/Button';
import Calendar from 'react-calendar';
import './Cardio.css';
import WorkoutEntry from '../components/WorkoutEntry';
import Header from '../components/Header';
import { useHistory } from 'react-router';


const Cardio = () => {

    const history = useHistory();

    const [ showDate, setShowDate ] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const addExercise = () => {

    };

    const addCardioSession = (e) => {
        e.preventDefault();
    };
    
    const pushToWeightTrainingPage = () => {
        history.push('/dashboard');
    };

    return (
        <>
            <Header  
                page='Weight Training'
                takeMeTo={pushToWeightTrainingPage}
            />
            <div className='cardio'>
                <div className='cardio__top'>
                    <div className='cardio__topTop'>
                        <div className='cardio__topName'>
                            Raghav Luthra
                        </div>
                        <div className='cardio__topDate'>
                            {startDate.getDate()} / {startDate.getMonth() +1 } / {startDate.getFullYear()}
                        </div>
                    </div>


                    <Button variant='outlined' className='cardio__datePicker' onClick={() => setShowDate(!showDate)} >
                        Pick Date
                    </Button>
                    
                    {showDate && (
                        <Calendar
                        className='datePicker'
                        onChange={date => setStartDate(date)}
                        value={startDate}
                        maxDate={new Date()}
                        />
                    )}
                </div>

                <form className='cardio__body'>
                    <div className='cardio__bodyEntry'>
                        <label> Exercise : </label>
                        <input type='text' />
                    </div>
                    
                    <Button variant='outlined' onClick={addExercise} className='cardio__bodyBtn' type='submit'  >
                        ADD WORKOUT
                    </Button>
                </form>
                
                <WorkoutEntry 
                exercise='Running'
                onClick={addCardioSession}
                />

            </div>
        </>
    )
}

export default Cardio

//name, distance , time taken and notes