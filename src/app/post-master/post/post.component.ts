import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Post} from './post.model';
import {PostsService} from '../posts.service';
import {Comment} from './comments/comment.model';
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
  }

  update_post(id: string, body: string, title: string) {
    console.log('POST WAS EDITED')
  }


  getComments(postId: string) {
    this.postsService
    .getComments(postId)
    .subscribe((response: Comment[])=>{
      let indexToUpdate = this.posts.findIndex((element: Post)=>{return element.id === postId })
      this.posts[indexToUpdate].comments = response
      /*this.commentsVisible = !this.commentsVisible;*/
    })
  }

  get_posts() {
    this.postsService
    .getPosts(0, 10)
    .subscribe((response: Post[]) => {
      this.posts = response;
    });
  }

  ngOnInit() {
    this.get_posts()
  }

}
