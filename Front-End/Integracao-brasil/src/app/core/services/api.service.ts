import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { ApiListResult } from "../../shared/Interfaces/api-result.interface";
import { Observable } from "rxjs";
import { HttpMethod } from "keycloak-angular";


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

  public getDefaultHeaders() {
    return {
      'workspace-identifier': this._workspace
    }
  }

  public getParams(params: any): HttpParams {

    let httpParams = new HttpParams();

    /* DEFAULT PARAMS */
    // LIST CRITERIA
    httpParams = httpParams.append('criteria', JSON.stringify({
      pagination: {
        index: params.criteria?.pagination?.index ?? 0,
        size: params.criteria?.pagination?.size ?? 25
      }
    }));

    Object.entries(params).forEach(e => {
      httpParams = httpParams.append(e[0], JSON.stringify(e[1]))
    });

    return httpParams;
  }

  public createRequest<TReturnType>(
    method: HttpMethod,
    config: {body?: object, params?: object, action?: string},
    environment: 'Development' | 'Production' = 'Development')
  : Observable<TReturnType> {
    return this._http.request<TReturnType>(
      method,
      `${this._api}${config.action ? '/'+config.action : ''}?environment=${environment}`,
      {
        body: config.body,
        params: this.getParams(config.params ?? {}),
        headers: this.getDefaultHeaders()
      }
    );
  }


  public search(filters: object){
    return this.createRequest("GET", {body: filters, action: 'search'});
  }

  public list<TItem>(params: object) {
    return this.createRequest<ApiListResult<TItem>>("GET", {params: params});
  }
}
