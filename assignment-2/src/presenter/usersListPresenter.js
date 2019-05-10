import user from "../model/user";

class UsersListPresenter {

    onLogout() {
        window.location.assign("#");
        user.logout();
    }

    onBan(id) {
        user.banUser(id);
    }

}

const usersListPresenter = new UsersListPresenter();

export default usersListPresenter;