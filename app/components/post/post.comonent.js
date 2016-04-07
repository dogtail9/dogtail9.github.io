System.register(['angular2/core', 'angular2/router', '../../model/post', '../../services/posts/posts.service', '../../components/markdown/markdown.component'], function(exports_1, context_1) {
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
    var core_1, router_1, post_1, posts_service_1, markdown_component_1;
    var PostComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (post_1_1) {
                post_1 = post_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (markdown_component_1_1) {
                markdown_component_1 = markdown_component_1_1;
            }],
        execute: function() {
            PostComponent = (function () {
                function PostComponent(_postService, _routeParams) {
                    this._postService = _postService;
                    this._routeParams = _routeParams;
                }
                PostComponent.prototype.ngOnInit = function () {
                    var name = this._routeParams.get('name');
                    this.post = this._postService.getPost2(name);
                    //this._postService.getPost("post2").then(hero => this.post = hero);
                    //this._postService.getHero(name).then(post => this.post = post);
                    //this._postService.getPost(1).then(post => this.post = post);
                    //this._postService.getPost(name).then(post => this.post = post);
                    //this.post = { "name": "postq", "markdown": "# Post q" };
                };
                PostComponent.prototype.goBack = function () {
                    window.history.back();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', post_1.Post)
                ], PostComponent.prototype, "post", void 0);
                PostComponent = __decorate([
                    core_1.Component({
                        selector: 'my-post',
                        templateUrl: 'app/components/post/post.comonent.html',
                        //styleUrls: ['app/components/post/post.comonent.css'],
                        directives: [markdown_component_1.MarkdownComponent]
                    }), 
                    __metadata('design:paramtypes', [posts_service_1.PostService, router_1.RouteParams])
                ], PostComponent);
                return PostComponent;
            }());
            exports_1("PostComponent", PostComponent);
        }
    }
});
//# sourceMappingURL=post.comonent.js.map