import { Injectable } from '@angular/core';
import { AuthService } from '../auth/service/auth.service';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class SingleDataResolver implements Resolve<any> {
  constructor(private authservice: AuthService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.authservice.oneUser(route.paramMap.get('id'));
  }
}
