import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  baseUrl: string = 'https://jsonplaceholder.typicode.com'
  posts: Post[] = [];
  postsService: PostsService = null;

  constructor(postsService: PostsService ) {
    this.postsService = postsService
  }

  delete_post(postId: string){
    this.postsService.deletePost(postId)
    .subscribe((response: any) => {
     this.posts = this.posts.filter((r) => {r.id != postId})
   })
 }

  update_post(id:string, body:string, title:string){
    console.log('POST WAS EDITED')
  }


  download_comments(id:string){
    this.httpClient
    .get(this.baseUrl + '/posts/' + id + '/comments')
    .subscribe((response: any[])=>{
      const post = this.posts.find(p => p.id == id)
      const updatedPost = new Post(post.userId,post.id,post.title,post.body, ['cffgh', 'jhsgaxh', 'hshh'])
      const posts =  this.posts.filter(p => p != post)
            posts.push(updatedPost)
      this.posts = posts.sort((a,b) => parseInt(a.id) - parseInt(b.id))

    })

  }

  show_comments(){

  }


  get_posts(){
    this.postsService
    .getPosts(0, 10)
    .subscribe( posts: Post[] => {
      this.posts = posts;
    });
  }

  ngOnInit() {
    this.get_posts()
  }

}
