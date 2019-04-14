

class QuestionDetailsPresenter {

    addAnswer(index) {
        window.location.assign("#/create-answer/" + index);
    }

}

const questionDetailsPresenter = new QuestionDetailsPresenter();

export default questionDetailsPresenter;