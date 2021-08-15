import { Component, OnInit } from '@angular/core';
import { activities } from 'src/assets/data/activities';

@Component({
  selector: 'app-physical-activity',
  templateUrl: './physical-activity.component.html',
  styleUrls: ['./physical-activity.component.css']
})
export class PhysicalActivityComponent implements OnInit {

  name: string;
  deadline: string;
  description: string;
  requisites: string;
  date: Date;

  constructor() { }

  ngOnInit(): void {
  }


}
