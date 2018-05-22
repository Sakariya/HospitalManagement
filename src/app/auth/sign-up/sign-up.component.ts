import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public loading = false;
  public krishna = 'hi';
  model: any = {
  };
  uploadedImage;

  constructor() {
  }

  public myFunc() {
    console.log('in clickdone');
    this.loading = true;
    setTimeout(() => { this.loading = false; }, 4000);
    this.krishna = 'krishna';
  }

  ngOnInit() {
    this.model.Gender = 'male';
  }

  register() {
    console.log(this.model);
  }

  calculateAge(dob) {
    console.log(dob);
    const diffMs = Date.now() - dob.getTime();
    const age_dt = new Date(diffMs);

    this.model.age = (Math.abs(age_dt.getUTCFullYear() - 1970));

  }

  uploadeImage(event) {
    console.log('File Output upload image:', event);
    this.uploadedImage = event;
}

}
