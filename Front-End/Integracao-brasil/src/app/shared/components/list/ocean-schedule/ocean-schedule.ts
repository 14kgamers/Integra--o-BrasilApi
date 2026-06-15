import { scheduleService } from './../../../../core/services/schedule-list.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ocean-schedule',
  imports: [],
  templateUrl: './ocean-schedule.html',
  styleUrl: './ocean-schedule.css',
})
export class OceanScheduleComponent {
  constructor(
    public scheduleService : scheduleService
  ) {
    this.testeSchedule
  }

  testeSchedule() {

    this.scheduleService
      .list()
      .subscribe({
        next: response => {
          console.log('SUCESSO');
          //console.log(response.data.items.map(x => x.carrierName));
        },
        error: err => {
          console.log('ERRO');
          console.log(err);
        }
      });
  }
}

