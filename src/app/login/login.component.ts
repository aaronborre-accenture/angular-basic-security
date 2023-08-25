import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  onError: boolean = false;
  isSaved: boolean = false;
  onErrorMessage: string = '';
  username$: string = 'username';
  password$: string = 'password';
  token$: string = 'eyJhbGciOiAibm9uZSIsICJ0eXAiOiAiSldUIn0K.eyJ1c2VybmFtZSI6ImFkbWluaW5pc3RyYXRvciIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MTUxNjI0MjYyMn0.'
  
  
  constructor(private router: Router, private fb: FormBuilder){
    
  }
  form = this.fb.group({
    username: [''],
    password:[''] 
  })
  canDeactivate(): Observable<boolean> {
    if (!this.isSaved) {
      const result = window.confirm('There are unsaved changes! Are you sure?');
      return of(result); //true || false
    }
    return of(true);
  }
  onLogin(){
    this.reset();
    const username = this.form.get('username')?.value; 
    const password = this.form.get('password')?.value; 
  
    if(username === this.username$ && password === this.password$) {
      localStorage.setItem('token', this.token$)
      this.router.navigate(['/sensitive-data']);
      this.isSaved = true
      this.reset();
    }else if(!username || !password) {
      this.error('please enter your username and password!')
    }else{
      this.error('incorrect username or password!')
    }
  }

  reset(){
    this.onError = false;
    this.onErrorMessage = ''
  }
  error(message: string){
    this.onError = true;
    this.onErrorMessage = message;
  }
}
