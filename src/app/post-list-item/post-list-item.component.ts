import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
	
  constructor() { }

  @Input() post: any = {};

  ngOnInit() {
  }

  onLove() {
    this.post.loveIts++;
  }
  onDontLove() {
    this.post.loveIts--;
  }

}
