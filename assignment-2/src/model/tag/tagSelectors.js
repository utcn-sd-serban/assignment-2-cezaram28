import store from "../store/store";

export function toString(tags) {
    let s = "";
    tags.forEach(tag => s = s + tag.name + " ");
    return s;
}

export function found(tag) {
    for (let i = 0; i < store.getState().tagState.tags.length; i++)
        if (store.getState().tagState.tags[i].name === tag) return i;
    return -1;
}

export function toList(tags) {
    let tagNames = tags.split(",");
    let tagList = [];
    for (let i = 0; i < tagNames.length; i++) {
        let ind = found(tagNames[i]);
        ind === -1 ? tagList.push(addTag(tagNames[i])) : tagList.push(store.getState().tagState.tags[ind]);
    }
    return tagList;
}

export function returnTag(tag) {
    return store.getState().tagState.tags.filter(t => t.name === tag)[0];
}