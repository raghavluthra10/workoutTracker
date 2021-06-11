export const addWeightTrainingName = (addWeightTraining, weightDate) => {
    return {
        type: 'ADD_WEIGHT_TRAINING_NAME',
        addWeightTraining,
        weightDate
    }  
};

export const addWeightLogs = (addWeightReps, addWeightSets, addWeightNote) => {
    return {
        type: 'ADD_WEIGHT_LOGS',
        addWeightReps,
        addWeightSets,
        addWeightNote,
    }
}

export const deleteWeightTraining = () => {
    return {
        type: 'DELETE_WEIGHT_TRAINING'
    }
};

export const editWeightTraining = () => {
    return {
        type: 'EDIT_WEIGHT_TRAINING'
    }  
};

export const addCardio = () => {
    return {
        type: 'ADD_CARDIO' 
    }    
};

export const deleteCardio = () => {
    return {
        type: 'DELETE_CARDIO'
    }
};

export const editCardio = () => {
    return {
        type: 'EDIT_CARDIO'
    }
};

