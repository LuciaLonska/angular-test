import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Comment} from './comment.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() comments: Comment[];
  @Output() onLinkClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {

  }

}
