import { Component, OnInit } from '@angular/core';
import { Post } from '../../post.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comments-btn',
  templateUrl: './comments-btn.component.html',
  styleUrls: ['./comments-btn.component.css']
})
export class ComentsComponent implements OnInit {

  baseUrl: string = 'https://jsonplaceholder.typicode.com'
  posts: Post[] = [];
  httpClient: HttpClient = null;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient
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

  ngOnInit() {
  }

}
