import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnChanges, OnInit {
  @Input() pUserName: string = '';

  constructor() {
    console.log(
      "This is called when component is created. Keep it simple. Don't access DOM."
    );
  }

  ngOnInit() {
    console.log(
      'This is called only once after component is Initiated in the entire component LifeCycle. Used for API calls.'
    );
  }

  ngOnChanges() {
    console.log('Some Change was detected');
  }
}
