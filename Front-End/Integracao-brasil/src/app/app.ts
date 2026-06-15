import { scheduleService } from './core/services/schedule-list.service';
import Keycloak  from 'keycloak-js';
import { Component, inject, signal } from '@angular/core';
import { CepService } from './core/services/cep.service';
import { Cep } from './shared/models/cep.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { OceanScheduleComponent } from './shared/components/list/ocean-schedule/ocean-schedule';
import { response } from 'express';
import { Schedule } from './shared/models/schedule.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  keycloak = inject(Keycloak);
  ceps = signal<Cep[]>([]);
  loading = signal(false)

  constructor(private cepService: CepService, private scheduleService: scheduleService) {
    this.testeSchedule()
  }

  buscar(cep?: string) {
    this.loading.set(true);

    const request: Observable<Cep | Cep[]> = cep
      ? this.cepService.buscarCep(cep)
      : this.cepService.getAllCeps();

    request.subscribe({
      next: (data) => {
        this.ceps.set(cep ? [data as Cep] : data as Cep[]);
        this.loading.set(false); // termina loading
      },
      error: (err: any) => {
        console.error('Erro ao buscar CEP(s):', err);
        this.ceps.set([]);
        this.loading.set(false)
      }
    });


  }
  testeSchedule() {

  this.scheduleService
    .list()
    .subscribe({
      next: response => {
        console.log('SUCESSO');

        const carrierNames = response.data.items.map(schedule => schedule.carrierName);
        console.log(response.data.items.filter(schedule => schedule.carrierName.includes('PIL')));
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
