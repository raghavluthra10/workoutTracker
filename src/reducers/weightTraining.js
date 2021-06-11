const initialState = [
    {
        exercise: 'b press',
        date: '2/3/2233',
        log: [
            {
                reps: 10,
                sets: 1,
                note: 'rpe 8',
            },
        ]
    }
];

const weightTrainingSession = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_WEIGHT_TRAINING_NAME':
            return [...state,
                { 
                exercise: action.addWeightTraining,
                date: action.weightDate,
                }
        ];
        case 'ADD_WEIGHT_LOGS' :
          return [{...state, log: [
                    ...state,{
                        reps: action.weightSets,
                        sets: action.weightReps,
                        note: action.weightNote,
                    }
                ] }
                    
                ]
            
            

        default:
            return state;
    }
};

export default weightTrainingSession;


// reps: action.weightSets,
// sets: action.weightReps,
// note: action.weightNote,