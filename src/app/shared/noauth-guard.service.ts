import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { TokenStorage } from './token.storage';
import { Router } from '@angular/router';

@Injectable()
export class NoAuthGuard implements CanActivate, CanActivateChild {

    constructor(private token: TokenStorage, private router: Router) { }
    canActivate() {
        if (this.token.exists()) {
            this.router.navigate(['data']);
        } else {
            return true;
        }
    }

    canActivateChild() {
        if (this.token.exists()) {
            this.router.navigate(['']);
        } else {
            return true;
        }
    }
}
