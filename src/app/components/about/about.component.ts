import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  userData: any;
  socialMedia: any;
  constructor(
    private userDataService: UserDataService
  ) { }

  ngOnInit(): void {
    this.userData = this.userDataService.myDetails;
    this.socialMedia = this.userDataService.socialMedia;
  }

}
