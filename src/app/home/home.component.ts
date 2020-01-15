import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  myArray: any = [];
  Currentuser: any = {};
  user: any = "";
  index: any = "";

  constructor() {}

  ngOnInit() {
    var retreivedUsers = localStorage.getItem("users");

    this.myArray = JSON.parse(retreivedUsers);
  }
  debugger;

  showModal(i) {
    this.Currentuser = this.myArray[i];
  }

  confirmDelete(i) {
    debugger;
    this.Currentuser = this.myArray[i];
    this.index = i;

    console.log(this.myArray);
  }

  deleteData(index) {
    debugger;
    this.myArray.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(this.myArray));
  }

  updateData() {
    console.log(this.myArray);
    localStorage.setItem("users", JSON.stringify(this.myArray));
    console.log(this.myArray);
  }
}
