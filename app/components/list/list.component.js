System.register(['angular2/core', 'angular2/router', '../../services/posts/posts.service', '../../components/markdown/markdown.component'], function(exports_1, context_1) {
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
    var core_1, router_1, posts_service_1, markdown_component_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (posts_service_1_1) {
                posts_service_1 = posts_service_1_1;
            },
            function (markdown_component_1_1) {
                markdown_component_1 = markdown_component_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent(_router, _postService) {
                    this._router = _router;
                    this._postService = _postService;
                    this.posts = [];
                }
                ListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._postService.getPosts().then(function (posts) { return _this.posts = posts; });
                };
                ListComponent.prototype.gotoDetail = function (post) {
                    var link = ['Post', { name: post.name }];
                    this._router.navigate(link);
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'my-list',
                        templateUrl: 'app/components/list/list.component.html',
                        //styleUrls: ['app/components/list/list.component.css'],
                        directives: [markdown_component_1.MarkdownComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, posts_service_1.PostService])
                ], ListComponent);
                return ListComponent;
            }());
            exports_1("ListComponent", ListComponent);
        }
    }
});
//# sourceMappingURL=list.component.js.map