import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Post } from '../../model/post';
import { PostService } from '../../services/posts/posts.service';
import { MarkdownComponent } from '../../components/markdown/markdown.component';

@Component({
    selector: 'my-post',
    templateUrl: 'app/components/post/post.comonent.html',
    //styleUrls: ['app/components/post/post.comonent.css'],
    directives:[ MarkdownComponent ]
})
export class PostComponent implements OnInit {
    @Input() post: Post;

    constructor(
        private _postService: PostService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let name = this._routeParams.get('name');
        this.post = this._postService.getPost2(name);
        
        //this._postService.getPost("post2").then(hero => this.post = hero);
        
        //this._postService.getHero(name).then(post => this.post = post);
        //this._postService.getPost(1).then(post => this.post = post);
        //this._postService.getPost(name).then(post => this.post = post);
        //this.post = { "name": "postq", "markdown": "# Post q" };
    }

    goBack() {
        window.history.back();
    }
}