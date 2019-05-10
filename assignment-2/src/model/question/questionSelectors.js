import store from "../store/store";

export function findByTitle(title) {
    let res = store.getState().questionState.questions.filter(q => q.title.includes(title));
    store.dispatch(changeNewQuestionProperty("title", ""));
    return res;
}

export function findByTag(tag) {
    let questions = [];
    for (let i = 0; i < store.getState().questionState.questions.length; i++) {
        for (let j = 0; j < store.getState().questionState.questions[i].tags.length; j++) {
            if (store.getState().questionState.questions[i].tags[j].name === tag) {
                questions.push(store.getState().questionState.questions[i]);
                break;
            }
        }
    }
    store.dispatch(changeNewQuestionProperty("tags", ""));
    return questions;
}

export function findByAuthor(username) {
    return store.getState().questionState.questions.filter(q => q.author.username === username);
}