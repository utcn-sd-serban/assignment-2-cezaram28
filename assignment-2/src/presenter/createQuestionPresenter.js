import question from "../model/question";
import tag from "../model/tag";
import user from "../model/user";

class CreateQuestionPresenter {

    onLogout() {
        window.location.assign("#");
        user.logout();
    }

    onCreate() {
        let tags = tag.toList(question.state.newQuestion.tags);
        question.addQuestion(question.state.newQuestion.title, question.state.newQuestion.text, tags);
        question.changeNewQuestionProperty("title", "");
        question.changeNewQuestionProperty("text", "");
        question.changeNewQuestionProperty("tags", "");
        window.location.assign("#/questions-list");
    }

    onChange(property, value) {
        question.changeNewQuestionProperty(property, value);
    }

}

const createQuestionPresenter = new CreateQuestionPresenter();

export default createQuestionPresenter;