import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    // เรียกใช้ฟังก์ชัน logout ของ AuthService
    this.authService.logout();
    // นำทางไปหน้า login
    this.router.navigate(['/login']);
  }
}
