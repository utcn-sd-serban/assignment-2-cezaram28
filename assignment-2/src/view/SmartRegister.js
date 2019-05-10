import React, { Component } from "react";
import Register from "./Register";
import RegisterPresenter from "../presenter/registerPresenter";
import user from "../model/user";

const mapUserStateToComponentState = userState => ({
    username: userState.newUser.username,
    password: userState.newUser.password,
    email: userState.newUser.email
});

export default class SmartRegister extends Component {
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
            <Register
                onLogin={RegisterPresenter.onLogin}
                onRegister={RegisterPresenter.onRegister}
                username={this.state.username}
                password={this.state.password}
                email={this.state.email}
                onChange={RegisterPresenter.onChange} />
        );
    }
}