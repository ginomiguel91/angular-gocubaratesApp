import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { RateReport } from '../interfaces/rates.interface';

@Injectable({
  providedIn: 'root',
})
export class RatesService {
  _baseUrl: string = environment.apiUrl;
  _symbols: string[] = ['usd', 'cad', 'eur', 'cup'];
  constructor(private http: HttpClient) {}

  /* Devuelve las tarifas diarias informales para la moneda seleccionada. */
  getInformalDailyRates(coin: string): Observable<RateReport> {
    const url = `${this._baseUrl}/api/v2/informal/source/${coin}.json`;
    return this.http.get<RateReport>(url);
  }
  /* Devuelve las tasas diarias informales invertidas para la moneda seleccionada */
  getInvertedInformalDailyRates(coin: string): Observable<RateReport> {
    const url = `${this._baseUrl}/api/v2/informal/target/${coin}.json`;
    return this.http.get<RateReport>(url);
  }

  /* Devuelve las tarifas diarias formales para la moneda seleccionada. */
  getFormalDailyRates(coin: string): Observable<RateReport> {
    const url = `${this._baseUrl}/api/v2/formal/source/${coin}.json`;
    return this.http.get<RateReport>(url);
  }
  /* Devuelve las tasas diarias formales invertidas para la moneda seleccionada */
  getInvertedFormalDailyRates(coin: string): Observable<RateReport> {
    const url = `${this._baseUrl}/api/v2/formal/target/${coin}.json`;
    return this.http.get<RateReport>(url);
  }

  get coins() {
    return [...this._symbols]; //creando una copia
  }
}
