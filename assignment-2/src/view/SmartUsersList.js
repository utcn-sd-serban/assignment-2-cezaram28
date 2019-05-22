import React, { Component } from "react";
import { connect } from "react-redux";
import UsersList from "./UsersList"
import usersListPresenter from "../presenter/usersListPresenter";
import * as userSelector from "../model/user/userSelectors";

const mapUserStateToComponentState = state => ({
    users: state.userState.users,
    user: userSelector.findById(state.userState.currentUserIndex)
});

function mapDispatchToProps(dispatch) {
    return {
        onLogout: usersListPresenter.onLogout,
        onBan: usersListPresenter.onBan
    };
}

class SmartUsersList extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <UsersList
                user={this.props.user}
                users={this.props.users}
                onLogout={this.props.onLogout}
                onBan={this.props.onBan} />
        );
    }
}

export default connect(mapUserStateToComponentState, mapDispatchToProps)(SmartUsersList);