import { Component, OnInit, Output, EventEmitter, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Console } from 'console';
import { type newItemData } from '../Item.Model';
import { TaskService } from 'src/app/data/task.Service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css'],

})
export class NewItemComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Input() userId!: string
  title = '';
  summry = '';
  date = '';
  private taskService = inject(TaskService);
  constructor() { }

  ngOnInit(): void {
  }
  OnCansel() {
    this.close.emit();
  }
  OnSubmit() {
    this.taskService.addTasks({dueDate:this.date,
      summary:this.summry,
      title:this.title
    }, this.userId)
    this.close.emit();
  }

}
