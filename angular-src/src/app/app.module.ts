import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';


import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthguardService } from'./services/authguard.service';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BlogService } from './services/blog.service';
import { UsersComponent } from './components/users/users.component';
import { WriteBlogComponent } from './components/write-blog/write-blog.component';
import { TinyEditorComponent } from './components/tiny-editor/tiny-editor.component';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { SearchComponent } from './components/search/search.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { CommentService } from './services/comment.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'writeBlog', component: WriteBlogComponent, canActivate: [AuthguardService] },
  { path: 'tiny', component: TinyEditorComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'editBlog', component: EditBlogComponent, canActivate: [AuthguardService] },
  { path: 'search', component: SearchComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    BlogsComponent,
    ForgotPasswordComponent,
    UsersComponent,
    WriteBlogComponent,
    TinyEditorComponent,
    BlogComponent,
    EditBlogComponent,
    SearchComponent,
    BlogListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
  ],
  providers: [ ValidateService, AuthService, AuthguardService, BlogService, CommentService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
