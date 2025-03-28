import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@email.com' },
    { id: 2, name: 'Bob', email: 'bob@email.com' }
  ];

  getUsers() {
    return [...this.users];
  }

  addUser(user: User) {
    this.users.push({ ...user, id: Date.now() });
  }

  updateUser(updated: User) {
    const index = this.users.findIndex(u => u.id === updated.id);
    if (index !== -1) this.users[index] = updated;
  }

  deleteUser(id: number) {
    this.users = this.users.filter(u => u.id !== id);
  }
}
