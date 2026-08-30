import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  newUser = { username: '', email: '', password: '', role: '' };

  constructor(private http: HttpClient) {}

  addUser() {
    this.http.post('/api/users/add', this.newUser).subscribe(() => {
      this.newUser = { username: '', email: '', password: '', role: '' };
      alert('User added successfully!');
    });
  }
}