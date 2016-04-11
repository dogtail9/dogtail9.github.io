System.register(['angular2/http', 'angular2/core', '../../model/blogConfig', '../../model/post', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var http_1, core_1, blogConfig_1, post_1;
    var RepoService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (blogConfig_1_1) {
                blogConfig_1 = blogConfig_1_1;
            },
            function (post_1_1) {
                post_1 = post_1_1;
            },
            function (_1) {}],
        execute: function() {
            RepoService = (function () {
                function RepoService(http) {
                    this.http = http;
                    console.log('Task Service created.', http);
                }
                RepoService.prototype.getConfig = function () {
                    return this.http.get('posts.json')
                        .map(function (responseData) { return responseData.json(); })
                        .map(function (config) {
                        var result = new blogConfig_1.blogConfig();
                        result.brand = config.brand;
                        result.posts = new Array();
                        config.posts.forEach(function (post) {
                            result.posts.push(post);
                        });
                        return result;
                    });
                };
                RepoService.prototype.getPosts = function (config) {
                    var _this = this;
                    var posts = new Array();
                    config.posts.forEach(function (post) {
                        _this.getPost(post).subscribe(function (p) {
                            posts.push(p);
                            posts = posts.sort(function (n1, n2) {
                                if (n1 > n2) {
                                    return -1;
                                }
                                if (n1 < n2) {
                                    return 1;
                                }
                                return 0;
                            });
                        });
                    });
                    return posts;
                };
                RepoService.prototype.getPost = function (name) {
                    return this.http.get('posts/' + name + '.md')
                        .map(function (responseData) { return responseData.text(); })
                        .map(function (markdown) {
                        var post = new post_1.Post();
                        post.name = name;
                        post.markdown = markdown;
                        return post;
                    });
                };
                RepoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], RepoService);
                return RepoService;
            }());
            exports_1("RepoService", RepoService);
        }
    }
});
//# sourceMappingURL=repo.service.js.map