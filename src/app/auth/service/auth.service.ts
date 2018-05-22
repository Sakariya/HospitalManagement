import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { error } from 'selenium-webdriver';
import { TokenStorage } from '../../shared/token.storage';

const API_URL = environment.apiUrl;

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private token: TokenStorage) { }

  addInfo(userData: any): Observable<String> {

    return this.http.post(API_URL + 'api/users', userData)
      .map((response: Response) => {
        console.log('----------------->', response);
        this.token.saveToken(response['createdAt'], false);
        // if (response['createdAt']) { window.localStorage.setItem('TOKEN_KEY', response['createdAt']); }
        return response;
      })
      .catch(this.handleError);
  }

  showinfo(): Observable<any> {

    return this.http.get(API_URL + 'api/users')
      .map((response: Response) => {
        console.log(response);
        return response;
      })
      .catch(this.handleError);

  }

  oneUser(id: any): Observable<any> {
    return this.http.get(API_URL + 'api/users/' + id)
      .map((response: Response) => {
        console.log(response);
        return response;
      })
      .catch(this.handleError);

  }

  private handleError(error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    return Observable.throw(error || 'Server error');
}

}
