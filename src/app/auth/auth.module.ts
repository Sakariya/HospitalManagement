import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderModule } from '../header/header.module';
import { AuthComponent } from './auth.component';
import { LoadingModule } from 'ngx-loading';
import { SimpleTimer } from 'ng2-simple-timer';
import { AuthService } from './service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataComponent } from './data/data.component';
import { DataSingleUserComponent } from './data-single-user/data-single-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { UiModule } from '../ui/ui.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { TokenStorage } from '../shared/token.storage';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    HeaderModule,
    LoadingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule,
    UiModule,
    NgxSpinnerModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  declarations: [SignUpComponent, SignInComponent, AuthComponent, DataComponent, DataSingleUserComponent],
  providers: [SimpleTimer, AuthService, TokenStorage]
})
export class AuthModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
