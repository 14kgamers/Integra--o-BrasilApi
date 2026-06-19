import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet,  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import Keycloak from 'keycloak-js';
import { TranslatePipe } from '@ngx-translate/core';


import { scheduleService } from './core/services/schedule-list.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    TranslatePipe

],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  keycloak = inject(Keycloak);
  translate = inject(TranslateService)
  constructor(
    private scheduleService: scheduleService,


  ) {

    // Configuração do i18n
    this.translate.addLangs(['pt', 'en']);
    this.translate.setFallbackLang('pt');
    this.translate.use('pt');



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

  changeLanguage(lang: string) {
  this.translate.use(lang);

  console.log('Idioma atual:', this.translate.getCurrentLang());

  this.translate.get('MENU.CEP').subscribe(v => {
    console.log(v);
  });
}



  logout() {
    this.keycloak.logout();
  }
}
