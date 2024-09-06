import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css',
})
export class HeaderComponentComponent {
  topics: Array<string> = [
    'If else',
    'Data Binding',
    'Class Binding',
    'Class Binding',
    'Style Binding',
    'for',
    'switch',
  ];

  msg: string = '';
  topic: string = '';
  delete(index: number): void {
    this.topics.splice(index, 1);
  }

  add() {
    if (
      this.topic == null ||
      this.topic == undefined ||
      this.topic.trim() == ''
    ) {
      this.msg = 'Enter a valid topic to add';
    } else {
      if (this.topics.indexOf(this.topic) != -1) {
        this.msg = 'Topic is already present. add new topic';
      } else {
        this.topics.push(this.topic.trim());
        this.msg = 'Topic added';
      }
    }
  }
}
