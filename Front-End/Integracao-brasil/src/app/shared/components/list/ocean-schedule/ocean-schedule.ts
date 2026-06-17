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
  carrier?: string,
  weeksOut?: string,
  dateType?: string,
  directOnly?: boolean,
  nearbyOrigin?: boolean,
  nearbyDestination?: boolean
) {

  this.loading.set(true);

  this.scheduleService.list().subscribe({

    next: response => {

      this.schedules = response.data.items.filter(schedule => {

        const origemOk =
          !origin ||
          schedule.originUnloc
            ?.toLowerCase()
            .includes(origin.toLowerCase());

        const destinoOk =
          !destination ||
          schedule.destinationUnloc
            ?.toLowerCase()
            .includes(destination.toLowerCase());

        const carrierOk =
          !carrier ||
          schedule.scac
            ?.toLowerCase()
            .includes(carrier.toLowerCase());

        const weeksOk =
          !weeksOut ||
          schedule.totalDuration <= Number(weeksOut) * 7;

        const dateTypeOk =
          !dateType ||
          schedule.scheduleType
            ?.toLowerCase()
            .includes(dateType.toLowerCase());

        const directOnlyOk =
          !directOnly ||
          schedule.scheduleType?.toLowerCase() === 'direct';

        const nearbyOriginOk =
          !nearbyOrigin ||
          schedule.originUnloc !== null;

        const nearbyDestinationOk =
          !nearbyDestination ||
          schedule.destinationUnloc !== null;

        return (
          origemOk &&
          destinoOk &&
          carrierOk &&
          weeksOk &&
          dateTypeOk &&
          directOnlyOk &&
          nearbyOriginOk &&
          nearbyDestinationOk
        );

      });

      this.loading.set(false);

    },

    error: err => {
      console.log(err);
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

