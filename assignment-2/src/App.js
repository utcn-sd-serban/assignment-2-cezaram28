import React, { Component } from 'react';
import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import SmartUsersList from './view/SmartUsersList';
import SmartCreateUser from './view/SmartCreateUser';
import SmartQuestionsList from './view/SmartQuestionsList';
import SmartCreateAnswer from './view/SmartCreateAnswer';
import SmartCreateQuestion from './view/SmartCreateQuestion';
import SmartQuestionDetails from './view/SmartQuestionDetails';
import SmartSearchQuestions from './view/SmartSearchQuestions';

const App = () => (
    <div className="App">
        <HashRouter>
            <Switch>
                <Route exact={true} component={SmartQuestionsList} path="/questions-list" />
                <Route exact={true} component={SmartSearchQuestions} path="/questions-list/:title" />
                <Route exact={true} component={SmartUsersList} path="/users-list" />
                <Route exact={true} component={SmartCreateUser} path="/create-user" />
                <Route exact={true} component={SmartCreateQuestion} path="/create-question" />
                <Route exact={true} component={SmartCreateAnswer} path="/create-answer/:index" />
                <Route exact={true} component={SmartQuestionDetails} path="/view-question/:index" />
            </Switch>
        </HashRouter>
    </div>
);

export default App;
