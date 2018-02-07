import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BlogService {

  serverAddress: String;
  token: any;

  constructor(
    private http: Http,
    private flashMessagesService: FlashMessagesService,
  ) {
     this.serverAddress = 'localhost:4200';
   }

   getBlogCount(blogInfo) {
     let headers = new Headers;
     headers.append('Content-Type', 'application/json');
     return this.http.post('http://' + this.serverAddress + '/blogs/countBlogs', blogInfo, {headers: headers})
       .map(res => res.json());
   }

  getBlogs(blogInfo) {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://' + this.serverAddress + '/blogs', blogInfo, {headers: headers})
      .map(res => res.json());
  }

  searchBlogs(blogObj) {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post('http://' + this.serverAddress + '/blogs/searchBlogs', blogObj, {headers: headers})
      .map(res => res.json());
  }

  getBlogById(blog) {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post('http://' + this.serverAddress + '/blogs/getBlogById', blog, {headers: headers})
      .map(res => res.json());
  }

  getBlogByUsername(user) {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://' + this.serverAddress + '/blogs/getBlogByUsername', user, {headers: headers})
      .map(res => res.json());
  }

  addBlog(blog) {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post('http://' + this.serverAddress + '/blogs/addBlog', blog, {headers: headers})
      .map(res => res.json());
  }

  editBlog(blog) {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post('http://' + this.serverAddress + '/blogs/editBlog', blog, {headers: headers})
      .map(res => res.json());
  }

  deleteBlog(blog) {
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    this.token = localStorage.getItem('id_token');
    headers.append('Authorization', this.token);
    return this.http.post('http://' + this.serverAddress + '/blogs/deleteBlog', blog, { headers: headers }).
    map(res => res.json());
  }

  handleError(error: any) {
    this.flashMessagesService.show(error.statusText || "Server Error. Contact admin if error persists", { cssClass: 'alert-danger', timeout: 2500 });
  }
}
