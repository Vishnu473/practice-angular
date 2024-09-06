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
    'Style Binding',
    'for',
    'switch',
  ];

  msg: string = '';
  topic: string = '';
  isadded: boolean = true;

  delete(index: number): void {
    console.log(this.topics.at(index));
    this.msg = this.topics.at(index) + ' is deleted.';
    this.topics.splice(index, 1);
    this.isadded = false;
    console.log(
      this.topic.length < 1 || (this.topics.length == 0 && !this.isadded)
    );
  }

  add() {
    if (
      this.topic == null ||
      this.topic == undefined ||
      this.topic.trim() == ''
    ) {
      this.msg = 'Enter a valid topic to add';
      this.isadded = false;
    } else {
      if (this.topics.indexOf(this.topic) != -1) {
        this.msg = 'Topic is already present. add new topic';
        this.topic = '';
        this.isadded = false;
      } else {
        this.topics.push(this.topic.trim());
        this.msg = 'Topic ' + this.topic + ' added';
        this.isadded = true;
        this.topic = '';
      }
    }
  }
}
