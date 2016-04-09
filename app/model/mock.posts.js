System.register(['./post'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var post_1;
    var MockRepo, testPost;
    return {
        setters:[
            function (post_1_1) {
                post_1 = post_1_1;
            }],
        execute: function() {
            MockRepo = (function () {
                function MockRepo() {
                    var _this = this;
                    var tposts = this.GetPosts();
                    this.POSTS = new Array();
                    tposts.forEach(function (post) {
                        var newPost = new post_1.Post();
                        newPost.name = post;
                        newPost.markdown = testPost;
                        _this.POSTS.push(newPost);
                    });
                }
                MockRepo.prototype.GetPosts = function () {
                    var myArr = { "posts": ["Post1", "Post2", "Post3", "Post4", "Post5"] };
                    return myArr.posts;
                };
                return MockRepo;
            }());
            exports_1("MockRepo", MockRepo);
            testPost = "\
# Markdown text goes in here \n\
\n\
## Chapter 1\n\
\n\
\n\
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore\n\
et dolore magna aliqua. \n\
\n\
## Chapter 2\n\
\n\
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n\
aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n\
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n\
culpa qui officia deserunt mollit anim id est laborum.\n\
\n\
## Chapter 3\n\
```cs\n\
public string Test()\n\
{\n\
    //Comment\n\
    int i = 0;\n\
    return string.Format(\"The number is {0}\", i);\n\
}\n\
```\n\
\n\
Förändrat med Visual Studio \"15\" Prevew\n\
";
        }
    }
});
//export var POSTS: Post[] = [
//    { "name": "1", "markdown": testPost },
//    { "name": "post2", "markdown": "### Post 2" },
//    { "name": "post3", "markdown": "# Post 3" },
//    { "name": "post4", "markdown": "# Post 4" },
//    { "name": "post5", "markdown": "# Post 5" }
//];
//# sourceMappingURL=mock.posts.js.map