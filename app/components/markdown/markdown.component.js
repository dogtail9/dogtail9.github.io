System.register(['angular2/core', '../../model/post'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, post_1;
    var MarkdownComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_1_1) {
                post_1 = post_1_1;
            }],
        execute: function() {
            MarkdownComponent = (function () {
                function MarkdownComponent() {
                }
                MarkdownComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var md = this.post.markdown;
                    this.convertToMarkdown(md).then(function (text) { return _this.markdownHtml = text; });
                };
                MarkdownComponent.prototype.convertToMarkdown = function (md) {
                    return Promise.resolve(marked(md, {
                        highlight: function (code) {
                            return hljs.highlightAuto(code).value;
                        }
                    }));
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', post_1.Post)
                ], MarkdownComponent.prototype, "post", void 0);
                MarkdownComponent = __decorate([
                    core_1.Component({
                        selector: 'my-markdown',
                        templateUrl: 'app/components/markdown/markdown.component.html',
                        styleUrls: ['app/components/markdown/markdown.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MarkdownComponent);
                return MarkdownComponent;
            }());
            exports_1("MarkdownComponent", MarkdownComponent);
        }
    }
});
//# sourceMappingURL=markdown.component.js.map