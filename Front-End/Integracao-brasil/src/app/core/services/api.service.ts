import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ApiListResult } from "../../shared/Interfaces/api-result.interface";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _http = inject(HttpClient)
  private _api: string = '';
  private _workspace: string = 'headsoft-testes';

  public setApi(api: string) {
    this._api = api;
  }

  public setWorkspace(workspace: string) {
    this._workspace = workspace;
  }

  public getParams(params: object): HttpParams {

    let httpParams = new HttpParams();

    Object.entries(params).forEach(e => {
      httpParams = httpParams.append(e[0], JSON.stringify(e[1]))
    });

    return httpParams;
  }

  public search(filters: object){
    return this._http.post(
      `${this._api}/search`,
      filters
    );
  }

  public list<TItem>(params: object, environment: 'Development' | 'Production' = 'Development') {
    return this._http.request<ApiListResult<TItem>>(
      'GET',
      `${this._api}?environment=${environment}`,
      {
        params: this.getParams(params),
        headers: {
          'workspace-identifier': this._workspace
        }
      }
    );
  }
}
