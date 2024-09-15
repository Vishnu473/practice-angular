import { Injectable } from '@angular/core';
import { Skill } from 'src/app/models/Skill/skill';
import { UserData } from 'src/app/models/UserData/user-data';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  userDataList: Array<UserData> = [
    {
      userName: 'Vishnu',
      education: 'B.Tech (ECE)',
      skills: [
        { name: 'Python', proficiency: 67 },
        { name: 'Java', proficiency: 98 },
      ],
      experience: 2.2,
    },
    {
      userName: 'Latha',
      education: 'M.Tech (Cyber Security)',
      skills: [
        { name: 'Networking', proficiency: 87 },
        { name: 'Bug Bounty', proficiency: 98 },
      ],
      experience: 7.9,
    },
    {
      userName: 'Srinu',
      education: 'B.Tech (CSE)',
      skills: [
        { name: 'Devops', proficiency: 97 },
        { name: 'Kafka', proficiency: 48 },
      ],
      experience: 5.6,
    },
  ];
  constructor() {}

  getUserData(): Array<UserData> {
    return this.userDataList;
  }

  addUserData(userData: UserData): void {
    this.userDataList.push(userData);
  }
}
