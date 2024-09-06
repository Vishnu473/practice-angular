import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';

  isLoggedIn: boolean = true; //hard-coded for further navigation
  userName: string = 'Vishnu Kishore'; //hard-coded for further navigation in websitet
  stillStudent: boolean = false; //hard-coded for further navigation to header-component

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
    if (this.profession.trim().toLowerCase() == 'student') {
      this.stillStudent = true;
    }
    console.log(this.userName != undefined);
  }
}
