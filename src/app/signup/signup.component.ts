import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signupusers:any[]=[];
  signupobj:any={
    name:'',
    email:'',
    password:''

  };

  constructor(){};
  ngOnInit(): void {

    

  }
  onSignUp(){
    this.signupusers.push(this.signupobj)
    localStorage.setItem('signupusers',JSON.stringify(this.signupusers));
    this.signupobj={
      name: '',
      email: '',
      password:''
    } 
   
  };
    

}
