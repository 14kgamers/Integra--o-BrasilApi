import { Component, signal } from '@angular/core';
import { CepService } from './core/services/cep.service';
import { Cep } from './shared/models/cep.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  ceps = signal<Cep[]>([]);
  loading = signal(false)

  constructor(private cepService: CepService) {}

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
}
