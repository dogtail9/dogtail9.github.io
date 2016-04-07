import { Component, Input, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

//import * as marked from 'marked';

import { Post } from '../../model/post';

@Component({
    selector: 'my-markdown',
    templateUrl: 'app/components/markdown/markdown.component.html',
    //styleUrls: ['app/components/list/list.component.css']
})
export class MarkdownComponent implements OnInit {
    @Input() post: Post;
    markdownHtml: string;

    ngOnInit() {
        var md = this.post.markdown;
        console.log(md);
        this.markdownHtml = this.convertToMarkdown(md);
    }

    convertToMarkdown(md: string) {
        return marked(md, {
            highlight: function (code) {
                return hljs.highlightAuto(code).value;
            }
        })
    }
}