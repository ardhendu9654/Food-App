import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  registerForm!: FormGroup;
  activeForm: string = 'Login';
  isSubmited = false;
  returnUrl = "";

  constructor(private router: Router, private userService: UserService, private registerService: RegisterService, 
    private activatedRoute:ActivatedRoute,) { }

  switchForm(formType: string): void {
    this.activeForm = formType;
  }


  signIn() {
    this.isSubmited = true;
    if (!this.loginForm.valid) {
      return;
    };

    const loginData = {
      Username: this.loginForm.value.Username,
      Password: this.loginForm.value.Password
    };

    this.userService.login(loginData).subscribe(() => {
      this.router.navigate(['/home']);
      // if (res.message === 'Login successful') {
      //   localStorage.setItem("isLogedIn", "true");
      //   localStorage.setItem("Username", loginData.Username);
      //   // localStorage.setItem("userId", res.userId);
      //   this.router.navigate(['/home']).then(() => {
      //     window.location.reload();
      //   })
      // } else {
      //   localStorage.setItem("isLogedIn", "false");
      //   alert(res.message);
      // }
      // (error: any) => {
      //   console.error('Error logging in:', error);
      //   localStorage.setItem("isLogedIn", "false");
      //   alert('An error occurred during login. Please try again.');
      // }
    })
  }

  SignUp() {
    if (!this.registerForm.valid) {
      console.log('Form is invalid');
      return;
    }
    const registerData = {
      Username: this.registerForm.value.Username,
      Email: this.registerForm.value.Email,
      Mobile: this.registerForm.value.Mobile,
      Password: this.registerForm.value.pass
    }
    this.registerService.register(registerData).subscribe((res) => {
      console.log(res);

    })
    const Username = this.registerForm.value.Username
    const pass = this.registerForm.value.pass;
    const repass = this.registerForm.value.repass;
    console.log(Username, pass, repass);

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

  regemail() {
    const Email = this.registerForm.get('Email');
    if (Email?.touched && !Email.valid) {
      if (Email.errors?.['required']) {
        return 'Email is required';
      }
      if (Email.errors?.['email']) {
        return 'Should be Email type';
      }
    }
    return null;
  }

  regMobile() {
    const Mobile = this.registerForm.get('Mobile');
    if (Mobile?.touched && !Mobile.valid) {
      if (Mobile.errors?.['required']) {
        return 'Mobile is required';
      }
      if (Mobile.errors?.['pattern']) {
        return 'Enter 10 number';
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
  regrepass() {
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

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;

    this.registerForm = new FormGroup({
      Username: new FormControl(null, [Validators.required,]),
      Email: new FormControl(null, [Validators.required, Validators.email]),
      Mobile: new FormControl(null, [Validators.required, Validators.maxLength(10),
      Validators.pattern('^[0-9]{10}$')]),
      pass: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      repass: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  get fc(){
    return this.loginForm.controls;
  }
}
