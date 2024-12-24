import { Component, Input, Output,EventEmitter  } from '@angular/core';
import {  type user } from './user.Model';

@Component({
  selector: 'app-user-right',
  templateUrl: './user-right.component.html',
  styleUrls: ['./user-right.component.css']
})
export class UserRightComponent {
@Input() user!: user;

@Output() selectUser= new EventEmitter();

  constructor() { }
  get imagePath()
  {
    return 'assets/users/' +this.user.avatar;
  }

  OnSelectUser() {
            this.selectUser.emit(this.user.id)!;
            }

}
