import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/index';
import { Response } from '@angular/http/src/static_response';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  model: any = {};
  userData: any = {};
  loading = false;
  successMsg = false;
  token: String = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    console.log(window.sessionStorage.getItem('TOKEN_KEY'));
  }

  public register() {
    const formdata = new FormData();
    this.userData = {
      'name': this.model.userName,
      'job': this.model.userJob
    };
    this.loading = true;
    this.authService.addInfo(this.userData)
      .subscribe(res => {
        console.log('response ==> ', res);
        this.loading = false;
        this.successMsg = true;
        this.token = window.sessionStorage.getItem('TOKEN_KEY');
        setTimeout(() => { this.successMsg = false; }, 2000);
        this.router.navigate(['data']);
      },
      (errorResponse) => {
        this.loading = false;
      }
      );

    console.log('data dict', this.userData);
    console.log('hi');
    console.log(formdata);  }




}
