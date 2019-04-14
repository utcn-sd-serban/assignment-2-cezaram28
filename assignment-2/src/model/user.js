import { EventEmitter } from "events";

class User extends EventEmitter {
    constructor() {
        super();
        this.state = {
            users: [{
                id: 0,
                username: "mckfchicken",
                password: "burgr",
                email: "mckfc@subway.com",
                score: 5,
                isAdmin: false,
                isBanned: false
            }, {
                id: 1,
                username: "admin_van_buuren",
                password: "mixitup",
                email: "avb@dj.com",
                score: 1,
                isAdmin: true,
                isBanned: false
            }],
            newUser: {
                id: "",
                username: "",
                password: "",
                email: "",
                score: 0,
                isAdmin: false,
                isBanned: false
            },
            currentUserIndex: 1,
            index: 2,
            route: "users-list"
        };
    }

    changeRoute(route) {
        this.state = {
            ...this.state,
            route
        };
        this.emit("change", this.state);
    }

    addUser(username, password, email) {
        this.state = {
            ...this.state,
            users: this.state.users.concat([{
                id: this.state.index,
                username: username,
                password: password,
                email: email,
                score: 0,
                isAdmin: false,
                isBanned: false
            }]),
            index: this.state.index+1
        };
        this.emit("change", this.state);
    }

    changeNewUserProperty(property, value) {
        this.state = {
            ...this.state,
            newUser: {
                ...this.state.newUser,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }
}

const user = new User();

export default user;