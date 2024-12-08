import { Component, Input, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-user-right',
  templateUrl: './user-right.component.html',
  styleUrls: ['./user-right.component.css']
})
export class UserRightComponent {
@Input() user!:{
  id:string;
  avatar:string;
  name:string;
};

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
