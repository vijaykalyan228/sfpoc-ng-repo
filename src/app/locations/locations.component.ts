import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {MdTabsModule} from '@angular/material';
import {SharedService} from '../shared-service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  constructor(
    private _sharedService: SharedService
  ) { }

  ngOnInit() {
    this._sharedService.emitChange('Data from child');
  }
}
