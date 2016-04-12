import {bootstrap} from 'angular2/platform/browser';
import {RouteComponent} from './components/route/route.component';
import {HTTP_PROVIDERS} from 'angular2/http';

bootstrap(RouteComponent, [HTTP_PROVIDERS]);