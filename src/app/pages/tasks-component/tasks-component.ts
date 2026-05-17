import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TaskService } from '../../services/task_service/task-service';

@Component({
  selector: 'app-tasks-component',
  imports: [DatePipe],
  templateUrl: './tasks-component.html',
  styleUrl: './tasks-component.scss',
})
export class TasksComponent {
  tasks;

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  toggle(id: number) {
    this.taskService.toggleTask(id);
  }
}
