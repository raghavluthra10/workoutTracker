import React, { useState } from 'react';
import './WorkoutEntry.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SetsEntry from './SetsEntry';

const WorkoutEntry = ({ reps, sets, note, onClick, exercise }) => {

    const [ showLogs, setShowLogs ] = useState(false);

    const editTrainingSession = () => {

    };

    const deleteTrainingSession = () => {

    };

    return (
        <div className='workoutEntry' >

            <div className='workoutEntry__top'>
                <span > {exercise} </span>

                <IconButton onClick={() => setShowLogs(!showLogs)} >
                    {showLogs ? <ArrowDropUpIcon className='workoutEntry__dropDownIcon' /> : <ArrowDropDownIcon   className='workoutEntry__dropDownIcon' /> }
                </IconButton>
            </div>
            
            {showLogs && (
                <>
                    <form className='workoutEntry__input' >
                        <div>
                            <label> {sets} </label>
                            <input type='number' />
                        </div>
                        
                        <div>
                            <label> {reps} </label>
                            <input type='number' />
                        </div>
                        
                        <div>
                            <label> {note} </label>
                            <input type='text'  />
                        </div>

                        <Button  variant='outlined' onClick={onClick} type='submit'>
                            <AddIcon  />
                        </Button>
                    </form>

                    <SetsEntry 
                        weightSet='1'
                        weightReps='10'
                        weightNote='Rpe 8'
                        editSession={editTrainingSession}
                        deleteSession={deleteTrainingSession}
                    />

                </>
            )}

           
            
           
            
            
        </div>
    )
}

export default WorkoutEntry
