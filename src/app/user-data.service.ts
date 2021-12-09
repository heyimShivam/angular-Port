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
  css ={
    brightPurple: '#C3073F',
    midPurple: '#950740',
    darkPurple: '#6F2232',
    midGray: '#4E4E50',
    darkGray: '#1A1A1D'
  }
}
