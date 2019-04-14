import React, { Component } from "react";
import question from "../model/question";
import tag from "../model/tag";
import QuestionsList from "./QuestionsList"
import questionsListPresenter from "../presenter/questionsListPresenter";

const mapQuestionStateToComponentState = (questionState, tagState) => ({
    questions: questionState.questions,
    title: questionState.newQuestion.title,
    tags: tagState.tags
});

export default class SmartQuestionsList extends Component {
    constructor() {
        super();
        this.state = mapQuestionStateToComponentState(question.state, tag.state);
        this.listener = questionState => this.setState(mapQuestionStateToComponentState(questionState, tag.state));
        question.addListener("change", this.listener);
    }

    componentWillUnmount() {
        question.removeListener("change", this.listener);
    }

    render() {
        return (
            <QuestionsList
                questions={this.state.questions}
                tags={this.state.tags}
                title={this.state.title}
                onSearch={questionsListPresenter.onSearch}
                onChange={questionsListPresenter.onChange}
                onViewDetails={questionsListPresenter.onViewDetails}
                onCreateQuestion={questionsListPresenter.onCreateQuestion}
                onTagClick={questionsListPresenter.onTagClick}
                addAnswer={questionsListPresenter.addAnswer}
            />
        );
    }
}