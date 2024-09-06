import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts-list',
  standalone: true,
  imports: [NgClass],
  templateUrl: './posts-list.component.html',
  styleUrl: './posts-list.component.css',
})
export class PostsListComponent {
  @Input() user: string = '';
}
