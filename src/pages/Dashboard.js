import React, { useState } from 'react';
import './Dashboard.css';
import WorkoutEntry from '../components/WorkoutEntry';
import Button from '@material-ui/core/Button';
import "react-datepicker/dist/react-datepicker.css";
import Calendar from 'react-calendar';
import Header from '../components/Header';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
// import { addWeightTrainingName, addWeightLogs } from '../actions/index';
// import { addWeightTraining, weightDate } from './reducers/weightTraining';


const Dashboard = () => {

    const myState = useSelector((state) => state.weightTrainingSession);

    const history = useHistory();
    const dispatch = useDispatch();

    const [ showDate, setShowDate ] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const dayDate = `${startDate.getDate()} / ${startDate.getMonth() +1 } / ${startDate.getFullYear()}`

    const [ exerciseInput, setExerciseInput ] = useState('');

    const addExercise = (e) => {
        e.preventDefault();
        dispatch(addWeightTrainingName(exerciseInput, dayDate));
        setExerciseInput('');
    };

    const pushToCardioPage = () => {
        history.push('/cardio');
    };


    return (
        <>
            <Header 
                page='Cardio'
                takeMeTo={pushToCardioPage}
            />

            <div className='dashboard'>
                <div className='dashboard__top'>
                    <div className='dashboard__topTop'>
                        <div className='dashboard__topName'>
                            Raghav Luthra
                        </div>
                        <div className='dashboard__topDate'>
                            {dayDate}
                        </div>
                    </div>


                    <Button variant='outlined' className='dashboard__datePicker' onClick={() => setShowDate(!showDate)} >
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

                <form className='dashboard__body'>
                    <div className='dashboard__bodyEntry'>
                        <label> Exercise : </label>
                        <input value={exerciseInput} onChange={e => setExerciseInput(e.target.value)} type='text' />
                    </div>
                    
                    <Button variant='outlined' onClick={addExercise} className='dashboard__bodyBtn' type='submit'  >
                        ADD WORKOUT
                    </Button>
                </form>
                
                {myState.map((data) => (
                    <WorkoutEntry 
                    reps='Reps'
                    sets='Sets'
                    note='Note'
                    exercise={data.exercise}
                />
                ))}
                

            
            </div>

        </>
    )
}

export default Dashboard
