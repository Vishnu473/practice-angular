import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponentComponent } from './header/header-component/header-component.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ProfileComponent } from './profile/profile.component';
import { PipesComponent } from './pipes/pipes.component';
import { UserDataComponent } from './user-data/user-data.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HeaderComponentComponent,
    PostsListComponent,
    ProfileComponent,
    PipesComponent,
    UserDataComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
