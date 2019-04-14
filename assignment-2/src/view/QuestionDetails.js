import React from "react";
import user from "../model/user"

const QuestionDetails = ({ id, title, author, text, creationDate, voteCount, tags, answers, addAnswer }) => (
    <div>
        <h2>Question</h2>
        <label>Title: </label>
        <span>{title}</span>
        <br />
        <label>Author: </label>
        <span>{author}</span>
        <br />
        <label>Text: </label>
        <span>{text}</span>
        <br />
        <label>Creation Date: </label>
        <span>{creationDate}</span>
        <br />
        <label>Vote Count: </label>
        <span>{voteCount}</span>
        <br />
        <label>Tags: </label>
        <span>{tags}</span>
        <br />
        <label>Answers: </label>
        <table border="1">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Text</th>
                    <th>Score</th>
                    <th>Creation Date</th>
                    <th />
                    <th />
                </tr>
            </thead>
            <tbody>
                {
                    answers.map((answer, index) => (
                        <tr key={index}>
                            <td>{answer.author.username}</td>
                            <td>{answer.text}</td>
                            <td>{answer.voteCount}</td>
                            <td>{answer.creationDate}</td>
                            <td>{answer.author.id === user.state.currentUserIndex ? <button>Edit</button> : ""}</td>
                            <td>{answer.author.id === user.state.currentUserIndex ? <button>Delete</button> : ""}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <br />
        <button onClick={() => addAnswer(id)}>Add Answer</button>
    </div>
);

export default QuestionDetails;