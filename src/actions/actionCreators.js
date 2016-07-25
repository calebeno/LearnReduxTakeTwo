import * as types from '../constants/actionTypes';

// increment
export function increment(index) {
    return {
        type: types.INCREMENT_LIKES,
        index
    };
}

// add comment
export function addComment(postId, author, comment) {
    return {
        type: types.ADD_COMMENT,
        postId,
        author,
        comment
    };
}

// remove comment
export function removeComment(postId, index) {
    return {
        type: types.REMOVE_COMMENT,
        index,
        postId
    };
}
