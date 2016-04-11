
import { Http } from 'angular2/http';
import {Injectable} from 'angular2/core';
import {blogConfig} from '../../model/blogConfig';
import {Post} from '../../model/post';
import 'rxjs/Rx';

@Injectable()
export class RepoService {

    constructor(public http: Http) {
        console.log('Task Service created.', http);
    }

    getConfig() {
        return this.http.get('posts.json')
            .map((responseData) => { return responseData.json(); })
            .map((config) => {
                let result: blogConfig = new blogConfig();
                result.brand = config.brand;
                result.posts = new Array<string>();
                config.posts.forEach((post) => {
                    result.posts.push(post);
                });
                return result;
            });
    }

    getPosts(config: blogConfig) {
        var posts = new Array<Post>();

        config.posts.forEach((post) => {
            this.getPost(post).subscribe((p) => {
                posts.push(p);
                posts = posts.sort((n1, n2) => {
                    if (n1 > n2) {
                        return -1;
                    }

                    if (n1 < n2) {
                        return 1;
                    }

                    return 0;
                });
            });
        });

        return posts;
    }

    getPost(name: string) {
        return this.http.get('posts/' + name + '.md')
            .map((responseData) => { return responseData.text(); })
            .map((markdown) => {
                var post = new Post();
                post.name = name;
                post.markdown = markdown;

                return post;
            });
    }
}