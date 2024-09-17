import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserDetails } from '../models/details/user-details';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  username: string = '';
  user!: UserDetails;
  @ViewChild('registrationform') form!: NgForm;

  generateUserName() {
    let firstName = this.form.value.firstname;
    let lastName = this.form.value.lastname;
    let date = new Date(this.form.value.dob);

    this.username =
      firstName.slice(0, 3) + lastName.slice(0, 3) + date.getFullYear();
    console.log(this.username);

    this.form.form.patchValue({
      username: this.username,
    });
  }

  onFormSubmitted() {
    this.user = this.form.value;
    console.log(this.form.value);

    console.log(this.user);
  }
}
