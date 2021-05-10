import React from 'react';
import './SetsEntry.css';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';

const SetsEntry = () => {
    return (
        <div className='setsEntry' >
                <span>
                    1
                </span>

                <span>
                    10
                </span>

                <span>
                    RPE 8
                </span>

                <div >
                    <IconButton>
                        <DeleteIcon className='setsEntry__logsBtn' />
                    </IconButton>

                    <IconButton>
                        <EditIcon className='setsEntry__logsBtn' />
                    </IconButton>
                </div>
        </div>
    )
}

export default SetsEntry
