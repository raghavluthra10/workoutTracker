import React from 'react';
import './SetsEntry.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';

const SetsEntry = ({ weightSet, weightReps, weightNote }) => {

    const deleteSession = () => {

    };

    const editSession = () => {
      
    };

    return (
        <div className='setsEntry' >
                <span>
                    {weightSet}
                </span>

                <span>
                    {weightReps}
                </span>

                <span>
                    {weightNote}
                </span>

                <div  >
                    <IconButton onClick={deleteSession}>
                        <DeleteIcon className='setsEntry__logsBtn' />
                    </IconButton>

                    <IconButton onClick={editSession} >
                        <EditIcon className='setsEntry__logsBtn' />
                    </IconButton>
                </div>
        </div>
    )
}

export default SetsEntry
