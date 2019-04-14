import React from "react";

const UsersList = ({ users, title, onCreateUser }) => (
    <div>
        <h2>{title || "Users"}</h2>
        <table border = "1">
            <thead>
                <tr>
                    <th>username</th>
                    <th>score</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.score}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <button onClick={onCreateUser}>Add new User</button>
    </div>
);

export default UsersList;