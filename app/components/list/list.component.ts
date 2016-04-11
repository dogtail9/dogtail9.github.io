import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Post } from '../../model/post';
import { RepoService } from '../../services/posts/repo.service';
import { MarkdownComponent } from '../../components/markdown/markdown.component';

@Component({
    selector: 'my-list',
    templateUrl: 'app/components/list/list.component.html',
    styleUrls: ['app/components/list/list.component.css'],
    directives: [MarkdownComponent]
})
export class ListComponent implements OnInit {
    posts: Post[] = [];

    constructor(private _router: Router, private _repoService: RepoService) { }

    ngOnInit() {
        this._repoService.getConfig().subscribe((config) => {
            this.posts = this._repoService.getPosts(config);
        });
        
        this.posts = this.posts.sort((n1, n2) => {
                    if (n1 > n2) {
                        return -1;
                    }

                    if (n1 < n2) {
                        return 1;
                    }

                    return 0;
                });
    }

    gotoDetail(post: Post) {
        let link = ['Post', { name: post.name }];
        this._router.navigate(link);
    }
}