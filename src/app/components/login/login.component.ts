import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  registerForm! : FormGroup;
  activeForm: string = 'Login';

  constructor(private router: Router, private loginService:LoginService) { }

  switchForm(formType: string): void {
    this.activeForm = formType;
  }


  signIn() {
    if (!this.loginForm.valid) {
      return;
    };

    const loginData = {
      Username:this.loginForm.value.Username,
      Password:this.loginForm.value.Password
    };
    this.loginService.login(loginData).subscribe((res)=>{
      console.log(res);
      localStorage.setItem("Username",loginData.Username);
      
    })
    
    // const Username = this.loginForm.value.Username
    // const pass = this.loginForm.value.pass;
    // console.log(Username);
    // console.log(pass);
    // localStorage.setItem("Username",Username);
    this.router.navigate(['/home']).then(()=>{
      window.location.reload();
    })
  }

  SignUp(){
    if (!this.registerForm.valid) {
      console.log('Form is invalid');
      return;
    }
    console.log('Form is valid');
    const Username = this.registerForm.value.Username
    const pass = this.registerForm.value.pass;
    const repass = this.registerForm.value.repass;
    console.log(Username,pass,repass);
    
    this.activeForm = 'Login';
  }

  loginUsername(): string | null {
    const Username = this.loginForm.get('Username');
    if (Username?.touched && !Username.valid) {
      if (Username.errors?.['required']) {
        return 'Username is required';
      }
    }
    return null;
  }

  loginPassword(): string | null {
    const Password = this.loginForm.get('Password');
    if (Password?.touched && !Password.valid) {
      if (Password.errors?.['required']) {
        return 'Password is required';
      }
      if (Password.errors?.['minlength']) {
        return 'Minimum 6 characters required';
      }
    }
    return null;
  }

  regUsername() {
    const Username = this.registerForm.get('Username');
    if (Username?.touched && !Username.valid) {
      if (Username.errors?.['required']) {
        return 'Username is required';
      }
    }
    return null;
  }

  regPassword() {
    const pass = this.registerForm.get('pass');
    if (pass?.touched && !pass.valid) {
      if (pass.errors?.['required']) {
        return 'Password is required';
      }
      if (pass.errors?.['minlength']) {
        return 'Minimum 6 charecter Required';
      }
    }
    return null;
  }
  regrepass(){
    const pass = this.registerForm.get('pass');
    const repass = this.registerForm.get('repass');
    if (pass?.touched && !pass.valid) {
      if (pass.errors?.['required']) {
        return 'Password is required';
      }
    }
    if (pass?.value && repass?.value && pass.value !== repass.value) {
      return 'Password Not Maching';
    }
    return null;
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      Username: new FormControl(null, [Validators.required,]),
      Password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
    this.registerForm = new FormGroup({
      Username: new FormControl(null, [Validators.required,]),
      pass: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      repass: new FormControl(null,[Validators.required,Validators.minLength(6)])
    });
  }
}
