import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  constructor(private http : HttpClient){

  }

  GetData(name : string){
    return this.http.get('https://api.api-ninjas.com/v1/dogs?name=' + name, {headers: { 'X-Api-Key': '1/AE6se4xBMw23JE9k3QwA==yvPmFc1ocltdtI2Q'}})
  }
}
