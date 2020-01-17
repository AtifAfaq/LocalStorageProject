import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  Login: FormGroup;
  email: string = "";
  password: string = "";
  myArray: any = [];

  constructor(public fb: FormBuilder, public router: Router) { }


  ngOnInit() {
    this.Login = this.fb.group({
      email: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])]
    });
  }


  login() {
    var retreivedUsers = localStorage.getItem("users");
    this.myArray = JSON.parse(retreivedUsers);

    // for (var i = 0; i < this.myArray.length; i++) {
    //   if (this.myArray[i].email == this.email && this.myArray[i].password == this.password) {
    //     alert('Logged In Successfully!');
    //     this.router.navigate(['/home']);
    //     var userFound = true;
    //     break;
    //   }
    // }
    // if (!userFound) {
    //   alert('Invalid Email or Password!');
    // }

    var userFound = false;
    this.myArray.map(x => {
      if (!userFound) {
        if (x.email == this.email && x.password == this.password) {
          alert("Successfully Logged in");
          this.router.navigate(["/home"]);
          userFound = true;
        }
      }
    });
    if (!userFound) {
      alert('Invalid Email or Password!');
    }
  }

}
