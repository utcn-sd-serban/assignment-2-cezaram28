export function changeVoteType(id, type) {
    return {
        type: "CHANGE_VOTE_TYPE",
        payload: {
            id,
            type
        }
    };
}

export function addVote(question, answer, type) {
    return {
        type: "ADD_VOTE",
        payload: {
            question,
            answer,
            type
        }
    };
}