import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://localhost:4500/login';
  private apiUrl2 ='http://localhost:4500/foods';

  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  getfoods():Observable<any>{
    return this.http.get(this.apiUrl2)
  }
}
