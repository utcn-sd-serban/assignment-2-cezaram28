import store from "../store/store";

const initState = {
    answers: [{
        id: 0,
        question: store.getState().questionState.questions[0],
        author: store.getState().userState.users[1],
        text: "here's an answer",
        creationDate: "later",
        voteCount: 1
    }],
    newAnswer: {
        id: "",
        question: "",
        author: "",
        text: "",
        creationDate: "",
        voteCount: 0
    },
    index: 1
};

export default function answerReducer(state = initState, action) {
    switch (action.type) {
        case "ADD_ANSWER":
            return addAnswer(state, action.payload);
        case "EDIT_ANSWER":
            return editAnswer(state, action.payload);
        case "CHANGE_ANSWER_SCORE":
            return changeAnswerScore(state, action.payload);
        case "DELETE_ANSWER":
            return deleteAnswer(state, action.payload);
        case "CHANGE_ANSWER_PROP":
            return changeNewAnswerProperty(state, action.payload);
    }
    return state;
}

function addAnswer(state, payload) {
    let now = new Date();
    return {
        ...state,
        answers: state.answers.concat([{
            id: state.index,
            question: payload.question,
            author: store.getState().userState.users[store.getState().userState.currentUserIndex],
            text: payload.text,
            creationDate: now.toLocaleString(),
            voteCount: 0
        }]),
        index: state.index + 1
    };
}

function editAnswer(state, payload) {
    let currentAnswer = {
        id: payload.id,
        question: state.answers[payload.id].question,
        author: state.answers[payload.id].author,
        text: payload.text,
        creationDate: state.answers[payload.id].creationDate,
        voteCount: state.answers[payload.id].voteCount
    };
    let allAnswers = state.answers.concat([]);
    allAnswers[payload.id] = currentAnswer;
    return {
        ...state,
        answers: allAnswers
    };
}

function changeAnswerScore(state, payload) {
    let currentAnswer = {
        id: payload.id,
        question: state.answers[payload.id].question,
        author: state.answers[payload.id].author,
        text: state.answers[payload.id].text,
        creationDate: state.answers[payload.id].creationDate,
        voteCount: state.answers[payload.id].voteCount + payload.value
    };
    let allAnswers = state.answers.concat([]);
    allAnswers[payload.id] = currentAnswer;
    return {
        ...state,
        answers: allAnswers
    };
}

function deleteAnswer(state, payload) {
    let allAnswers = state.answers.concat([]);
    let answer = allAnswers.filter(a => a.id === payload.id)[0];
    allAnswers.splice(allAnswers.indexOf(answer), 1);
    return {
        ...state,
        answers: allAnswers
    };
}

function changeNewAnswerProperty(state, payload) {
    return {
        ...state,
        newAnswer: {
            ...state.newAnswer,
            [payload.property]: payload.value
        }
    };
}