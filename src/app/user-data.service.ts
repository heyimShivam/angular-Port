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
      year:'2006 - 2019',
      content:'1-12th',
      contentTwo:'D.A.V. Public School, Alampur'
    },
    {
      year:'2020 - 2024',
      content:'B.Tech. Electrical Engineering',
      contentTwo:'National Institute of Technology Hamirpur'
    },
  ]

  projectDetails = [
    {
      name:"Portfolio",
      image:"./assets/shivam.jpg",
      content:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      githubLink:"#",
      workingLink:"#"
    },
    {
      name:"portfolio",
      image:"./assets/shivam.jpg",
      content:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      githubLink:"#",
      workingLink:"#"
    },
    {
      name:"portfolio",
      image:"./assets/shivam.jpg",
      content:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      githubLink:"#",
      workingLink:"#"
    },
    {
      name:"portfolio",
      image:"./assets/shivam.jpg",
      content:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      githubLink:"#",
      workingLink:"#"
    },
    {
      name:"portfolio",
      image:"./assets/shivam.jpg",
      content:"Some quick example text to build on the card title and make up the bulk of the card's content.",
      githubLink:"#",
      workingLink:"#"
    }
  ]
}
