import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../services/post-service.service';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [NgClass, NgIf, NgStyle],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
})
export class PostsListComponent {
  @Input() user: string = '';
  @Input() postLists: Post[] = [];
  @Output() UserMessage = new EventEmitter();

  currentMessage: string = "Hi! Parent, I'm your child!";
  secretMessage: string = 'Secret Message to Parent Component';

  sendMessage(): void {
    this.UserMessage.emit(this.currentMessage);
  }
}
