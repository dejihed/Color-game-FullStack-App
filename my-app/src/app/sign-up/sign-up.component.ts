import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignupComponent {
  user = {
    username: '',
    email: '',
    password: '',
    role: 'user' 
  };

  constructor(private userService: UserService, private router: Router ,private authService: AuthService) {}

  onSubmit() {
    if (!this.isValidEmail(this.user.email)) {
      alert('Invalid email format. The part before "@" must be at least 3 characters.');
      return;
    }

    this.userService.signUp(this.user).subscribe({
      next: (response) => {
        alert(response.message || 'Sign-up successful!');
        this.authService.setConnected(true);  
          this.router.navigate(['/login']);
      },
      error: (error) => console.error('Error during sign-up:', error)
    });
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}
