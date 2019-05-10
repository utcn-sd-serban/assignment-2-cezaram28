import user from "../model/user";

class LoginPresenter {

    onLogin() {
        let currentUser = user.findByUsername(user.state.newUser.username);
        if (currentUser !== undefined && currentUser.password === user.state.newUser.password) {
            if (currentUser.isBanned) {
                alert("User banned!");
            } else {
                user.updateCurrentUserIndex(currentUser.id);
                window.location.assign("#/questions-list");
                user.changeNewUserProperty("username", "");
                user.changeNewUserProperty("password", "");
            }
        } else {
            alert("Bad credentials!");
        }
    }

    onRegister() {
        window.location.assign("#/register");
    }

    onChange(property, value) {
        user.changeNewUserProperty(property, value);
    }

}

const loginPresenter = new LoginPresenter();

export default loginPresenter;