import React, { Component } from "react";
import user from "../model/user";
import UsersList from "./UsersList"
import usersListPresenter from "../presenter/usersListPresenter";

const mapUserStateToComponentState = userState => ({
    users: userState.users
});

export default class SmartUsersList extends Component {
    constructor() {
        super();
        this.state = mapUserStateToComponentState(user.state);
        this.listener = userState => this.setState(mapUserStateToComponentState(userState));
        user.addListener("change", this.listener);
    }

    componentWillUnmount() {
        user.removeListener("change", this.listener);
    }

    render() {
        return (
            <UsersList
                onCreateUser={usersListPresenter.onCreateUser}
                users={this.state.users} />
        );
    }
}