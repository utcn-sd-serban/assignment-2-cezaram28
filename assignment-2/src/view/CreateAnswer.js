import React from "react";

const CreateAnswer = ({ text, question, onCreate, onChange }) => (
    <div>
        <h2>Add Answer</h2>
        <div>
            <label>Text: </label>
            <input value={text} onChange={e => onChange("text", e.target.value)} />
            <br />
            <button onClick={() => onCreate(question)}>Add!</button>
        </div>
    </div>
);

export default CreateAnswer;