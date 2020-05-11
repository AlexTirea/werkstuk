import {
    Post
} from "./post.js";
import {
    firebaseInstance
} from "./firebase.js";

class Posts {
    constructor() {
        this.htmlElement = document.getElementById('post'
            s);
    }
    render() {
        let htmlString = '';
        firebaseInstance.postsCollection.onSnapshot((querySnapshot) => {
            const postsData = firebaseInstance.convertQuerySnapshotToRegularArray(querySnapshot);
            postsData.forEach((postData) => {
                const postInstance = new Post(postData);
                console.log(postInstance.htmlString);
                htmlString += postInstance.htmlString;
            })
            this.htmlString.innerHTML = htmlString;
        })
    }
}

const posts = new Posts();
posts.render();