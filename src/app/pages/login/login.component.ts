import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;
  loginFailed = false;
showPassword: any;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });
  }
  
  
  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  onLogin() {
    const { username, password } = this.loginForm.value;
    if (this.auth.login(username, password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.loginFailed = true;
    }    
  }
}
