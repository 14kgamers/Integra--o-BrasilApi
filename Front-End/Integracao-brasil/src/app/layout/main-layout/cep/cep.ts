import { Component, signal } from '@angular/core';
import { CepService } from '../../../core/services/cep.service';
import { Observable } from 'rxjs';
import { Cep } from '../../../shared/models/cep.model';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-cep',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './cep.html'
})
export class CepComponent {
ceps = signal<Cep[]>([]);
  loading = signal(false)
  constructor(private cepService: CepService ) {}

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
