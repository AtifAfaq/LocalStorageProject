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
  constructor(public fb: FormBuilder, public router: Router) {}

  ngOnInit() {
    this.Login = this.fb.group({
      email: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])]
    });
  }
  login() {
    debugger;
    var retreivedUsers = localStorage.getItem("users");
    this.myArray = JSON.parse(retreivedUsers);
    this.myArray.map(x => {
      if (x.email == this.email && x.password == this.password) {
        alert("Successhully Logged in");
        this.router.navigate(["/home"]);
      } else {
        alert("Invalid Email or password");
      }
    });
  }
}
