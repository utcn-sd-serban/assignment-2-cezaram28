import question from "../model/question";
import vote from "../model/vote";
import user from "../model/user";

class QuestionListPresenter {

    onUsers() {
        window.location.assign("#/users-list");
    }

    onLogout() {
        window.location.assign("#");
        user.logout();
    }

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

    onDelete(index) {
        question.deleteQuestion(index);
    }

    onEdit(index) {
        window.location.assign("#/edit-question/" + index);
    }

    onVote(votedQuestion, votedAnswer, type) {
        if (votedQuestion !== undefined) {
            let v = vote.findByQuestion(votedQuestion.id, user.state.currentUserIndex);
            if (v.length > 0) {
                //already voted
                if (v[0].type === "up" && type === "down") {
                    //change from upvote to downvote
                    user.updateScore(votedQuestion.author.id, -7);
                    question.changeQuestionScore(votedQuestion.id, -2);
                    vote.changeVoteType(v[0].id, type);
                }
                else if (v[0].type === "down" && type === "up") {
                    //change from down to up
                    user.updateScore(votedQuestion.author.id, +7);
                    question.changeQuestionScore(votedQuestion.id, +2);
                    vote.changeVoteType(v[0].id, type);
                }
            } else {
                vote.addVote(votedQuestion, undefined, type);
                if (type === "down") {
                    //downvote
                    user.updateScore(votedQuestion.author.id, -2);
                    question.changeQuestionScore(votedQuestion.id, -1);
                }
                else {
                    //up
                    user.updateScore(votedQuestion.author.id, 5);
                    question.changeQuestionScore(votedQuestion.id, 1);
                }
            }
        }
    }
}

const questionListPresenter = new QuestionListPresenter();

export default questionListPresenter;