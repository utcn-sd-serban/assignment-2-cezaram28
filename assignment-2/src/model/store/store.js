import { createStore } from "redux";
import userReducer from "../user/userReducer";
import tagReducer from "../tag/tagReducer";

const store = createStore(userReducer,tagReducer);

export default store;