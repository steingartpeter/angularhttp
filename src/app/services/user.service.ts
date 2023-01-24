import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiurl = environment.apiurl;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiurl}/users`);
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiurl}/users/1`);
  }

  createUser(usr: User): Observable<User> {
    return this.http.post<User>(`${this.apiurl}/users`, usr);
  }

  updateUser(usr: User): Observable<User> {
    return this.http.put<User>(`${this.apiurl}/users/${usr.id}`, usr);
  }

  patchUpUser(usr: User): Observable<User> {
    return this.http.patch<User>(`${this.apiurl}/users/${usr.id}`, usr);
  }

  deleteUser(id: Number): Observable<void> {
    return this.http.delete<void>(`${this.apiurl}/users/${id}`);
  }
}
