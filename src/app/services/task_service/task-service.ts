import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = [
    { id: 1, title: 'Morning workout',          done: false, due: new Date() },
    { id: 2, title: 'Review finances',          done: true,  due: new Date() },
    { id: 3, title: 'Read for 30 mins',         done: false, due: new Date('2026-05-17') },
    { id: 4, title: 'Drink 8 glasses of water', done: false, due: new Date() },
    { id: 5, title: 'Plan tomorrow',            done: true,  due: new Date('2026-05-16') },
  ];

  getTasks() {
    return this.tasks;
  }

  toggleTask(id: number) {
  const task = this.tasks.find(t => t.id === id);
  if (task) {
    task.done = !task.done;
  }
}
}
