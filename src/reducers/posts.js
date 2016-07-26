// a reducer takes in two things
// 1. the action (info about what happened)
// 2. copy of current state

import * as types from '../constants/actionTypes';

export default function posts(state = [], action) {
    const incrementLikes = () => {
        console.log('Incrementing Likes!');
        const i = action.index;
        return [
            ...state.slice(0, i), // before the one we are updating
            {...state[i], likes: state[i].likes + 1},
            ...state.slice(i + 1), // after the one we are updating
        ]
    };

    // contains all acceptable actions
    const acceptedActions = {
        [types.INCREMENT_LIKES]: incrementLikes
    };

    // return state as it was if no accepted action
    if (typeof acceptedActions[action.type] === 'undefined') {
        return state;
    }

    // run state change code here
    return acceptedActions[action.type]();
}
