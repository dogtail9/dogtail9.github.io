System.register(['angular2/platform/browser', './components/route/route.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, route_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (route_component_1_1) {
                route_component_1 = route_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(route_component_1.RouteComponent);
        }
    }
});
//# sourceMappingURL=main.js.map