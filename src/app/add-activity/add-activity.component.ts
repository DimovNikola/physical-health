import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/assets/models/Activity';
import { activities } from 'src/assets/data/activities';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {

  activities: Activity[];
  id: string;
  item: any;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.activities = [...activities];
  }

  createItem() {
    let name = (<HTMLInputElement>document.getElementById('name')).value;
    let time = (<HTMLInputElement>document.getElementById('time')).value;
    let description = (<HTMLInputElement>document.getElementById('description')).value;
    let requisites = (<HTMLInputElement>document.getElementById('requisites')).value;
    let date = (<HTMLInputElement>document.getElementById('date')).value;
    let lastId = activities[activities.length - 1].getId();
    var newActivity = new Activity(lastId + 1, name, time, description, requisites, date);

    let exists = activities.some(x => x.getName() === name);

    if(exists) {
      return;
    }
    else{
      activities.push(newActivity);
      this.activities = [...activities];
    }
  }
}
