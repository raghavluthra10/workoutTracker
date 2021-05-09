import React from 'react';
import './WorkoutEntry.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';


const WorkoutEntry = () => {

    const addWorkoutLog = (e) => {
        e.preventDefault();
    }

    return (
        <div className='workoutEntry' >

            <span className='workoutEntry__top'> squats </span>

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

            <div className='workoutEntry__logs'>
                <span>
                    1
                </span>

                <span>
                    10
                </span>

                <span>
                    RPE 8
                </span>

                <div className='workoutEntry__logsBtn'>
                    <IconButton>
                        <DeleteIcon  />
                    </IconButton>

                    <IconButton>
                        <EditIcon  />
                    </IconButton>
                </div>
                
            </div>
            
           
            
            
        </div>
    )
}

export default WorkoutEntry
