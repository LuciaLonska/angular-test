import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';

import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DeleteBtnComponent } from './posts/delete-btn/delete-btn.component';
import { EditBtnComponent } from './posts/edit-btn/edit-btn.component';
import { ComentsComponent } from './posts/coments/comments-btn/comments-btn.component';
import { CommentsToggleComponent } from './posts/coments/comments-toggle/comments-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    BlogComponent,
    ContactComponent,
    DeleteBtnComponent,
    EditBtnComponent,
    ComentsComponent,
    CommentsToggleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
