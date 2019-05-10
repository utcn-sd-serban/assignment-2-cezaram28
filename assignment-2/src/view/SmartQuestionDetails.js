import React, { Component } from "react";
import question from "../model/question";
import answer from "../model/answer";
import tag from "../model/tag";
import QuestionDetails from "./QuestionDetails";
import questionDetailsPresenter from "../presenter/questionDetailsPresenter";

const mapQuestionStateToComponentState = (questionState, props) => ({
    question: questionState.questions[props.match.params.index],
    answers: answer.findByQuestion(props.match.params.index)
});

export default class SmartQuestionDetails extends Component {
    constructor(props) {
        super(props);
        this.state = mapQuestionStateToComponentState(question.state, props);
        this.listener = questionState => this.setState(mapQuestionStateToComponentState(questionState, this.props));
        question.addListener("change", this.listener);
    }

    componentDidUpdate(prev) {
        if (prev.match.params.index !== this.props.match.params.index) {
            this.setState(mapQuestionStateToComponentState(question.state, this.props));
        }
    }

    componentWillUnmount() {
        question.removeListener("change", this.listener);
    }

    render() {
        return (
            <QuestionDetails
                id={this.state.question.id}
                title={this.state.question.title}
                author={this.state.question.author.username}
                text={this.state.question.text}
                creationDate={this.state.question.creationDate}
                voteCount={this.state.question.voteCount}
                tags={tag.toString(this.state.question.tags)}
                answers={this.state.answers}
                onEdit={questionDetailsPresenter.onEdit}
                addAnswer={questionDetailsPresenter.addAnswer}
                onDelete={questionDetailsPresenter.onDelete}
                onVote={questionDetailsPresenter.onVote}
                onLogout={questionDetailsPresenter.onLogout}
            />
        );
    }
}