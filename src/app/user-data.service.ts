import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  constructor() { }
  userDetails = {
    name: 'Shivam',
    email: 'shivamthalwal@gmail.com',
    phoneNumber: '8219601395',
    githubURL: 'github.com/heyimShivam'
  }
}
