import React, { useState } from 'react';
import './WorkoutEntry.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SetsEntry from './SetsEntry';

const WorkoutEntry = () => {

    const [ showLogs, setShowLogs ] = useState(false);

    const addWorkoutLog = (e) => {
        e.preventDefault();
    }

    return (
        <div className='workoutEntry' >

            <div className='workoutEntry__top'>
                <span > squats </span>

                <IconButton onClick={() => setShowLogs(!showLogs)} >
                    {showLogs ? <ArrowDropUpIcon className='workoutEntry__dropDownIcon' /> : <ArrowDropDownIcon   className='workoutEntry__dropDownIcon' /> }
                </IconButton>
            </div>
            
            {showLogs && (
                <>
                    <form className='workoutEntry__input' >
                    <div>
                        <label> Set </label>
                        <input type='number' />
                    </div>
                    
                    <div>
                        <label> Reps </label>
                        <input type='number' />
                    </div>
                    
                    <div>
                        <label> Note </label>
                        <input type='text'  />
                    </div>

                    <Button  variant='outlined' onClick={addWorkoutLog} type='submit'>
                        <AddIcon  />
                    </Button>
                    </form>

                    <SetsEntry  />
                </>
            )}

           
            
           
            
            
        </div>
    )
}

export default WorkoutEntry
