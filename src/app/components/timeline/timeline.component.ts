import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/user-data.service';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  timelineData: any;
  constructor(
    private userDataService: UserDataService
  ) { }

  ngOnInit(): void {
    this.timelineData = this.userDataService.timeLine;
  }

}
