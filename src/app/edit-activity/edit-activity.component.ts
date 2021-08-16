import { Component, OnInit } from '@angular/core';
import { Activity } from '..//..//assets/models/Activity';
import { activities } from '..//..//assets/data/activities';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-activity',
  templateUrl: './edit-activity.component.html',
  styleUrls: ['./edit-activity.component.css']
})
export class EditActivityComponent implements OnInit {

  activities: Activity[];
  id: string;
  item: any;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
    this.getItem();
  }

  getData() {
    this.activities = [...activities];
  }

  getItem() {
    this._activatedRoute.paramMap.subscribe(params => {
      this.id = params.get("id")!;
    });
    for(let activity of activities) {
      if(activity.getId() == +this.id) {
        this.item = activity;
      }
    }
  }

  saveItem() {
    let name = (<HTMLInputElement>document.getElementById('name')).value;
    let time = (<HTMLInputElement>document.getElementById('time')).value;
    let description = (<HTMLInputElement>document.getElementById('description')).value;
    let requisites = (<HTMLInputElement>document.getElementById('requisites')).value;
    let date = (<HTMLInputElement>document.getElementById('date')).value;

    var newActivity = new Activity(this.item.getId() + 1, name, time, description, requisites, date);

    let objIndex = activities.findIndex((obj => obj.id == this.item.getId()));

    this.item = newActivity;

    this.activities = this.activities.splice(objIndex, 1, this.item);
    activities.splice(objIndex, 1, this.item);
  }
}
