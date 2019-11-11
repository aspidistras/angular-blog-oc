import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() date: Date;
  @Input() loveIts: number;
  @Input() index: number;

  constructor( private postService: PostService) { }

  ngOnInit() {
  }

  onLove() {
    this.postService.loveIt(this.index);
  }

  onDontLove() {
    this.postService.dontLoveIt(this.index);
  }

  onDelete() {
    this.postService.deletePost(this.index);
  }
}