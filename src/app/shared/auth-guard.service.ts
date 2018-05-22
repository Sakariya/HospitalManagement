import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { TokenStorage } from './token.storage';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private token: TokenStorage, private router: Router) { }
    canActivate() {
        if (this.token.exists()) {
            return true;
        } else {
            this.router.navigate(['']);
        }
    }

    canActivateChild() {
        if (this.token.exists()) {
            return true;
        } else {
            this.router.navigate(['']);
        }
    }
}
