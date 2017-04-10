import { Component, OnInit } from '@angular/core';
import {OAuth, DataService} from 'forcejs';

@Component({
  selector: 'app-add-products',
  templateUrl: './sf-js.component.html',
  styleUrls: ['./sf-js.component.css']
})

export class CallbackComponent implements OnInit {

  constructor() {
    
    let loadContacts = () => {
      let service = DataService.getInstance();
      service.query('select id, Name from contact LIMIT 50')
        .then(response => {
          let contacts = response.records;
          // do something with contacts
          console.log(contacts.length);
        });
    }
  }

  ngOnInit() {
  }

}
