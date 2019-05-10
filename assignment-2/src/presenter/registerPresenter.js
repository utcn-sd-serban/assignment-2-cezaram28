import user from "../model/user";

class RegisterPresenter {

    onLogin() {
        window.location.assign("#/login");
    }

    onRegister() {
        let userByName = user.findByUsername(user.state.newUser.username);
        if (userByName === undefined) {
            let userByMail = user.findByEmail(user.state.newUser.email);
            if (userByMail === undefined) {
                user.addUser(user.state.newUser.username, user.state.newUser.password, user.state.newUser.email);
                user.updateCurrentUserIndex(user.state.index);
                window.location.assign("#/questions-list");
                user.changeNewUserProperty("username", "");
                user.changeNewUserProperty("password", "");
                user.changeNewUserProperty("email", "");
            } else {
                alert("User exists!");
            }
        } else {
            alert("Username already exists!");
        }
    }

    onChange(property, value) {
        user.changeNewUserProperty(property, value);
    }

}

const registerPresenter = new RegisterPresenter();

export default registerPresenter;