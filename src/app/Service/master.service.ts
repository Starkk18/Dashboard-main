import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { Iactivation_steps } from '../Interface/activation_steps';
import { Ianalytic_card } from '../Interface/top_analytics_cards';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  getData(){
    return axios.get(this.API);
 }

  API:string = "http://fy24et02.ifelsecloud.workers.dev/";

  
}
