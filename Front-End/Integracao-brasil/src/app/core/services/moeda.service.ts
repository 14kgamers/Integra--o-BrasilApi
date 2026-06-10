import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../Environments/environments';
import { Dialing } from '../../shared/models/dialing.model';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  private readonly api =
    `${environment.apiUrl}/api/moeda`;

  constructor(
    private http: HttpClient
  ) {}

  buscarCotacao(moeda: string) {
    return this.http.get<Dialing>(
      `${this.api}/${moeda}`
    );
  }
}
