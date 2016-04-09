import {Post} from './post';

export interface IRepo {
    POSTS: Post[];
}

export class GitHubRepo implements IRepo {
    POSTS: Post[];

    constructor() {
        var tposts = this.GetPosts();
        this.POSTS = new Array<Post>();

        var client = new XMLHttpRequest();

        tposts.forEach(post => {
            client.open("GET", 'posts/' + post + '.md', false);
            client.send();

            if (client.readyState == 4 && client.status == 200) {
                var newPost = new Post();
                newPost.name = post;
                newPost.markdown = client.responseText;
                this.POSTS.push(newPost);
            }
        });
    }

    GetPosts() {
        var client = new XMLHttpRequest();
        client.open("GET", "posts.json", false);
        client.send();

        if (client.readyState == 4 && client.status == 200) {
            var myArr = JSON.parse(client.responseText);
        }

        return myArr.posts;
    }
}