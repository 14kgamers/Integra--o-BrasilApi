import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cep } from '../../shared/models/cep.model';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private readonly api = 'http://localhost:5197/api/cep';

  constructor(private http: HttpClient) {}

  buscarCep(cep: string) {
    return this.http.get<Cep>(`${this.api}/${cep}`);

  }

  getAllCeps() {
    return this.http.get<Cep[]>(this.api);
  }
}
