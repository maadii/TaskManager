import { Component, Input, OnInit } from '@angular/core';
import { user } from '../user-right/user.Model';
import { TaskService } from 'src/app/data/task.Service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  @Input() selectedUser!: user ;
  isAddSrtated = false;


  get selectUserTask() {
    return this.taskservice.getUserTasks(this.selectedUser.id);
  }
  constructor(private taskservice:TaskService) { }

  ngOnInit(): void {
  }
  OnTaskComplede(id: string) {
    return 

  }
  OnStartAddItem() {
    this.isAddSrtated = !this.isAddSrtated;
  }
}
