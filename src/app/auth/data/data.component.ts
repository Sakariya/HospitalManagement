import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/index';
import { Response } from '@angular/http/src/static_response';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  myData: any = [];
  loading = false;

  constructor(private authService: AuthService, private spinner: NgxSpinnerService, private route: ActivatedRoute) { }

  ngOnInit() {
    //  this.showdata();
    this.myData = this.route.snapshot.data.message;
  }

  // public showdata() {
  //   this.spinner.show();
  //   this.authService.showinfo()
  //     .subscribe(res => {
  //       console.log('response ==> ', res);
  //       this.myData = res.data;
  //       this.spinner.hide();
  //     },
  //     (errorResponse) => {
  //       this.spinner.hide();
  //     }
  //     );
  // }


}
