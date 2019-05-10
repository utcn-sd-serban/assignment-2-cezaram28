import answer from "../model/answer";
import user from "../model/user";

class CreateAnswerPresenter {

    onLogout() {
        window.location.assign("#");
        user.logout();
    }

    onCreate(question) {
        answer.addAnswer(question, answer.state.newAnswer.text);
        answer.changeNewAnswerProperty("text", "");
        window.location.assign("#/view-question/" + question.id);
    }

    onChange(property, value) {
        answer.changeNewAnswerProperty(property, value);
    }
}

const createAnswerPresenter = new CreateAnswerPresenter();

export default createAnswerPresenter;