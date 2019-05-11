import * as questionSelectors from "../model/question/questionSelectors";
import * as questionActions from "../model/question/questionActions";
import * as userActions from "../model/user/userActions";
import * as userSelectors from "../model/user/userSelectors";
import * as tagSelectors from "../model/tag/tagSelectors";
import store from "../model/store/store";

class CreateQuestionPresenter {

    onLogout() {
        window.location.assign("#");
        store.dispatch(userActions.logout());
    }

    onCreate() {
        let newQuestion = questionSelectors.getNewQuestion();
        let tags = tagSelectors.toList(newQuestion.tags);
        store.dispatch(questionActions.addQuestion(newQuestion.title, newQuestion.text, userSelectors.getCurrentUser(), tags));
        store.dispatch(questionActions.changeNewQuestionProperty("title", ""));
        store.dispatch(questionActions.changeNewQuestionProperty("text", ""));
        store.dispatch(questionActions.changeNewQuestionProperty("tags", ""));
        window.location.assign("#/questions-list");
    }

    onChange(property, value) {
        store.dispatch(questionActions.changeNewQuestionProperty(property, value));
    }

}

const createQuestionPresenter = new CreateQuestionPresenter();
export default createQuestionPresenter;