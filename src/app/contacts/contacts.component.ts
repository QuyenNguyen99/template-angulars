import { Component, OnInit } from '@angular/core';
import { data } from 'app/data';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  newTieude = '';
  newParent = '';
  arrContent: any = [];
  constructor() { }

  ngOnInit() {
    // this.arrContent = data.list_contact;
    this.arrContent = JSON.parse(localStorage.getItem('data'));
  }

  removeContact(id: number) {
    const index = this.arrContent.findIndex(contact => contact.id === id);
    this.arrContent.splice(index,1);
  }

}
