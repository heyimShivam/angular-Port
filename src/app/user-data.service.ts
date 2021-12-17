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
    college: "NIT-H",
    details:'Student | Web Developer | TECH ENTHUSIAST',
    userDetailsList: ['STUDENT', 'DEVELOPER', 'TECH ENTHUSIAST'],
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
  experience =[
    {
      heading:"Oppia",
      content:"Oppia is an online learning tool that enables anyone to easily create and share interactive activities (called 'explorations'). ",
      color:"green",
      myJob:"Frontend Developer",
      image:"assets/oppia.png",
      position:"2021 – Present",
      siteLink:"https://www.oppia.org/",
    },
    {
      heading:"RoboSoc NIT-H",
      content:"Robotics Society NIT-H provide students a place to pursue their interest in robotics by working on large and small scale robotics projects.",
      color:"orange",
      image:"assets/robosoc.png",
      myJob:"Executive member",
      position:"2020 – Present",
      siteLink:"https://robosocnith.com/",
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
      name:"Idea shareing app frontend",
      image:"./assets/idea.jpg",
      content:"Idea shareing app Frontend made in javascripts in Reactjs, bootstrap (MEAN Project).",
      githubLink:"https://github.com/heyimShivam/Idea-Shareing-frontend",
      workingLink:"https://ideashareing-74dd3.firebaseapp.com/"
    },
    {
      name:"Idea shareing app backend",
      image:"./assets/idea.jpg",
      content:"Idea shareing app backend made in javascripts using nodejs, express, mongoose (MEAN Project).",
      githubLink:"https://github.com/heyimShivam/idea-shareing-backend",
      workingLink:"https://ideashareing-74dd3.firebaseapp.com/"
    },
    {
      name:"Portfolio",
      image:"./assets/user.png",
      content:"Portfolio Web-App made in typescript using angular as framework",
      githubLink:"https://github.com/heyimShivam/angular-Port",
      workingLink:"#"
    },
    {
      name:"Classroom",
      image:"./assets/classroom.png",
      content:"Portfolio Web-App made in typescript using angular as framework",
      githubLink:"https://github.com/heyimShivam/ClassRoom-ReactJS",
      workingLink:""
    },
    {
      name:"Mind Game",
      image:"./assets/mindgame.jpg",
      content:"Mind game made in HTML, CSS, JS. Enhance the memory capacity of the human mind.",
      githubLink:"https://github.com/heyimShivam/Mind-Game-",
      workingLink:"https://heyimshivam.github.io/Mind-Game-/"
    },
    {
      name:"To-Do list",
      image:"./assets/todo.png",
      content:"Mind game made in HTML, CSS, JS. Enhance the memory capacity of the human mind.",
      githubLink:"https://github.com/heyimShivam/ToDoList",
      workingLink:"https://heyimshivam.github.io/ToDoList/"
    }
  ]
}
