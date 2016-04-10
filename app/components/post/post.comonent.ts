import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Post } from '../../model/post';
import { PostService } from '../../services/posts/posts.service';
import { MarkdownComponent } from '../../components/markdown/markdown.component';

@Component({
    selector: 'my-post',
    templateUrl: 'app/components/post/post.comonent.html',
    //styleUrls: ['app/components/post/post.comonent.css'],
    directives: [MarkdownComponent]
})
export class PostComponent implements OnInit {
    @Input() post: Post;

    constructor(
        private _postService: PostService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let name = this._routeParams.get('name');
        if (name === "about") {
            this._postService.getAbout().then(post => this.post = post);
        } else {
            this._postService.getPost(name).then(post => this.post = post);
        }
    }

    goBack() {
        window.history.back();
    }
}