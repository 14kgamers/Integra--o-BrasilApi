import { Component, signal } from '@angular/core';
import { CepService } from './core/services/cep.service';
import { Cep } from './shared/models/cep.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  ceps = signal<Cep[]>([]);

  constructor(private cepService: CepService) {}

  buscar(cep?: string) {

    const request: Observable<Cep | Cep[]> = cep
      ? this.cepService.buscarCep(cep)
      : this.cepService.getAllCeps();

    request.subscribe({
      next: (data) => {
        this.ceps.set(cep ? [data as Cep] : data as Cep[]);
        console.log(data)
      },
      error: (err: any) => {
        console.error('Erro ao buscar CEP(s):', err);
        this.ceps.set([]);
      }
    });
  }
}
