import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  //count = signal<number>(0);
  count = signal(0);
  //messages = signal<string[]>([]);
  messages = signal<string[]>([]);

  increment() {
    this.count.update((prev) => prev + 1);
    //const newMessage = this.messages.update((values) => return [...values, newMessage]);
  }

  decrement() {
    this.count.update((prev) => prev - 1);
  }
}
