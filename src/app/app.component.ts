import { Component } from '@angular/core';
import { MOCK_USERS } from './data/Mock-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users= MOCK_USERS;
  title = 'TaskManager';
  selectetUserId='';

  get userName()
  {
    return this.users.find((user)=> user.id==this.selectetUserId)
  }
    onSelectUser(id:string)
  {
    
    this.selectetUserId = id;
    console.log(this.userName?.name);
  }
}
