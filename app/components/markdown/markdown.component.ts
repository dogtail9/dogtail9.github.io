import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

//import * as marked from 'marked';

import { Post } from '../../model/post';

@Component({
    selector: 'my-markdown',
    templateUrl: 'app/components/markdown/markdown.component.html',
    styleUrls: ['app/components/markdown/markdown.component.css']
})
export class MarkdownComponent implements OnInit {
    @Input() post: Post;
    markdownHtml: string;

    ngOnInit() {
        var md = this.post.markdown;
        this.convertToMarkdown(md).then(text => this.markdownHtml = text);
    }

    convertToMarkdown(md: string) {
        return Promise.resolve(
            marked(md, {
                highlight: function (code) {
                    return hljs.highlightAuto(code).value;
                }
            }));
    }
}