import answer from "../model/answer";
import vote from "../model/vote";
import user from "../model/user";

class QuestionDetailsPresenter {

    onLogout() {
        window.location.assign("#");
        user.logout();
    }

    addAnswer(index) {
        window.location.assign("#/create-answer/" + index);
    }

    onEdit(aIndex, qIndex) {
        window.location.assign("#/view-question/" + qIndex + "/edit-answer/" + aIndex);
    }

    onDelete(index) {
        answer.deleteAnswer(index);
    }

    onVote(votedQuestion, votedAnswer, type) {
        if (votedAnswer !== undefined) {
            let v = vote.findByAnswer(votedAnswer.id, user.state.currentUserIndex);
            if (v.length > 0) {
                //already voted
                if (v[0].type === "up" && type === "down") {
                    //change from upvote to downvote
                    user.updateScore(votedAnswer.author.id, -12);
                    user.updateScore(user.state.currentUserIndex, -1);
                    answer.changeAnswerScore(votedAnswer.id, -2);
                    vote.changeVoteType(v[0].id, type);
                }
                else if (v[0].type === "down" && type === "up") {
                    //change from down to up
                    user.updateScore(votedAnswer.author.id, 12);
                    user.updateScore(user.state.currentUserIndex, 1);
                    answer.changeAnswerScore(votedAnswer.id, 2);
                    vote.changeVoteType(v[0].id, type);
                }
            } else {
                vote.addVote(undefined, votedAnswer, type);
                if (type === "down") {
                    //downvote
                    user.updateScore(votedAnswer.author.id, -2);
                    user.updateScore(user.state.currentUserIndex, -1);
                    answer.changeAnswerScore(votedAnswer.id, 1);
                }
                else {
                    //up
                    user.updateScore(votedAnswer.author.id, 10);
                    answer.changeAnswerScore(votedAnswer.id, 1);
                }
            }
        }
    }

}

const questionDetailsPresenter = new QuestionDetailsPresenter();

export default questionDetailsPresenter;