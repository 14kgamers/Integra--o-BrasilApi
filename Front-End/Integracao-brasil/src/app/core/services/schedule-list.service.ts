import { ApiService } from './api.service';
import { Inject, inject, Injectable } from "@angular/core";
import { environment } from "../../../Environments/environments";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ScheduleFilters } from "../../shared/models/schedule-list";
import { Params } from "@angular/router";
import { Schedule } from '../../shared/models/schedule.model';


@Injectable({
  providedIn: 'root'
})
export class scheduleService{

  apiService = inject(ApiService);
  apiUrl = 'http://localhost:5297/api/inttra/ocean-schedules';

  constructor() {
    this.apiService.setApi(this.apiUrl);
  }

  search(filters: ScheduleFilters){
    return this.apiService.search(filters);
  }

  list() {
    return this.apiService.list<Schedule>({
      filters : {
        originPort: 'BRPNG',
        destinationPort: 'CNSHA',
        searchDate: '2026-06-15',
        searchDateType: 0,
        weeksOut: 4,
        scaCs: [],
        directOnly: false,
        includeNearbyOriginPorts: false,
        includeNearbyDestinationPorts: false
    }});
  }
}
