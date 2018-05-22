import { TokenStorage } from '../shared/token.storage';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  allow = false;
  constructor(private router: Router, public token: TokenStorage, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    console.log(this.token.exists());
  }

  useLanguage(language: string) {
    this.translate.use(language);
}

  logoutFunction() {
   this.token.signOut();
    this.router.navigate(['']);
  }

  }


