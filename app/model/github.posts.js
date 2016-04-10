System.register(['./post'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var post_1;
    var GitHubRepo;
    return {
        setters:[
            function (post_1_1) {
                post_1 = post_1_1;
            }],
        execute: function() {
            GitHubRepo = (function () {
                function GitHubRepo() {
                    var _this = this;
                    var tposts = this.GetPosts();
                    this.POSTS = new Array();
                    var client = new XMLHttpRequest();
                    tposts.forEach(function (post) {
                        client.open("GET", 'posts/' + post + '.md', false);
                        client.send();
                        if (client.readyState == 4 && client.status == 200) {
                            var newPost = new post_1.Post();
                            newPost.name = post;
                            newPost.markdown = client.responseText;
                            _this.POSTS.push(newPost);
                        }
                    });
                    client.open("GET", 'posts/about.md', false);
                    client.send();
                    if (client.readyState == 4 && client.status == 200) {
                        var newPost = new post_1.Post();
                        newPost.name = "about";
                        newPost.markdown = client.responseText;
                        this.ABOUT = newPost;
                    }
                }
                GitHubRepo.prototype.GetPosts = function () {
                    var client = new XMLHttpRequest();
                    client.open("GET", "posts.json", false);
                    client.send();
                    if (client.readyState == 4 && client.status == 200) {
                        var myArr = JSON.parse(client.responseText);
                    }
                    this.BRAND = myArr.brand;
                    return myArr.posts;
                };
                return GitHubRepo;
            }());
            exports_1("GitHubRepo", GitHubRepo);
        }
    }
});
//# sourceMappingURL=github.posts.js.map