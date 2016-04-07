import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { PostService } from '../../services/posts/posts.service';
import { PostComponent } from '../post/post.comonent';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'my-routes',
  templateUrl: 'app/components/route/route.component.html',
  //styleUrls: ['app/components/route/route.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, PostService]
})
@RouteConfig([
  {
    path: '/post/:name',
    name: 'Post',
    component: PostComponent
  },
  {
    path: '/blog',
    name: 'Blog',
    component: ListComponent,
    useAsDefault: true
  }])
export class RouteComponent {
  title = 'My Blog';
}