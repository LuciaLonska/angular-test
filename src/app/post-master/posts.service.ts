import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from './post/post.model';
import {Comment} from './post/comments/comment.model';
import {map} from 'rxjs/operators';
import { element } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  baseUrl: string = 'https://jsonplaceholder.typicode.com'
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  // Uses http.get() to load data from a single API endpoint
  deletePost(postId: string) {
    return this.httpClient.delete(this.baseUrl + '/posts/' + postId)
  }

  getPosts(from: number, to: number) {
    return this.httpClient.get(this.baseUrl + '/posts')
    .pipe(
      map((jsondata: any[]) =>
        jsondata
        .slice(from, to)
        .map(element => {
          return new Post(element.userId, element.id, element.title, element.body, []);
        })
      )
    )
  };

  getComments(postId: string) {
    return this.httpClient.get(this.baseUrl + '/posts/' + postId + '/comments')
    .pipe(
      map((jsondata: any[]) =>
        jsondata
        .map(element =>{
          return new Comment('Fero','koment1245')
        })
      )
    )
  };



}
