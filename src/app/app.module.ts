import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { UserRightComponent } from './Body/user-right/user-right.component';
import { TaskComponent } from './Body/task/task.component';
import { ItemComponent } from './Body/task/item/item.component';
import { NewItemComponent } from './Body/task/item/new-item/new-item.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserRightComponent,
    TaskComponent,
    ItemComponent,
    NewItemComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
