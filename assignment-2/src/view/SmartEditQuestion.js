import React, { Component } from "react";
import question from "../model/question";
import editQuestionPresenter from "../presenter/editQuestionPresenter";
import EditQuestion from "./EditQuestion";

const mapQuestionStateToComponentState = (questionState, props) => ({
    question: questionState.questions[props.match.params.index],
    title: questionState.newQuestion.title,
    text: questionState.newQuestion.text
});

export default class SmartEditQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = mapQuestionStateToComponentState(question.state, props);
        this.listener = questionState => this.setState(mapQuestionStateToComponentState(questionState, props));
        question.addListener("change", this.listener);
    }

    componentWillUnmount() {
        question.removeListener("change", this.listener);
    }

    render() {
        return (
            <EditQuestion
                onEdit={editQuestionPresenter.onEdit}
                onChange={editQuestionPresenter.onChange}
                title={this.state.title}
                text={this.state.text}
                id={this.state.question.id}
                onLogout={editQuestionPresenter.onLogout} />
        );
    }
}