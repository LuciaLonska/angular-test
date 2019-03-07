import { Component, OnInit, Input } from '@angular/core';
import {Post} from './post/post.model';
import {PostsService} from './posts.service';
import {Comment} from './post/comments/comment.model';


@Component({
  selector: 'app-post-master',
  templateUrl: './post-master.component.html',
  styleUrls: ['./post-master.component.css']
})
export class PostMasterComponent implements OnInit {



  @Input() posts: Post[] = [];

  constructor(private postsService: PostsService) {

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
