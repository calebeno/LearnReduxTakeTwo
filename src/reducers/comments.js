// a reducer takes in two things
// 1. the action (info about what happened)
// 2. copy of current state

import * as types from '../constants/actionTypes';

export default function comments(state = [], action) {

    const addComment = (state, action) => {
        // return the new state with the new comment
        return [
            ...state,
            {
                user: action.author,
                text: action.comment
            }
        ];
    };

    const removeComment = (state, action) => {
        return [
            // from start to the one we want to delete
            ...state.slice(0, action.index),
            // after the one we want to delete
            ...state.slice(action.index + 1)
        ];
    };

    // contains all acceptable actions
    const acceptedActions = {
        [types.ADD_COMMENT]: addComment,
        [types.REMOVE_COMMENT]: removeComment
    };

    // return state as it was if no accepted action
    if (typeof acceptedActions[action.type] === 'undefined') {
        return state;
    }

    // Always do this
    return {
        // take the current state
        ...state,
        // overwrite this post with a new one
        [action.postId]: acceptedActions[action.type](state[action.postId], action)
    };
}
