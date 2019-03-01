import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  baseUrl: string = 'https://jsonplaceholder.typicode.com'
  posts: Post[] = [];
  httpClient: HttpClient = null;

  constructor(httpClie: HttpClient) {
    this.httpClient = httpClie
    this.get_products()
  }

  delete_post(postId: string){
     this.httpClient
     .delete(this.baseUrl + '/posts/' + postId)
    .subscribe((response: any) => {
      this.posts = this.posts.filter(r => r.id != postId)
    })
  }

  update_post(id:string, body:string, title:string){
    console.log('POST WAS EDITED')
  }

  download_comments(id:string){
    this.httpClient
    .get(this.baseUrl + '/posts/' + id + '/comments')
    .subscribe((jsondata: any[])=>{
      const post = this.posts.find(p => p.id == id)
      const updatedPost = new Post(post.userId,post.id,post.title,post.body, ['cffgh', 'jhsgaxh', 'hshh'])
      const posts =  this.posts.filter(p => p != post)
            posts.push(updatedPost)
      this.posts = posts.sort((a,b) => parseInt(a.id) - parseInt(b.id))

    })

  }


  get_products(){
    this.httpClient
    .get(this.baseUrl + '/posts')
    .subscribe((jsondata: any[])=>{
      const post: Post[] =
        jsondata
        .slice(0,10)
        .map(element => {return new Post(element.userId, element.id, element.title, element.body, []);})

      this.posts = post;
    });
  }

  ngOnInit() {
  }

}
