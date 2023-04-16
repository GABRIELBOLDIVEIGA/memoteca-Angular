import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pensamento } from './pensamento';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = "http://localhost:4500/pensamentos"

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Pensamento[]>(this.API);
  }
}
