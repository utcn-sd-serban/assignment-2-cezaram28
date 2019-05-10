import store from "../store/store";

export function findByUsername(username) {
    return store.getState().userState.users.filter(u => u.username == username)[0];
}

export function findByEmail(email) {
    return store.getState().userState.users.filter(u => u.email == email)[0];
}