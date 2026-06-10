import { Component } from '@angular/core';
import { CepService } from '../../../core/services/cep.service';



@Component({
  selector: 'app-cep',
  standalone: true,
  templateUrl: './cep.html'
})
export class CepComponent {

  constructor(
    private cepService: CepService
  ) {}

  buscar() {

    this.cepService
      .buscarCep('80010000')
      .subscribe(console.log);

  }
}
