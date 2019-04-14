import React from "react";
import tag from "../model/tag";

const SearchQuestions = ({ questions, onCreateQuestion, onViewDetails, addAnswer }) => (
    <div>
        <h2>Results</h2>
        
        <table border="1">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Text</th>
                    <th>Score</th>
                    <th>Creation Date</th>
                    <th>Tags</th>
                    <th />
                    <th />
                </tr>
            </thead>
            <tbody>
                {
                    questions.map((question, index) => (
                        <tr key={index}>
                            <td>{question.title}</td>
                            <td>{question.author.username}</td>
                            <td>{question.text}</td>
                            <td>{question.voteCount}</td>
                            <td>{question.creationDate}</td>
                            <td>{tag.toString(question.tags)}</td>
                            <td><button onClick={() => onViewDetails(question.id)}>View Details</button></td>
                            <td><button onClick={addAnswer}>Add Answer</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <button onClick={onCreateQuestion}>Add new Question</button>
    </div>
);

export default SearchQuestions;