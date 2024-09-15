import { Skill } from '../Skill/skill';

export interface UserData {
  userName: string;
  education: string;
  skills: Array<Skill>;
  experience: number;
}
