import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet,  } from '@angular/router';

import Keycloak from 'keycloak-js';



import { scheduleService } from './core/services/schedule-list.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,

],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  keycloak = inject(Keycloak);

  constructor(
    private scheduleService: scheduleService,

  ) {

    // Configuração do i18n


    this.testeSchedule();
  }

  testeSchedule() {

    this.scheduleService
      .list()
      .subscribe({
        next: response => {

          console.log('SUCESSO');

          console.log(
            response.data.items.filter(
              schedule => schedule.carrierName.includes('')
            )
          );
        },

        error: err => {

          console.error('ERRO');
          console.error(err);

        }
      });
  }



  logout() {
    this.keycloak.logout();
  }
}
