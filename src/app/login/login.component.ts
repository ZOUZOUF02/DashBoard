import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email : string = ''
  password : string = ''
  emailvalid : boolean = false
  pwdvalid : boolean = false
  require : boolean = false
  FormData : any;
  constructor(private authService : AuthService, private router : Router) { }

   ngOnInit() {
      this.FormData = new FormGroup({
         email : new FormControl("admin"),
         password: new FormControl("admin"),
      });
   }

   Login() {
      console.log('tried login')
      // console.log("Login page: " + this.email);
      // console.log("Login page: " + this.password);

      this.authService.login(this.email, this.password)
         .subscribe( data => { 
            console.log("Is Login Success: " + data); 
      
           if(data)
           { 
            this.router.navigate(['/Home']);
         }
         else
         {
            this.router.navigate(['/**'])
         } 
      });
   }
}
