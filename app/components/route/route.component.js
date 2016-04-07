System.register(['angular2/core', 'angular2/router', '../../services/posts/posts.service', '../post/post.comonent', '../list/list.component'], function(exports_1, context_1) {
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
    var core_1, router_1, posts_service_1, post_comonent_1, list_component_1;
    var RouteComponent;
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
            function (post_comonent_1_1) {
                post_comonent_1 = post_comonent_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            }],
        execute: function() {
            RouteComponent = (function () {
                function RouteComponent() {
                    this.title = 'My Blog';
                }
                RouteComponent = __decorate([
                    core_1.Component({
                        selector: 'my-routes',
                        templateUrl: 'app/components/route/route.component.html',
                        //styleUrls: ['app/components/route/route.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, posts_service_1.PostService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/post/:name',
                            name: 'Post',
                            component: post_comonent_1.PostComponent
                        },
                        {
                            path: '/blog',
                            name: 'Blog',
                            component: list_component_1.ListComponent,
                            useAsDefault: true
                        }]), 
                    __metadata('design:paramtypes', [])
                ], RouteComponent);
                return RouteComponent;
            }());
            exports_1("RouteComponent", RouteComponent);
        }
    }
});
//# sourceMappingURL=route.component.js.map