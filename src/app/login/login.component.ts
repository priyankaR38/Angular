import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  [x: string]: any;
  loginusers:any[]=[];
  loginobj:any={
    email:'',
    password:''
  };
  constructor(){};
  ngOnInit(): void {
    const localdata=localStorage.getItem('signupusers');
    if(localdata!=null){
      this['signupusers']=JSON.parse(localdata);
    }
    
  }
  onLogin(){
    if(this.loginobj.email=='' || this.loginobj.password==''){
      alert('Please Enter Email And Password');

  }
  const ifuserExist=this['signupusers'].find((m: { email: any; password: any; }) => m.email==this.loginobj.email && m.password==this.loginobj.password);
  if(ifuserExist!=undefined){
    alert('Login Successfull');
  }
  else{
    alert('invalid creditials');
  }
}
}


