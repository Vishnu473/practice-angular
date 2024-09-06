import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [],
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

  delete(index: number): void {
    this.topics.splice(index, 1);
  }
}
