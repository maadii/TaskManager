import { Component, OnInit, Input,inject } from '@angular/core';
import { Item } from './Item.Model';
import { TaskService } from 'src/app/data/task.Service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;
  private taskService= inject(TaskService);
 
  constructor() { }

  ngOnInit(): void {
  }
  OnCompleted() {
    this.taskService.deleteUserTask(this.item.id);
  }
}
