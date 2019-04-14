import { EventEmitter } from "events";
import tag from "./tag";
import author from "./user"

class Question extends EventEmitter {
    constructor() {
        super();
        this.state = {
            questions: [{
                id: 0,
                title: "it's a title",
                author: author.state.users[0],
                text: "some text",
                creationDate: "some date",
                voteCount: 5,
                tags: [tag.state.tags[1]]
            }, {
                id: 1,
                title: "my question is",
                author: author.state.users[0],
                text: "this",
                creationDate: "some date",
                voteCount: 1,
                tags: [ tag.state.tags[0], tag.state.tags[1] ]
            }],
            newQuestion: {
                id: "",
                title: "",
                author: "",
                text: "",
                creationDate: "some date",
                voteCount: "",
                tags: ""
            },
            index: 2,
            route: "questions_list"
        };
    }

    findByTitle(title) {
        let res = this.state.questions.filter(q => q.title.includes(title));
        this.changeNewQuestionProperty("title", "");
        return res;
    }

    findByTag(tag) {
        let questions = [];
        for (let i = 0; i < this.state.questions.length; i++) {
            for (let j = 0; j < this.state.questions[i].tags.length; j++) {
                if (this.state.questions[i].tags[j].name === tag) {
                    questions.push(this.state.questions[i]);
                    break;
                }
            }
        }
        this.changeNewQuestionProperty("tags", "");
        return questions;
    }

    findByAuthor(username) {
        return this.state.questions.filter(q => q.author.username === username);
    }

    changeRoute(route) {
        this.state = {
            ...this.state,
            route
        };
        this.emit("change", this.state);
    }

    addQuestion(title, text, tags) {
        let now = new Date();
        this.state = {
            ...this.state,
            questions: this.state.questions.concat([{
                id: this.state.index,
                title,
                author: author.state.users[author.state.currentUserIndex],
                text,
                creationDate: now.toLocaleString(),
                voteCount: 0,
                tags
            }]),
            index: this.state.index + 1
        };
        this.emit("change", this.state);
    }

    changeNewQuestionProperty(property, value) {
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }
}

const question = new Question();

export default question;