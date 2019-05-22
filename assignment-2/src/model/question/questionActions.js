export function addQuestion(title, text, user, tags) {
    return {
        type: "ADD_QUESTION",
        payload: {
            title,
            text,
            user,
            tags
        }
    }
}

export function editQuestion(id, title, text) {
    return {
        type: "EDIT_QUESTION",
        payload: {
            id,
            title,
            text
        }
    }
}

export function changeQuestionScore(id, value) {
    return {
        type: "CHANGE_QUESTION_SCORE",
        payload: {
            id,
            value
        }
    }
}

export function deleteQuestion(id) {
    return {
        type: "DELETE_QUESTION",
        payload: {
            id
        }
    }
}

export function changeNewQuestionProperty(property, value) {
    return {
        type: "CHANGE_QUESTION_PROP",
        payload: {
            property,
            value
        }
    };
}