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



  ngOnInit() {
  }

}
