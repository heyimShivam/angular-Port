import { Component, HostListener, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles-config';
import { UserDataService } from 'src/app/user-data.service';    
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


declare let particlesJS: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        display: 'none',
        right:'-900px',
      })),
      state('closed', style({
        display: 'block',
        right:'0px',
      })),
      transition('closed => open', [
        animate('1s')
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
  showDesktopNav: boolean;
  fullScreenMenu: string = 'open';
  userDetails: any;
  userDetailsList:any;
  constructor(
    private userDataService: UserDataService
  ) { 
    if(window.innerWidth >= 650){
      this.showDesktopNav = true;
    }else{
      this.showDesktopNav = false;
    }
  }

  ToggleFullScreenMenu(){
    if(this.fullScreenMenu === 'closed'){
      this.fullScreenMenu = 'open';
    }else{
      this.fullScreenMenu = 'closed';
    }
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if(window.innerWidth >= 810){
      this.showDesktopNav = true;
    }else{
      this.showDesktopNav = false;
    }
  }

  public ngOnInit(): void {
    this.invokeParticles();
    this.userDetails = this.userDataService.myDetails;     
    this.userDetailsList = this.userDataService.myDetails.userDetailsList;     
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }
}
