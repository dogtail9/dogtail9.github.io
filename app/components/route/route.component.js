System.register(['angular2/core', 'angular2/router', '../../services/posts/repo.service', '../post/post.comonent', '../list/list.component', '../search/search.component'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, repo_service_1, post_comonent_1, list_component_1, search_component_1;
    var RouteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (repo_service_1_1) {
                repo_service_1 = repo_service_1_1;
            },
            function (post_comonent_1_1) {
                post_comonent_1 = post_comonent_1_1;
            },
            function (list_component_1_1) {
                list_component_1 = list_component_1_1;
            },
            function (search_component_1_1) {
                search_component_1 = search_component_1_1;
            }],
        execute: function() {
            RouteComponent = (function () {
                function RouteComponent(_repoService, _router) {
                    var _this = this;
                    this._repoService = _repoService;
                    this._router = _router;
                    this._repoService.getConfig().subscribe(function (config) { return _this.title = config.brand; });
                }
                RouteComponent.prototype.gotoAbout = function () {
                    var link = ['Post', { name: "about" }];
                    this._router.navigate(link);
                };
                RouteComponent = __decorate([
                    core_1.Component({
                        selector: 'my-routes',
                        templateUrl: 'app/components/route/route.component.html',
                        //styleUrls: ['app/components/route/route.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, search_component_1.SearchComponent],
                        providers: [router_1.ROUTER_PROVIDERS,
                            core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                            repo_service_1.RepoService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/:name',
                            name: 'Post',
                            component: post_comonent_1.PostComponent
                        },
                        {
                            path: '/',
                            name: 'Blog',
                            component: list_component_1.ListComponent,
                            useAsDefault: true
                        }]), 
                    __metadata('design:paramtypes', [repo_service_1.RepoService, router_2.Router])
                ], RouteComponent);
                return RouteComponent;
            }());
            exports_1("RouteComponent", RouteComponent);
        }
    }
});
//# sourceMappingURL=route.component.js.map