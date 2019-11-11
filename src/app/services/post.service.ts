import { Post } from '../models/Post.model';
import { Subject } from 'rxjs/Subject';

export class PostService {

  postsSubject = new Subject<any[]>();

  private posts = [
    {
      index: 0,
      title: 'Mon premier post', 
      content: 'Ceci est mon premier post', 
      loveIts: 0, 
      created_at: new Date
    },
    {
      index: 1,
      title: 'Mon deuxième post', 
      content: 'Ceci est mon deuxième post', 
      loveIts: 0, 
      created_at: new Date
    },
    {
      index: 2,
      title: 'Mon troisième post', 
      content: 'Ceci est mon troisième post', 
      loveIts: 0, 
      created_at: new Date
    },
  ];

  emitPostsSubject() {
    this.postsSubject.next(this.posts.slice());
  }

  addNewPost(post: Post) {
    this.posts.push(post);
    this.emitPostsSubject();
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.emitPostsSubject();
  }

  loveIt(index: number) {
    this.posts[index].loveIts++;
    console.log(this.posts[index].title);
    console.log(`loveNumber: ${ this.posts[index].loveIts }`);
    this.emitPostsSubject();
  }

  dontLoveIt(index: number) {
    this.posts[index].loveIts--;
    console.log(this.posts[index].title);
    console.log(`loveNumber: ${ this.posts[index].loveIts }`);
    this.emitPostsSubject();
  }

}