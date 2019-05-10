import store from "../store/store";

const initState = {
    questions: [{
        id: 0,
        title: "it's a title",
        author: store.getState().userState.users[0],
        text: "some text",
        creationDate: "some date",
        voteCount: 5,
        tags: [store.getState().tagState.tags[1]]
    }, {
        id: 1,
        title: "my question is",
        author: store.getState().userState.users[0],
        text: "this",
        creationDate: "some date",
        voteCount: 1,
        tags: [store.getState().tagState.tags[0], store.getState().tagState.tags[1]]
    }],
    newQuestion: {
        id: "",
        title: "",
        author: "",
        text: "",
        creationDate: "some date",
        voteCount: "",
        tags: ""
    },
    index: 2
};

export default function questionReducer(state = initState, action) {
    switch (action.type) {
        case "ADD_QUESTION":
            return addQuestion(state, payload);
        case "EDIT_QUESTION":
            return editQuestion(state, payload);
        case "CHANGE_QUESTION_SCORE":
            return changeQuestionScore(state, payload);
        case "DELETE_QUESTION":
            return deleteQuestion(state, payload);
        case "CHANGE_QUESTION_PROP":
            return changeNewQuestionProperty(state, payload);
    }
    return state;
}

function addQuestion(state, payload) {
    let now = new Date();
    return {
        ...state,
        questions: state.questions.concat([{
            id: state.index,
            title: payload.title,
            author: store.getState().userState.users[store.getState().userState.currentUserIndex],
            text: payload.text,
            creationDate: now.toLocaleString(),
            voteCount: 0,
            tags: payload.tags
        }]),
        index: state.index + 1
    };
}

function editQuestion(state, payload) {
    let currentQuestion = {
        id: payload.id,
        title: payload.title,
        author: state.questions[payload.id].author,
        text: payload.text,
        creationDate: state.questions[payload.id].creationDate,
        voteCount: state.questions[payload.id].voteCount,
        tags: state.questions[payload.id].tags
    };
    let allQuestions = state.questions.concat([]);
    allQuestions[payload.id] = currentQuestion;
    return {
        ...state,
        questions: allQuestions
    };
}

function changeQuestionScore(state, payload) {
    let currentQuestion = {
        id: state.questions[payload.id].id,
        title: state.questions[payload.id].title,
        author: state.questions[payload.id].author,
        text: state.questions[payload.id].text,
        creationDate: state.questions[payload.id].creationDate,
        voteCount: state.questions[payload.id].voteCount + value,
        tags: state.questions[payload.id].tags
    };
    let allQuestions = state.questions.concat([]);
    allQuestions[payload.id] = currentQuestion;
    return {
        ...state,
        questions: allQuestions
    };
}

function deleteQuestion(state, payload) {
    let allQuestions = state.questions.concat([]);
    let question = allQuestions.filter(q => q.id === payload.id)[0];
    allQuestions.splice(allQuestions.indexOf(question), 1);
    return {
        ...state,
        questions: allQuestions
    };
}

function changeNewQuestionProperty(state, payload) {
    return {
        ...state,
        newQuestion: {
            ...state.newQuestion,
            [payload.property]: payload.value
        }
    };
}