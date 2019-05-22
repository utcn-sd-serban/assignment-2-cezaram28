import React, { Component } from "react";
import editQuestionPresenter from "../presenter/editQuestionPresenter";
import EditQuestion from "./EditQuestion";
import { connect } from "react-redux";
import { findById } from "../model/question/questionSelectors";
import * as userSelector from "../model/user/userSelectors";

const mapQuestionStateToComponentState = (state, props) => ({
    question: findById(props.match.params.index),
    user: userSelector.findById(state.userState.currentUserIndex),
    title: state.questionState.newQuestion.title,
    text: state.questionState.newQuestion.text
});

function mapDispatchToProps(dispatch) {
    return {
        onEdit: editQuestionPresenter.onEdit,
        onChange: editQuestionPresenter.onChange,
        onLogout: editQuestionPresenter.onLogout
    }
}

class SmartEditQuestion extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <EditQuestion
                onEdit={this.props.onEdit}
                onChange={this.props.onChange}
                title={this.props.title}
                text={this.props.text}
                id={this.props.question.id}
                onLogout={this.props.onLogout}
                user={this.props.user}
            />
        );
    }
}

export default connect(mapQuestionStateToComponentState, mapDispatchToProps)(SmartEditQuestion);