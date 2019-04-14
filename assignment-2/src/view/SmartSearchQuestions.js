import React, { Component } from "react";
import question from "../model/question";
import tag from "../model/tag";
import SearchQuestions from "./SearchQuestions";
import questionsListPresenter from "../presenter/questionsListPresenter";

const mapQuestionStateToComponentState = questionState => ({
    questions: questionState.newQuestion.title === "" ?
        (questionState.newQuestion.tags === "" ? questionState.questions : question.findByTag(questionState.newQuestion.tags)) :
            question.findByTitle(questionState.newQuestion.title)
});

export default class SmartSearchQuestions extends Component {
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
            <SearchQuestions
                questions={this.state.questions}
                onViewDetails={questionsListPresenter.onViewDetails}
                onCreateQuestion={questionsListPresenter.onCreateQuestion}
            />
        );
    }
}