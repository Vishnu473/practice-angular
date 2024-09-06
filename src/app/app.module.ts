import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponentComponent } from './header/header-component/header-component.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HeaderComponentComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
