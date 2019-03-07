import { Component, OnInit, Input } from '@angular/core';
import {Post} from './post/post.model';

@Component({
  selector: 'app-post-master',
  templateUrl: './post-master.component.html',
  styleUrls: ['./post-master.component.css']
})
export class PostMasterComponent implements OnInit {

  @Input() posts: Post[] = [];

  constructor() { }

  ngOnInit() {
  }

}
