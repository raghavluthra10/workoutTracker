import React, { useState } from 'react';
import './WorkoutEntry.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { IconButton } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import SetsEntry from './SetsEntry';
import { useDispatch } from 'react-redux';
import {  addWeightLogs } from './actions/index';

const WorkoutEntry = ({ reps, sets, note, onClick, exercise }) => {
    // const myState = useSelector((state) => state.weightTrainingSession);
    const dispatch = useDispatch();

    const [ showLogs, setShowLogs ] = useState(false);

    // states for weight training
    const [ weightReps, setWeightReps ] = useState('');
    const [ weightSets, setWeightSets ] = useState('');
    const [ weightNote, setWeightNote ] = useState('');

    const addWeightTrainingSession = (e) => {
        e.preventDefault();
        
        dispatch(addWeightLogs(weightSets, weightReps, weightNote))
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
                            <input type='number' value={weightSets} onChange={(e) => setWeightSets(e.target.value)} />
                        </div>
                        
                        <div>
                            <label> {reps} </label>
                            <input type='number' value={weightReps} onChange={(e) =>setWeightReps(e.target.value)} />
                        </div>
                        
                        <div>
                            <label> {note} </label>
                            <input type='text' value={weightNote} onChange={(e) => setWeightNote(e.target.value)} />
                        </div>

                        <Button  variant='outlined' onClick={addWeightTrainingSession} type='submit'>
                            <AddIcon  />
                        </Button>
                    </form>

                    {/* <SetsEntry 
                        weightSet={weightSets}
                        weightReps={weightReps}
                        weightNote={weightNote}
                    /> */}

                </>
            )}

           
            
           
            
            
        </div>
    )
}

export default WorkoutEntry
