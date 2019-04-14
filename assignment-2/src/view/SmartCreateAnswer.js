import React, { Component } from "react";
import answer from "../model/answer";
import question from "../model/question";
import createAnswerPresenter from "../presenter/createAnswerPresenter";
import CreateAnswer from "./CreateAnswer";

const mapAnswerStateToComponentState = (answerState, props) => ({
    question: question.state.questions[props.match.params.index],
    text: answerState.newAnswer.text
});

export default class SmartCreateAnswer extends Component {
    constructor(props) {
        super(props);
        this.state = mapAnswerStateToComponentState(answer.state, props);
        this.listener = answerState => this.setState(mapAnswerStateToComponentState(answerState, props));
        answer.addListener("change", this.listener);
    }

    componentWillUnmount() {
        answer.removeListener("change", this.listener);
    }

    render() {
        return (
            <CreateAnswer
                onCreate={createAnswerPresenter.onCreate}
                onChange={createAnswerPresenter.onChange}
                text={this.state.text} 
                question = {this.state.question} />
        );
    }
}