import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../Environments/environments';
import { Dialing } from '../../shared/models/dialing.model';

@Injectable({
  providedIn: 'root'
})
export class DialingService {

  private readonly api =
    `${environment.apiUrl}/api/dialing`;

  constructor(
    private http: HttpClient
  ) {}

  buscarDdd(ddd: number) {
    return this.http.get<Dialing>(
      `${this.api}/${ddd}`
    );
  }
}
