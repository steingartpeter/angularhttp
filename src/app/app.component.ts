import { Component, OnInit } from '@angular/core';
import { User } from './interfaces/user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angularhttp';
  private usrTBC: User = {
    name: 'Steingart Péter',
    username: 'AX07057',
    email: 'testSubject0@cmail.biz',
    address: {
      street: 'Parkerdő 112',
      suite: 'Apt. 556',
      city: 'Győr',
      zipcode: '9027',
      geo: {
        lat: '12.3159',
        lng: '23.1496',
      },
    },
    phone: '36-30-886-9955',
    website: 'pst07057.org',
    company: {
      name: 'R.H.A.L- LTD',
      catchPhrase: 'Többrétegű ügyfél-kiszolgáló neurális háló',
      bs: 'get boozed ASAP',
    },
  };

  constructor(private userSrvc: UserService) {}

  onGetUsers(): void {
    this.userSrvc.getUsers().subscribe(
      (response) => console.table(response),
      (error) => console.log(error),
      () => console.log('Observeable was done...')
    );
  }

  onGetUser(): void {
    this.userSrvc.getUser().subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
      complete: () => console.log('Observeable was done...'),
    });
  }
  onCreatetUser(u: User): void {
    this.userSrvc.createUser(u).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
      complete: () => console.log('User creation was done...'),
    });
  }

  onUpdatetUser(u: User): void {
    this.userSrvc.createUser(u).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
      complete: () => console.log('User update was done...'),
    });
  }
  onPatchUser(u: User): void {
    this.userSrvc.patchUpUser(u).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
      complete: () => console.log('User patched sucessfully...'),
    });
  }

  onDeleteUser(uid: Number) {
    this.userSrvc.deleteUser(uid).subscribe({
      next: (response) => console.log(response),
      error: (error) => console.log(error),
      complete: () => console.log(`User:${uid} is successfully deleted...`),
    });
  }

  ngOnInit(): void {
    const ptchU: any = { id: 2, name: 'Kovács László' };
    this.onGetUser();
    this.onCreatetUser(this.usrTBC);
    this.usrTBC.name = 'Peter Steingart Jr.';
    this.onUpdatetUser(this.usrTBC);
    this.onGetUsers();
    this.onPatchUser(ptchU);
    this.onDeleteUser(11);
  }
}
