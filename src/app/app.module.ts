import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponentComponent } from './header/header-component/header-component.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { ProfileComponent } from './profile/profile.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HeaderComponentComponent,
    PostsListComponent,
    ProfileComponent,
    PipesComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
