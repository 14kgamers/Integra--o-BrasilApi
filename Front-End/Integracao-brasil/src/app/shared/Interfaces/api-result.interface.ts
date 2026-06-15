import { HttpStatusCode } from "@angular/common/http"
import { ListDTO } from "./list-dto.interface"

export interface ApiResult<T>{
  headsoftAPI: string
  title: string
  statusCode: HttpStatusCode
  resultType: any
  data: T
}

export interface ApiListResult<TItem> extends ApiResult<ListDTO<TItem>>{}
