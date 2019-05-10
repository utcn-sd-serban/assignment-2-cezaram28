import React, { Component } from "react";
import Login from "./Login";
import LoginPresenter from "../presenter/loginPresenter";
import user from "../model/user";

const mapUserStateToComponentState = userState => ({
    username: userState.newUser.username,
    password: userState.newUser.password
});

export default class SmartLogin extends Component {
    constructor(props) {
        super(props);
        this.state = mapUserStateToComponentState(user.state);
        this.listener = userState => this.setState(mapUserStateToComponentState(userState));
        user.addListener("change", this.listener);
    }

    componentWillUnmount() {
        user.removeListener("change", this.listener);
    }

    render() {
        return (
            <Login
                onLogin={LoginPresenter.onLogin}
                onRegister={LoginPresenter.onRegister}
                username={this.state.username}
                password={this.state.password}
                onChange={LoginPresenter.onChange} />
        );
    }
}