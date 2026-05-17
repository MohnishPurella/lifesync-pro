import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth_service/auth-service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.scss',
})
export class NavbarComponent {
  constructor(private authService: AuthService) {}

  getUserName() {
    return this.authService.getUserName();
  }
}
