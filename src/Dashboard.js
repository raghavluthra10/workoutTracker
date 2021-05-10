import React, { useState } from 'react';
import './Dashboard.css';
import WorkoutEntry from './WorkoutEntry';
import Button from '@material-ui/core/Button';
import "react-datepicker/dist/react-datepicker.css";
import Calendar from 'react-calendar';
import moment from 'moment';



const Dashboard = () => {

    const [ showDate, setShowDate ] = useState(false);
    const [startDate, setStartDate] = useState(new Date());


    const addExercise = (e) => {
        e.preventDefault();
    }

    return (
        <div className='dashboard'>
            <div className='dashboard__top'>
                <div className='dashboard__topTop'>
                    <div className='dashboard__topName'>
                        Raghav Luthra
                    </div>
                    <div className='dashboard__topDate'>
                        {startDate.getDate()} / {startDate.getMonth() +1 } / {startDate.getFullYear()}
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
                    <input type='text' />
                </div>
                
                <Button variant='outlined' onClick={addExercise} className='dashboard__bodyBtn' type='submit'  >
                    ADD WORKOUT
                </Button>
            </form>
            
            <WorkoutEntry  />

           
        </div>
    )
}

export default Dashboard
