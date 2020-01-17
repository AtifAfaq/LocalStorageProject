import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"]
})
export class FormsComponent implements OnInit {

  SignUp: FormGroup;
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  password: string = "";
  myArray: any = [];
  array: any = [];
  userHai: boolean = false;

  constructor(public fb: FormBuilder, public router: Router) { }

  ngOnInit() {
    this.SignUp = this.fb.group({
      firstName: ["", Validators.compose([Validators.required])],
      lastName: ["", Validators.compose([Validators.required])],
      email: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])]
    });
  }


  saveToLocal() {
    var User: any = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };

    // first get from local storage
    debugger;
    var retreivedUsers = localStorage.getItem("users");
    this.myArray = JSON.parse(retreivedUsers);
    if (!this.myArray) {
      this.myArray = [];
    }
    debugger;
    this.myArray.map(x => {
      if (x.email == this.email) {
        alert("Email Already in used");
        this.userHai = true;
        return;
      }
    });

    if (!this.userHai) {
      this.myArray.push(User);
      localStorage.setItem("users", JSON.stringify(this.myArray));
      this.router.navigate(["/home"]);
      this.SignUp.reset();
      console.log(this.myArray);
      //  to view the array
      // var mydata = localStorage.getItem('users');
      // this.array = JSON.parse(mydata);
    }
  }

  // setTimeout(() => {
  //   localStorage.setItem('myArray', JSON.stringify(this.persons));
  // }, 5000);

  // var myArray = localStorage.getItem('myArray');
  // this.persons = JSON.parse(myArray);

  // updateName(mainInd, index) {
  // this.persons[mainInd].interests[index].name = 'Atif';}
}
