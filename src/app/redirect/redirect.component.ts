import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css'],
})
export class RedirectComponent implements OnInit {
  opportunityId: Observable<string>;
  accountName: Observable<string>;
  accountId: Observable<string>;
  comment: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.opportunityId = this.route.queryParams.map(params => params['opportunityId'] || 'None');
    this.accountName = this.route.queryParams.map(params => params['accountName'] || 'None');
    this.accountId = this.route.queryParams.map(params => params['accountId'] || 'None');
  }

}
