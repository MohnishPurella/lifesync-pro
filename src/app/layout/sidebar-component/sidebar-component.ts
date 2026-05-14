import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.scss',
})
export class SidebarComponent {
  menuItems = [
    { label: 'Dashboard',  icon: 'bi-grid-1x2-fill',     route: '/dashboard' },
    { label: 'Tasks',      icon: 'bi-check2-square',      route: '/tasks' },
    { label: 'Finance',    icon: 'bi-wallet2',            route: '/finance' },
    { label: 'Health',     icon: 'bi-heart-pulse-fill',   route: '/health' },
    { label: 'Notes',      icon: 'bi-journal-richtext',   route: '/notes' },
  ];
}
