import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  baseUrl = environment.serverBaseUrl;

  constructor(protected httpClient: HttpClient) {
    this.baseUrl = this.baseUrl + '/historials';
  }

  getAll(){
    return this.httpClient.get(this.baseUrl);
  }
}
