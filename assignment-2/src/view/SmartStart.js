import React, { Component } from "react";
import Start from "./Start";
import StartPresenter from "../presenter/startPresenter";

export default class SmartStart extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Start
                onLogin={StartPresenter.onLogin}
                onRegister={StartPresenter.onRegister} />
        );
    }
}