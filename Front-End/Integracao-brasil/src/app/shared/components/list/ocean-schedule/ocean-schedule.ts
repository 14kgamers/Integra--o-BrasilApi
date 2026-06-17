import { CommonModule, DatePipe } from '@angular/common';
import { scheduleService } from './../../../../core/services/schedule-list.service';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-ocean-schedule',
  standalone: true,
  imports: [DatePipe, CommonModule],
  templateUrl: './ocean-schedule.html',
  styleUrls: ['./ocean-schedule.css']
})
export class OceanScheduleComponent {
 loading = signal(false)
  schedules: any[] = [];
  constructor(
    public scheduleService : scheduleService
  ) {
    this.testeSchedule();
  }

  buscarSchedules(
  origin?: string,
  destination?: string,
  carrier?: string
) {
  this.loading.set(true);

  this.scheduleService.list().subscribe({
    next: response => {

      this.schedules = response.data.items.filter(schedule => {

        const origemOk =
          !origin ||
          schedule.originUnloc
            .toLowerCase()
            .includes(origin.toLowerCase());

        const destinoOk =
          !destination ||
          schedule.destinationUnloc
            .toLowerCase()
            .includes(destination.toLowerCase());

        const carrierOk =
          !carrier ||
          schedule.scac
            .toLowerCase()
            .includes(carrier.toLowerCase());

        return origemOk && destinoOk && carrierOk;
      });
      this.loading.set(false);
    }
  });
}
  testeSchedule() {

    this.scheduleService
      .list()
      .subscribe({
        next: response => {
          this.schedules = response.data.items;
          this.loading.set(false);
        },
        error: err => {
          console.log('ERRO');
          console.log(err);
            this.loading.set(false);
        }
      });
  }
}

