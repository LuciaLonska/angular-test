import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Post} from './post.model';
import {PostsService} from '../posts.service';

import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  baseUrl: string = 'https://jsonplaceholder.typicode.com'
  posts: Post[] = [];
  postsService: PostsService = null;
  private toggle : boolean = false;
  commentsVisible: boolean = false;

  @Output() commentClick: EventEmitter<void> = new EventEmitter<void>();
  @Input() post: Post;

  constructor(postsService: PostsService) {
    this.postsService = postsService
  }

  delete_post(postId: string) {
    this.postsService
    .deletePost(postId)
    .subscribe((response: any) => {
      this.posts = this.posts.filter((r) => {
        return r.id != postId
      })
    })
    console.log("clicked");
  }

  update_post(id: string, body: string, title: string) {
    console.log('POST WAS EDITED')
  }

  ngOnInit() {
  }

}
