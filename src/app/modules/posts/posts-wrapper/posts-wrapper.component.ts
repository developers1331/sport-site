import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-wrapper',
  templateUrl: './posts-wrapper.component.html',
  styleUrls: ['./posts-wrapper.component.scss'],
})
export class PostsWrapperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('todo');
  }
}
