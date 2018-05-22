import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { DataComponent } from './auth/data/data.component';
import { DataSingleUserComponent } from './auth/data-single-user/data-single-user.component';
const appRoutes: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: SignInComponent },
  { path: 'data', component: DataComponent },
  { path: 'data/:id', component: DataSingleUserComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
