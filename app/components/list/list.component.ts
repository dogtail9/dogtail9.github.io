import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Post } from '../../model/post';
import { PostService } from '../../services/posts/posts.service';
import { MarkdownComponent } from '../../components/markdown/markdown.component';

@Component({
    selector: 'my-list',
    templateUrl: 'app/components/list/list.component.html',
    styleUrls: ['app/components/list/list.component.css'],
    directives:[ MarkdownComponent ]
})
export class ListComponent implements OnInit {
    posts: Post[] = [];

    constructor(private _router: Router, private _postService: PostService) {

    }

    ngOnInit() {
        this._postService.getPosts().then(posts => this.posts = posts);
    }

    gotoDetail(post: Post) {
        let link = ['Post', { name: post.name }];
        this._router.navigate(link);
    }
}