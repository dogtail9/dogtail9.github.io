import {Injectable} from 'angular2/core';

import {Post} from '../../model/post';
import {GitHubRepo} from '../../model/github.posts';

@Injectable()
export class PostService {
    Repo: GitHubRepo;
    
    constructor() {
        this.Repo = new GitHubRepo();
    }
    
    getPosts() {
        return Promise.resolve(this.Repo.POSTS);
    }

    // Simulate load time
    getPostsSlowly() {
        return new Promise<Post[]>(resolve =>
            setTimeout(() => resolve(this.Repo.POSTS), 2000) // 2 seconds
        );
    }

    getPost(name: string) {
        return Promise.resolve(this.Repo.POSTS).then(
            posts => posts.filter(post => post.name === name)[0]
        );
    }

    getPost2(name: string) {
        return this.Repo.POSTS.filter(post => post.name === name)[0];
    }
}