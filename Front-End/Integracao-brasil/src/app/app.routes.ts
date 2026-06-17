import { Routes } from '@angular/router';


import { OceanScheduleComponent } from './shared/components/list/ocean-schedule/ocean-schedule';
import { CepComponent } from './layout/main-layout/cep/cep';


export const routes: Routes = [

  {
    path: '',
    component: CepComponent
  },
  {
    path: 'schedule',
    component: OceanScheduleComponent
  }
];
