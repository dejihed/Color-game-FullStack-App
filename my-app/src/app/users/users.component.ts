import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 


interface UpdateResponse {
  message: string;
}


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = []; 
  searchQuery = ''; 
  newUser = { username: '', email: '', password: '', role: '' };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any[]>('/api/users/all').subscribe({
      next: (data) => {
        this.users = data;
        this.filteredUsers = data;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        alert('Error fetching users. Please try again later.');
      }
    });
  }

  filterUsers() {
    this.filteredUsers = this.users.filter((user) =>
      user.username.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  addUser() {
    this.http.post('/api/users/add', this.newUser).subscribe({
      next: () => {
        this.fetchUsers(); 
        this.newUser = { username: '', email: '', password: '', role: '' }; 
        alert('User added successfully!');
      },
      error: (err) => {
        console.error('Error adding user:', err);
        alert('Error adding user. Please try again later.');
      }
    });
  }

  updateUser(user: any) {
    const token = localStorage.getItem('authToken');
  
    this.http.put<UpdateResponse>(`/api/users/${user.id}`, user, {
      headers: { 'Authorization': `Bearer ${token}` } 
    }).subscribe({
      next: (response) => {
        alert(response.message || 'User updated successfully');
        this.fetchUsers();
      },
      error: (error) => {
        alert(error.error || 'Error updating user');
      }
    });
  }

  
  



  deleteUser(userId: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.http.delete(`/api/users/${userId}`).subscribe({
        next: () => {
          this.fetchUsers(); 
          alert('User deleted successfully!');
        },
        error: (err) => {
          console.error('Error deleting user:', err);
          alert('Error deleting user. Please try again later.');
        }
      });
    }
  }
}
