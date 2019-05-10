import answer from "../model/answer";
import user from "../model/user";

class EditAnswerPresenter {

    onLogout() {
        window.location.assign("#");
        user.logout();
    }

    onEdit(id, questionId) {
        answer.editAnswer(id, answer.state.newAnswer.text);
        answer.changeNewAnswerProperty("text", "");
        window.location.assign("#/view-question/" + questionId);
    }

    onChange(property, value) {
        answer.changeNewAnswerProperty(property, value);
    }

}

const editAnswerPresenter = new EditAnswerPresenter();

export default editAnswerPresenter;