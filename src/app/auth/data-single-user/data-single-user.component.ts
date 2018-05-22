import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/index';
import { Response } from '@angular/http/src/static_response';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRouteSnapshot } from '@angular/router';
@Component({
  selector: 'app-data-single-user',
  templateUrl: './data-single-user.component.html',
  styleUrls: ['./data-single-user.component.scss']
})
export class DataSingleUserComponent implements OnInit {

  id: number;
  private sub: any;

  myData: any = [];
  loading = false;

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    console.log(' in data-single-user.component.html ');
    // this.myData = this.route.snapshot.data.message;
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
      this.loading = true;

      this.authService.oneUser(this.id)
        .subscribe(res => {
          console.log('response ==> ', res);
          this.myData = res.data;
          this.loading = false;
        },
        (errorResponse) => {
          this.loading = false;
        }
        );

    });


  }



}
