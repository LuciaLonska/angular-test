import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { Post } from './posts/post.model';

@Injectable()
export class PostsService {

 baseUrl: string = 'https://jsonplaceholder.typicode.com'
 httpClient: HttpClient;

 constructor(httpClient:HttpClient) {
   this.httpClient = httpClient;
 }

   // Uses http.get() to load data from a single API endpoint
   deletePost(postId: string) {
    return this.httpClient.delete(this.baseUrl + '/posts/' + postId)
   }

   getPosts(from: number, to: number){
    this.httpClient
    .get(this.baseUrl + '/posts')
    .map((jsondata: any[]) =>
        jsondata
        .slice(from, to)
        .map(element => {return new Post(element.userId, element.id, element.title, element.body, []);})
  )};

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

}
