import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl:any='http://localhost:1337/';
  constructor(
    public http:HttpClient
  ) { }

httpOptions:any;
 getToken()
 {
   var tokenKey=localStorage.getItem('appToken');
   if(tokenKey!=null)
   {
     var tkn=JSON.parse(tokenKey);
     this.httpOptions={
       headers:new HttpHeaders({
         'Content-Type': 'application/json',
         'Authorization': 'Bearer '+tkn.jwt
       })
     }
   }
 }

  get(url: any)
 {
   this.getToken();
   return this.http.get(this.serverUrl+url,this.httpOptions);
 }

 post(url: any,data: any)
 {
  this.getToken();
  return this.http.post(this.serverUrl+url,data,this.httpOptions);
 }

 put(url: any,data: any)
 {
  this.getToken();
  return this.http.put(this.serverUrl+url,data,this.httpOptions);
 }

delete(url: any)
 {
  this.getToken();
  return this.http.delete(this.serverUrl+url,this.httpOptions);
 }
 

 //register
 register(email: any,password: any)
 {
   return this.http.post(this.serverUrl+'auth/local/register',{email:email,password:password});
 }

 login(email: any,password: any)
 {
   return this.http.post(this.serverUrl+'auth/local',{identifier:email,password:password});
 }
}

