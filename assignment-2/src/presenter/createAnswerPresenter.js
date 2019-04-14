import answer from "../model/answer";

class CreateAnswerPresenter {

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