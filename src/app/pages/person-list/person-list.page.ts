import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../services/data/firestore.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.page.html',
  styleUrls: ['./person-list.page.scss'],
})
export class PersonListPage implements OnInit {
  personList:any=[];
  constructor(private fservice:FirestoreService) { }

  ngOnInit() {
    this.personList = this.fservice.getPersonList().valueChanges();
    console.log(this.personList)
  }

}
