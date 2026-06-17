import { Schedule } from './shared/models/schedule.model';
import { scheduleService } from './core/services/schedule-list.service';
import Keycloak  from 'keycloak-js';
import { Component, inject, signal } from '@angular/core';
import { CepService } from './core/services/cep.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  keycloak = inject(Keycloak);





  constructor(private cepService: CepService, private scheduleService: scheduleService) {
    this.testeSchedule()
  }


  testeSchedule() {

  this.scheduleService
    .list()
    .subscribe({
      next: response => {
        console.log('SUCESSO');

        const carrierNames = response.data.items.map(schedule => schedule.carrierName);
        console.log(response.data.items.filter(schedule => schedule.carrierName.includes('')));
      },
      error: err => {
        console.error('ERRO');
        console.error(err);
      }
    });
}

  public logout() {
    this.keycloak.logout();
  }
}
