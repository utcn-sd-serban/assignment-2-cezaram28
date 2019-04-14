import user from "../model/user";

class UsersListPresenter {

    onCreateUser() {
        //user.changeRoute("create-user");
        window.location.assign("#/create-user");
    }

}

const usersListPresenter = new UsersListPresenter();

export default usersListPresenter;