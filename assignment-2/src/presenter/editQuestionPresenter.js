import question from "../model/question";
import user from "../model/user";

class EditQuestionPresenter {

    onLogout() {
        window.location.assign("#");
        user.logout();
    }

    onEdit(id) {
        question.editQuestion(id, question.state.newQuestion.title, question.state.newQuestion.text);
        question.changeNewQuestionProperty("title", "");
        question.changeNewQuestionProperty("text", "");
        window.location.assign("#/questions-list/");
    }

    onChange(property, value) {
        question.changeNewQuestionProperty(property, value);
    }

}

const editQuestionPresenter = new EditQuestionPresenter();

export default editQuestionPresenter;