import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { DataComponent } from './auth/data/data.component';
import { DataSingleUserComponent } from './auth/data-single-user/data-single-user.component';
import { authRoots } from './auth/auth.routes';
import { AuthGuard } from './shared/auth-guard.service';
import { NoAuthGuard } from './shared/noauth-guard.service';
import { DataResolver } from './shared/DataResolver';

export const appRoot: Routes = [
    { path: 'signup', component: SignUpComponent, canActivate: [NoAuthGuard] },
    { path: 'login', component: SignInComponent,  canActivate: [NoAuthGuard] },
    { path: 'data', component: DataComponent, children: authRoots ,  canActivate: [AuthGuard], resolve: { message: DataResolver } },
    // { path: 'data', component: DataComponent, children: authRoots ,  canActivate: [AuthGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login' }
];
