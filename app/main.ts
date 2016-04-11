import {bootstrap} from 'angular2/platform/browser';
import {RouteComponent} from './components/route/route.component';
import {HTTP_PROVIDERS} from 'angular2/http';

//import {ROUTER_PROVIDERS}  from 'angular2/router';
// Add these symbols to override the `LocationStrategy`
//import {provide}           from 'angular2/core';
//import {LocationStrategy,
//        HashLocationStrategy} from 'angular2/router';

bootstrap(RouteComponent, [HTTP_PROVIDERS]);