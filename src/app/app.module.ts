import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { appRoot } from './app.route';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './header/header.module';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { UiModule } from './ui/ui.module';
import { AuthGuard } from './shared/auth-guard.service';
import { NoAuthGuard } from './shared/noauth-guard.service';
import { DataResolver } from './shared/DataResolver';
import { SingleDataResolver } from './shared/SingleDataResolver';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AuthModule,
    HeaderModule,
    UiModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoot),
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  exports: [
    HeaderModule,
    UiModule
  ],
  providers: [
    AuthGuard,
    NoAuthGuard,
    DataResolver,
    SingleDataResolver
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
