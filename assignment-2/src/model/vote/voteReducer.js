import store from "../store/store";

const initState = {
    votes: [],
    newVote: {
        id: "",
        type: "",
        question: "",
        answer: "",
        user: ""
    },
    index: 0
};

export default function voteReducer(state, action) {
    switch (action.type) {
        case "ADD_VOTE":
            return addVote(state, action.payload);
        case "CHANGE_VOTE_TYPE":
            return changeVoteType(state, action.payload);
    }
    return state;
}

function addVote(state, payload) {
    return {
        ...state,
        votes: state.votes.concat([{
            id: state.index,
            type: payload.type,
            question: payload.question,
            user: store.getState().userState.users[store.getState().userState.currentUserIndex],
            answer: payload.answer
        }]),
        index: state.index + 1
    };
}

function changeVoteType(state, payload, id, type) {
    let currentVote = {
        id: payload.id,
        type: payload.id,
        question: state.votes[payload.id].question,
        answer: state.votes[payload.id].answer,
        user: state.votes[payload.id].user
    };
    let allVotes = state.votes.concat([]);
    allVotes[payload.id] = currentVote;
    return {
        ...state,
        votes: allVotes
    };
}