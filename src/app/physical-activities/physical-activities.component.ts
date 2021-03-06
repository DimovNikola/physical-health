import { Component, OnInit } from '@angular/core';
import { activities } from '..//..//assets/data/activities';
import { Activity } from '..//..//assets/models/Activity';

@Component({
  selector: 'app-physical-activities',
  templateUrl: './physical-activities.component.html',
  styleUrls: ['./physical-activities.component.css']
})
export class PhysicalActivitiesComponent implements OnInit {
  activitiesList: Activity[];

  constructor() { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.activitiesList = [...activities];
  }

}
