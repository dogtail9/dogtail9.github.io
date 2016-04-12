import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';

import { Search } from '../../model/search';

@Component({
    selector: "search-form",
    templateUrl: 'app/components/search/search.component.html',
    styleUrls: ['app/components/search/search.component.css']
})
export class SearchComponent {
    model = new Search();
    submitted = false;

    onSubmit() {
         this.submitted = true; 
        }
}