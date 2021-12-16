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
  myDetails = {
    name: "Shivam",
    Branch: "electrical engineering",
    image: './assets/shivam.jpg',
    college: "NIT-H"
  }
  socialMedia = [
    {
      imageLink: "./assets/icons/github.png",
      profileLink: "https://github.com/heyimshivam"
    },
    {
      imageLink: "./assets/icons/linkedin.png",
      profileLink: "https://www.linkedin.com/in/heyimshivam"
    },
    {
      imageLink: "./assets/icons/facebook.png",
      profileLink: "https://www.facebook.com/hey.imshivam/"
    },
    {
      imageLink: "./assets/icons/insta.png",
      profileLink: "https://www.instagram.com/hey.imshivam/"
    },
    {
      imageLink: "./assets/icons/twitter.png",
      profileLink: "https://twitter.com/heyimshivam"
    }
  ]
  timeLine=[
    {
      year:'19th May 2020',
      content:'Lucas McAlister just send you a message.'
    },
    {
      year:'15th May 2020',
      content:'Lucas McAlister just send you a message.'
    },
    {
      year:'16th May 2020',
      content:'Lucas McAlister just send you a message.'
    },
    {
      year:'13th May 2020',
      content:'Lucas McAlister just send you a message.'
    },
  ]
}
