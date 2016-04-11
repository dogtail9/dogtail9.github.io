import { Component, provide } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { Router } from 'angular2/router';

import { RepoService } from '../../services/posts/repo.service';
import { PostComponent } from '../post/post.comonent';
import { ListComponent } from '../list/list.component';
import { Post } from '../../model/post';

@Component({
  selector: 'my-routes',
  templateUrl: 'app/components/route/route.component.html',
  //styleUrls: ['app/components/route/route.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    RepoService]
})
@RouteConfig([
  {
    path: '/:name',
    name: 'Post',
    component: PostComponent
  },
  {
    path: '/',
    name: 'Blog',
    component: ListComponent,
    useAsDefault: true
  }])
export class RouteComponent {
  title: string;

  constructor(private _repoService: RepoService, private _router: Router) {
    this._repoService.getConfig().subscribe(config => this.title = config.brand);
  }

  gotoAbout() {
    let link = ['Post', { name: "about" }];
    this._router.navigate(link);
  }
}