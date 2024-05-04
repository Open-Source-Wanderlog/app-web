import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FlightsApiService {

  constructor(private http: HttpClient) { }

  getSources(){
    return this.http.get('https://my-json-server.typicode.com/Open-Source-Wanderlog/Consultation/popularDestinations')
  }

  getSpecialOffers(){
    return this.http.get('https://my-json-server.typicode.com/Open-Source-Wanderlog/Consultation/specialOffers')
  }

}

