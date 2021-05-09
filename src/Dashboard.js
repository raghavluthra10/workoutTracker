import React from 'react';
import './Dashboard.css';
import WorkoutEntry from './WorkoutEntry';
import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const Dashboard = () => {


    return (
        <div className='dashboard'>
            <div className='dashboard__top'>
                <div className='dashboard__topTop'>
                    <div className='dashboard__topName'>
                        Raghav Luthra
                    </div>
                    <div className='dashboard__topDate'>
                        11/12/2020
                    </div>
                </div>

                <Button variant='outlined' className='dashboard__datePicker'>
                    date picker
                </Button>
            </div>

            <form className='dashboard__body'>
                <div className='dashboard__bodyEntry'>
                    <label> Exercise </label>
                    <input type='text' />
                </div>
                
                <Button variant='outlined' className='dashboard__bodyBtn' type='submit'  >
                    ADD WORKOUT
                </Button>
            </form>
            
            <WorkoutEntry  />
           
        </div>
    )
}

export default Dashboard
