import { RespostaModelos } from './../Model/resposta-modelos';
import { Valor } from './../Model/valor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ano } from '../Model/ano';
import { Marca } from '../Model/marca';
import { Modelo } from '../Model/modelo';

@Injectable({
  providedIn: 'root'
})
export class FipService {
  formularioData: any | undefined;
  responseData: any | undefined;

  private apiUrl = 'https://parallelum.com.br/fipe/api/v1';

  constructor(private http: HttpClient) { }

  getMarcas(tipo: string): Observable<Marca[]> {
    const url = `${this.apiUrl}/${tipo}/marcas`;
    return this.http.get<Marca[]>(url);
  }

  getModelos(tipo: string, idMarca: string): Observable<RespostaModelos> {
    const url = `${this.apiUrl}/${tipo}/marcas/${idMarca}/modelos`;
    return this.http.get<RespostaModelos>(url);
  }

  getAnos(tipo: string, idMarca: string, idModelo: number): Observable<Ano[]> {
    const url = `${this.apiUrl}/${tipo}/marcas/${idMarca}/modelos/${idModelo}/anos`;
    return this.http.get<Ano[]>(url);
  }

  getValor(tipo: string, idMarca: string, idModelo: number, idAno: string): Observable<Valor> {
    const url = `${this.apiUrl}/${tipo}/marcas/${idMarca}/modelos/${idModelo}/anos/${idAno}`;
    return this.http.get<Valor>(url);
  }
}
