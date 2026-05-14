import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard-component/dashboard-component';
import { FinanceComponent } from './pages/finance-component/finance-component';
import { HealthComponent } from './pages/health-component/health-component';
import { NotesComponent } from './pages/notes-component/notes-component';
import { TasksComponent } from './pages/tasks-component/tasks-component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'tasks',     component: TasksComponent },
    { path: 'finance',   component: FinanceComponent },
    { path: 'health',    component: HealthComponent },
    { path: 'notes',     component: NotesComponent },
];
