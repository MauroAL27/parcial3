import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { LoadingController, AlertController } from "@ionic/angular";
import { FirestoreService } from "../../services/data/firestore.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create-person.page.html',
  styleUrls: ['./create-person.page.scss'],
})
export class CreatePersonPage implements OnInit {

  public createPersonForm: any;

  constructor(public lc: LoadingController,
    public ac: AlertController,
    public fs: FirestoreService,
    public fb: FormBuilder,
    public r: Router) {

    this.createPersonForm = fb.group({
      personName: ['', Validators.required],
      personLastname: ['', Validators.required],
      personEmail: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  async createPerson() {
    const loading = await this.lc.create();
    const personName = this.createPersonForm.value.personName;
    const personLastname = this.createPersonForm.value.personLastname;
    const personEmail = this.createPersonForm.value.personEmail;
    this.fs.createPerson(personName, personLastname, personEmail).then(
      () => {
        loading.dismiss().then(() => { this.r.navigateByUrl('/home'); });
      },
      error => {
        console.error(error);
      });
    return await loading.present();
  }
}
