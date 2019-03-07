import {Component, OnInit} from '@angular/core';
import {Post} from './post.model';
import {PostsService} from '../posts.service';
import {Comment} from './comments/comment.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  baseUrl: string = 'https://jsonplaceholder.typicode.com'
  posts: Post[] = [];
  postsService: PostsService = null;
  private toggle : boolean = false;

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
      this.toggle != this.toggle;
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
