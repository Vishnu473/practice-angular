import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Post } from './services/post-service.service';
import { PostsListComponent } from './posts-list/posts-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'CodeSandbox';

  isLoggedIn: boolean = true; //hard-coded for further navigation
  userName: string = 'Vishnu Kishore'; //hard-coded for further navigation in websitet
  stillStudent: boolean = false; //hard-coded for further navigation to header-component

  profession: string = '';
  password: string = '';
  message: string = '';
  childMessage: string = '';
  currentpostList: Post[] = [];
  @ViewChild(PostsListComponent) secretMessage: any;
  secretMsgToParent: string = '';

  loadComponent() {
    this.viewContainer.createComponent(PostsListComponent);
  }

  removeComponent() {
    this.viewContainer.remove();
  }
  constructor(private viewContainer: ViewContainerRef) {
    this.currentpostList = [
      {
        id: 1,
        title: 'My First Post',
        content: 'This is the content of my first post.',
        author: 'John Doe',
        createdAt: new Date('2023-10-10T10:00:00Z'),
        updatedAt: new Date('2023-10-10T10:00:00Z'),
      },
      {
        id: 2,
        title: 'My Second Post',
        content: 'This is the content of my second post.',
        author: 'John Doe',
        createdAt: new Date('2023-10-10T10:00:00Z'),
        updatedAt: new Date('2023-10-10T10:00:00Z'),
      },
      {
        id: 3,
        title: 'My Third Post',
        content: 'This is the content of my third post.',
        author: 'John Doe',
        createdAt: new Date('2023-10-10T10:00:00Z'),
        updatedAt: new Date('2023-10-10T10:00:00Z'),
      },
      {
        id: 4,
        title: 'My Fourth Post',
        content: 'This is the content of my fourth post.',
        author: 'John Doe',
        createdAt: new Date('2023-10-10T10:00:00Z'),
        updatedAt: new Date('2023-10-10T10:00:00Z'),
      },
    ];
  }

  ngAfterViewInit(): void {
    this.secretMsgToParent = this.secretMessage.secretMessage;
  }
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

  childMessageToParent(msg: string) {
    this.childMessage = msg;
  }
}
