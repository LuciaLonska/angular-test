import { Component, OnInit, Input } from '@angular/core';
import {Post} from './post/post.model';
import {PostsService} from './posts.service';


@Component({
  selector: 'app-post-master',
  templateUrl: './post-master.component.html',
  styleUrls: ['./post-master.component.css']
})
export class PostMasterComponent implements OnInit {

  postsService: PostsService = null;

  @Input() posts: Post[] = [];

  constructor() { }

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
