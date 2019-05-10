import React, { Component } from "react";
import answer from "../model/answer";
import editAnswerPresenter from "../presenter/editAnswerPresenter";
import EditAnswer from "./EditAnswer";

const mapAnswerStateToComponentState = (answerState, props) => ({
    question: answerState.newAnswer.question,
    idAnswer: props.match.params.aIndex,
    idQuestion: props.match.params.qIndex,
    text: answerState.newAnswer.text
});

export default class SmartEditAnswer extends Component {
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
            <EditAnswer
                onEdit={editAnswerPresenter.onEdit}
                onChange={editAnswerPresenter.onChange}
                text={this.state.text}
                questionId={this.state.idQuestion}
                id={this.state.idAnswer}
                onLogout={editAnswerPresenter.onLogout}
            />
        );
    }
}