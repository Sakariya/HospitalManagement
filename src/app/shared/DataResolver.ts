import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/service/auth.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Injectable()
export class DataResolver implements Resolve<any> {
  constructor(private authservice: AuthService) {}

  resolve() {
    return this.authservice.showinfo().catch(() => {
        return Observable.of('data not available at this time');
      });
  }
}
