import question from "../model/question";

class QuestionListPresenter {

    onCreateQuestion() {
        window.location.assign("#/create-question");
    }

    onViewDetails(index) {
        window.location.assign("#/view-question/" + index);
    }

    onChange(property, value) {
        question.changeNewQuestionProperty(property, value);
    }

    onSearch(title) {
        //question.findByTitle(title);
        question.changeNewQuestionProperty("title", title);
        question.changeNewQuestionProperty("text", "");
        question.changeNewQuestionProperty("tags", "");
        window.location.assign("#/questions-list/" + title);
    }

    onTagClick(tag) {
        question.changeNewQuestionProperty("title", "");
        question.changeNewQuestionProperty("text", "");
        question.changeNewQuestionProperty("tags", tag);
        window.location.assign("#/questions-list/" + tag);
    }

    addAnswer(index) {
        window.location.assign("#/create-answer/" + index);
    }
}

const questionListPresenter = new QuestionListPresenter();

export default questionListPresenter;