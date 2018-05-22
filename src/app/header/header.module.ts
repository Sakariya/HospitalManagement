import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { TokenStorage } from '../shared/token.storage';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

// import ngx-translate and the http loader
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HeaderRoutingModule,
    TranslateModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  providers: [TokenStorage]
})
export class HeaderModule { }

// required for AOT compilation

