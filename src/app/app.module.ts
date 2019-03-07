import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './post-master/post/post.component';

import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PostMasterComponent } from './post-master/post-master.component';
import { CommentsComponent } from './post-master/post/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    BlogComponent,
    ContactComponent,
    CommentsComponent,
    PostMasterComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
