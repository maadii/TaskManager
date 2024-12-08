import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { UserRightComponent } from './Body/user-right/user-right.component';
import { TaskComponent } from './Body/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserRightComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
