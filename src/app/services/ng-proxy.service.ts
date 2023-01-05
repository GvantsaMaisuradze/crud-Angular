import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LogIn } from '../models/logIn.model';

@Injectable({
  providedIn: 'root'
})
export class NgProxyService {

  constructor(private httpClient:HttpClient) { 
  }

  getAllServices():any{
    var fullUrl:string = `${environment.apiBaseUrl}/api/brands`
      return this.httpClient.get(fullUrl);
  }

  logIn(logInUserData:LogIn):any{
    var fullUrl:string = `${environment.apiBaseUrl}/api/User/LogIn`
    var headers = new HttpHeaders({'content-type':'application/json'})
    return this.httpClient.post(fullUrl,logInUserData,{headers:headers})
  }

  deleteService(id:number){
    var fullUrl:string = `${environment.apiBaseUrl}/api/brands/${id}`
    var jwt = JSON.parse(localStorage['jwt']).jwt
    var headers = new HttpHeaders().set('Authorization','bearer ${jwt}');
    return this.httpClient.delete(fullUrl,{headers:headers});
  }

  updateServiceInfo(serviceData:any):any{
    var fullUrl:string = `${environment.apiBaseUrl}/api/brands`
    var jwt = JSON.parse(localStorage['jwt']).jwt;
    var headers = new HttpHeaders()
    .set('Authorization','bearer ${jwt}')
    .set('content-type','application/json');
    return this.httpClient.put(fullUrl,serviceData,{headers:headers})
  }
}
