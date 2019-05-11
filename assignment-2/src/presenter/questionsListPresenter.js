import * as questionActions from "../model/question/questionActions";
import * as userActions from "../model/user/userActions";
import * as userSelectors from "../model/user/userSelectors";
import * as voteSelectors from "../model/vote/voteSelectors";
import * as voteActions from "../model/vote/voteActions";
import store from "../model/store/store";

class QuestionListPresenter {

    onUsers() {
        window.location.assign("#/users-list");
    }

    onLogout() {
        window.location.assign("#");
        store.dispatch(userActions.logout());
    }

    onCreateQuestion() {
        window.location.assign("#/create-question");
    }

    onViewDetails(index) {
        window.location.assign("#/view-question/" + index);
    }

    onChange(property, value) {
        store.dispatch(questionActions.changeNewQuestionProperty(property, value));
    }

    init() {
        store.dispatch(questionActions.changeNewQuestionProperty("tags", ""));
        store.dispatch(questionActions.changeNewQuestionProperty("title", ""));
    }

    onSearch(title) {
        store.dispatch(questionActions.changeNewQuestionProperty("title", title));
        store.dispatch(questionActions.changeNewQuestionProperty("text", ""));
        store.dispatch(questionActions.changeNewQuestionProperty("tags", ""));
        window.location.assign("#/questions-list/" + title);
    }

    onTagClick(tag) {
        store.dispatch(questionActions.changeNewQuestionProperty("title", ""));
        store.dispatch(questionActions.changeNewQuestionProperty("text", ""));
        store.dispatch(questionActions.changeNewQuestionProperty("tags", tag));
        window.location.assign("#/questions-list/" + tag);
    }

    addAnswer(index) {
        window.location.assign("#/create-answer/" + index);
    }

    onDelete(index) {
        store.dispatch(questionActions.deleteQuestion(index));
    }

    onEdit(index) {
        window.location.assign("#/edit-question/" + index);
    }

    onVote(votedQuestion, votedAnswer, type) {
        if (votedQuestion !== undefined) {
            let v = voteSelectors.findByQuestion(votedQuestion.id, userSelectors.getCurrentIndex());
            if (v.length > 0) {
                //already voted
                if (v[0].type === "up" && type === "down") {
                    //change from upvote to downvote
                    store.dispatch(userActions.updateScore(votedQuestion.author.id, -7));
                    store.dispatch(questionActions.changeQuestionScore(votedQuestion.id, -2));
                    store.dispatch(voteActions.changeVoteType(v[0].id, type));
                }
                else if (v[0].type === "down" && type === "up") {
                    //change from down to up
                    store.dispatch(userActions.updateScore(votedQuestion.author.id, 7));
                    store.dispatch(questionActions.changeQuestionScore(votedQuestion.id, 2));
                    store.dispatch(voteActions.changeVoteType(v[0].id, type));
                }
            } else {
                store.dispatch(voteActions.addVote(votedQuestion, undefined, type, userSelectors.getCurrentUser()));
                if (type === "down") {
                    //downvote
                    store.dispatch(userActions.updateScore(votedQuestion.author.id, -2));
                    store.dispatch(questionActions.changeQuestionScore(votedQuestion.id, -1));
                }
                else {
                    //up
                    store.dispatch(userActions.updateScore(votedQuestion.author.id, 5));
                    store.dispatch(questionActions.changeQuestionScore(votedQuestion.id, 1));
                }
            }
        }
    }
}

const questionListPresenter = new QuestionListPresenter();

export default questionListPresenter;