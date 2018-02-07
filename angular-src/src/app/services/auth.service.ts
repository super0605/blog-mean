import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  authToken: any;
  user: any;
  // Server Address
  serverAddress: string;

  constructor(
    private http: Http,
    private flashMessagesService: FlashMessagesService,
  ) {
    this.serverAddress = 'localhost:4200';
  }

  registerUser(user) {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://' + this.serverAddress + '/users/register', user, {headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user) {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://' + this.serverAddress + '/users/authenticate', user, {headers: headers})
      .map(res => res.json());
  }

  storeUserInfo(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  userLogout() {
    this.authToken = null;
    this.user = null;
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
  }

  authProfile(user) {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://' + this.serverAddress + '/users/profile', user, {headers: headers})
      .map(res => res.json());
  }

  getToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    return user;
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  authUsername(user) {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://' + this.serverAddress + '/users/forgotPassword/username', user, {headers: headers})
      .map(res => res.json());
  }

  changePassword(user) {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://' + this.serverAddress + '/users/forgotPassword/answer', user, {headers: headers})
      .map(res => res.json());
  }

  handleError(error: any) {
    this.flashMessagesService.show(error.statusText || "Server Error. Contact admin if error persists", { cssClass: 'alert-danger', timeout: 2500 });
  }
}
