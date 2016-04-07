System.register(['angular2/core', '../../model/mock.posts'], function(exports_1, context_1) {
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
    var core_1, mock_posts_1;
    var PostService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_posts_1_1) {
                mock_posts_1 = mock_posts_1_1;
            }],
        execute: function() {
            PostService = (function () {
                function PostService() {
                }
                PostService.prototype.getPosts = function () {
                    return Promise.resolve(mock_posts_1.POSTS);
                };
                // Simulate load time
                PostService.prototype.getPostsSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_posts_1.POSTS); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                PostService.prototype.getPost = function (name) {
                    return Promise.resolve(mock_posts_1.POSTS).then(function (posts) { return posts.filter(function (post) { return post.name === name; })[0]; });
                };
                PostService.prototype.getPost2 = function (name) {
                    return mock_posts_1.POSTS.filter(function (post) { return post.name === name; })[0];
                };
                PostService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PostService);
                return PostService;
            }());
            exports_1("PostService", PostService);
        }
    }
});
//# sourceMappingURL=posts.service.js.map