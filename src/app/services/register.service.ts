import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiurl = 'http://localhost:4500/register';

  constructor(private http:HttpClient) { }

  register(data:any):Observable<any>{
    return this.http.post(this.apiurl,data)
  }
}
