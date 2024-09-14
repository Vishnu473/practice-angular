import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnChanges, OnInit, DoCheck {
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
    console.log('Some Change was detected related to Input Property');
  }

  ngDoCheck() {
    console.log(
      'This was trigerred everytime the change detection runs related to Input Property as well. It calls for the first time when the component is loaded also.'
    );
  }
}
