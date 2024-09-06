import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';

  isLoggedIn: boolean = false;
  userName: string = '';
  profession: string = '';
  password: string = '';

  message: string = '';

  Login(): void {
    if (
      this.userName != null &&
      this.password != null &&
      this.userName != undefined &&
      this.password != undefined &&
      this.userName.trim() != '' &&
      this.password.trim() != ''
    ) {
      this.isLoggedIn = true;
      this.message = 'Hi! ' + this.userName + ", We Welcome's you.";
    } else {
      this.isLoggedIn = false;
      this.userName = this.password = this.profession = '';
      this.message = 'Both UserName and Password are required. Retry.';
    }
    console.log(this.userName != undefined);
  }
}
