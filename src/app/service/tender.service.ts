import { Injectable } from '@angular/core';
import { Tender } from '../dtos/tender';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TenderService {

  private backendHost = "http://127.0.0.1:5000/api/v1/web";

  private recommendationUri: string = this.backendHost + '/recommendations';
  private allUri: string = this.backendHost;

  constructor(private httpClient: HttpClient) { }

  getRecommendations(dateStr: string): Observable<Tender[]> {
    let params = new HttpParams();
    params = params.set("date", dateStr);
    params = params.set("count", "50");
    return this.httpClient.get<Tender[]>(this.recommendationUri, {params: params} );
  }

  getAll(dateStr: string): Observable<Tender[]> {
      let params = new HttpParams();
      params = params.set("date", dateStr);
      params = params.set("count", "50");
      return this.httpClient.get<Tender[]>(this.allUri, {params: params} );
    }

}
