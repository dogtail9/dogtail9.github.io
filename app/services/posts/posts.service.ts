import {Injectable} from 'angular2/core';

import {Post} from '../../model/post';
import {POSTS} from '../../model/mock.posts';

@Injectable()
export class PostService {
    getPosts() {
        return Promise.resolve(POSTS);
    }

    // Simulate load time
    getPostsSlowly() {
        return new Promise<Post[]>(resolve =>
            setTimeout(() => resolve(POSTS), 2000) // 2 seconds
        );
    }

    getPost(name: string) {
        return Promise.resolve(POSTS).then(
            posts => posts.filter(post => post.name === name)[0]
        );
    }

    getPost2(name: string) {
        return POSTS.filter(post => post.name === name)[0];
    }
}