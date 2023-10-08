import { Component } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blok-post',
  templateUrl: './blok-post.component.html',
  styleUrls: ['./blok-post.component.css'],
})
export class BlokPostComponent {
  number = 1;
  line = 'This is a line';
   email = '';

  blogposts;

  constructor(blogService: BlogService) {
    this.blogposts = blogService.getBlogPosts();
  }

  onClick(e: Event) {
    // console.log('Button Clicked',e);
    this.number++;
  }

  onDivClick() {
    this.line = 'This is a new line';
  }

  onSave() {
    console.log(this.email);
  }
}
