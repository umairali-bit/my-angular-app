import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ObjectUnsubscribedErrorCtor } from 'rxjs/internal/util/ObjectUnsubscribedError';
import { UserDto } from '../../model/user.model';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  userDto: UserDto;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      role: new FormControl(''),
      securityQuestion: new FormControl(''),
      securityAnswer: new FormControl('')
    });
  }

  onFormSubmit(){
    console.log(this.signUpForm.value);
    this.userDto={
      name: this.signUpForm.value.name,
      role: this.signUpForm.value.role,
      securityAnswer: this.signUpForm.value.securityAnswer,
      securityQuestion: this.signUpForm.value.securityQuestion,
      encodedCredentials: btoa(this.signUpForm.value.username + '@=' + this.signUpForm.value.password)
    }
    console.log(this.userDto);
    this.authService.signUp(this.userDto).subscribe({
      next: (data) => {
        this.authService.message$.next('SignUp Success, Please Login')
        this.router.navigateByUrl('/login');
      },
      error: (e) => {

      }

    });
  }

}
