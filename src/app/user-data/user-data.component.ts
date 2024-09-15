import { Component } from '@angular/core';
import { UserDataService } from '../services/UserData/user-data.service';
import { UserData } from '../models/UserData/user-data';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [PercentPipe],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css',
})
export class UserDataComponent {
  userDataList: Array<UserData> = [];

  constructor(private userDataServiceDI: UserDataService) {
    this.userDataList = userDataServiceDI.getUserData();
  }

  userData: UserData = {
    userName: 'Ganga',
    education: 'M.Tech (Web Development)',
    skills: [
      { name: 'Angular', proficiency: 100 },
      { name: 'React', proficiency: 95 },
    ],
    experience: 10.8,
  };

  addUser(): void {
    this.userDataServiceDI.addUserData(this.userData);
  }
}
