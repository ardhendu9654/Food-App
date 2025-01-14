import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, pipe, tap } from 'rxjs';
import { User } from '../Models/user';
import { IUserLogin } from 'src/interfaces/IUserLogin';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;
  private apiUrl = 'http://localhost:5000/api/users/login';
  // private apiUrl2 ='http://localhost:4500/foods';

  constructor(private http: HttpClient, private toastrService:ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  public get currentUser():User{
    return this.userSubject.value;
  }

  login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(this.apiUrl,userLogin).pipe(
      tap({
        next:(user) =>{
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `welcome to FoodFantasy &{user.Username}!`,
            'login Successful'
          )
        },
        error: (errorResponse)=>{
          this.toastrService.error(errorResponse.error,'Login Failed');
        }
      })
    );
  }

  private setUserToLocalStorage(user:User){
    localStorage.setItem('User',JSON.stringify(user));
  }

  private getUserFromLocalStorage():User{
    const userJson = localStorage.getItem('User');
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }
}
