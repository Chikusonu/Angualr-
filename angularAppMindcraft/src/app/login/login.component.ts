
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    UserName : new FormControl('',[Validators.required , Validators.minLength (3)]),
    Password : new FormControl('',[Validators.required , Validators.minLength (3)]),
  })

  IsAuthenticationFailed : boolean;

  constructor(private router :Router, private httpClient:HttpClient){
    this.IsAuthenticationFailed=false;
  }

  login(){
    this.httpClient.post("http://localhost:4000/signin", this.loginForm.value).subscribe((response : object) => {
      /*    if you check signin method in server.js code
            either will return token or will return error   */
        //console.log(Object.keys(response)  )              
        if (Object.keys(response)[0] != "token"){
               this.IsAuthenticationFailed=true
        }
        else {
                localStorage.setItem("token",JSON.stringify(Object.values(response)));
                let username=this.loginForm.controls.UserName.value;
                localStorage.setItem("UserName",JSON.stringify(username));
                this.router.navigate(['customer'])
        }
      })
    
}
}


