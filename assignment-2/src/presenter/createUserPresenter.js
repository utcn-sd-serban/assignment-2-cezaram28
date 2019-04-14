import user from "../model/user";

class CreateUserPresenter {

    onCreate() {
        user.addUser(user.state.newUser.username, user.state.newUser.password, user.state.newUser.email);
        user.changeNewUserProperty("username", "");
        user.changeNewUserProperty("password", "");
        user.changeNewUserProperty("email", "");
        window.location.assign("#/users-list");
    }

    onChange(property, value) {
        user.changeNewUserProperty(property, value);
    }

}

const createUserPresenter = new CreateUserPresenter();

export default createUserPresenter;