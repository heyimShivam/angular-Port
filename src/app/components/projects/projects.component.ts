import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectDetails: any;
  constructor(
    private UserDataService: UserDataService
  ) { }

  ngOnInit(): void {
    this.projectDetails = this.UserDataService.projectDetails;
  }

}
