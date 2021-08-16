import { Component, OnInit } from '@angular/core';
import { Activity } from '..//..//assets/models/Activity';
import { activities } from '..//..//assets/data/activities';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-info',
  templateUrl: './activity-info.component.html',
  styleUrls: ['./activity-info.component.css']
})
export class ActivityInfoComponent implements OnInit {

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

  deleteItem() {
    activities.forEach((element, index) => {
      if(element == this.item) {
        activities.splice(index, 1);
      }
    });
  }
}
