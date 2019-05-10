import React, { Component } from "react";
import question from "../model/question";
import createQuestionPresenter from "../presenter/createQuestionPresenter";
import CreateQuestion from "./CreateQuestion";

const mapQuestionStateToComponentState = questionState => ({
    title: questionState.newQuestion.title,
    text: questionState.newQuestion.text,
    tags: questionState.newQuestion.tags
});

export default class SmartCreateQuestion extends Component {
    constructor() {
        super();
        this.state = mapQuestionStateToComponentState(question.state);
        this.listener = questionState => this.setState(mapQuestionStateToComponentState(questionState));
        question.addListener("change", this.listener);
    }

    componentWillUnmount() {
        question.removeListener("change", this.listener);
    }

    render() {
        return (
            <CreateQuestion
                onCreate={createQuestionPresenter.onCreate}
                onChange={createQuestionPresenter.onChange}
                title={this.state.title}
                text={this.state.text}
                tags={this.state.tags}
                onLogout={createQuestionPresenter.onLogout} />
        );
    }
}