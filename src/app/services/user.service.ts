import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, pipe, tap } from 'rxjs';
import { User } from '../Models/user';
import { IUserLogin } from 'src/interfaces/IUserLogin';
import { ToastrService } from 'ngx-toastr';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../urls';
import { IUserRegister } from 'src/interfaces/IUserRegister';

const USER_KEY = 'User';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable:Observable<User>;

  constructor(private http: HttpClient, private toastrService:ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  public get currentUser():User{
    return this.userSubject.value;
  }

  login(userLogin:IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL,userLogin).pipe(
      tap({
        next:(user) =>{
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `welcome to FoodFantasy ${user.Username}!`,
            'login Successful'
          )
          localStorage.setItem("islogedIn","true");
        },
        error: (errorResponse)=>{
          this.toastrService.error(errorResponse.error,'Login Failed');
          localStorage.setItem("islogedIn","false");
        }
      })
    );
  }

  register(userRegiser:IUserRegister): Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL, userRegiser).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to the Foodmine ${user.Username}`,
            'Register Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error,
            'Register Failed')
        }
      })
    )
  }

  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
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
