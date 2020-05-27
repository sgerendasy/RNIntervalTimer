import AsyncStorage from '@react-native-community/async-storage';
import createContext from './createContext';

const initialStagedSet = {shouldRepeatForever: true, name: '', intervals: []};

const userReducer = (state, action) => {
    switch (action.type){
        case 'stage_set':
            return {...state, stagedSet: action.payload};
        case 'save_staged_set':
            intervalSets = [...state.intervalSets, {...state.stagedSet, id: Math.floor(Math.random() * 10000)}];
            return {...state, intervalSets, stagedSet: initialStagedSet};
        case 'add_interval_to_staged_set':
            var stagedSetIntervals = [...state.stagedSet.intervals, action.payload];
            return {...state, stagedSet: {...state.stagedSet, intervals: stagedSetIntervals}};
        default:
            return state;
    }
};

const StageIntervalSet = dispatch => {
    return (newSet) => {
        dispatch({type: 'stage_set', payload: newSet});
    }
};

const AddIntervalToStagedSet = dispatch => {
    return (newInterval) => {
        console.log(newInterval);
        dispatch({type: 'add_interval_to_staged_set', payload: newInterval});
    }
};

const SaveStagedSet = dispatch => {
    return () => {
        dispatch({type: 'save_staged_set'});
    }
};


const initialState = {
    intervalSets: [],
    stagedSet: initialStagedSet
};

// pass in your reducer, actions, and initial state
export const {Context, Provider} = createContext(
    userReducer, 
    {StageIntervalSet, SaveStagedSet, AddIntervalToStagedSet}, 
    initialState
);
