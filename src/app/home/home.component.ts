import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myArray: any = [];
  Currentuser: any = {};
  activeIndex: any;

  constructor() { }

  ngOnInit() {
    var retreivedUsers = localStorage.getItem('users');
    this.myArray = JSON.parse(retreivedUsers);
  }


  showModal(i) {
    // this.Currentuser = this.myArray[i];
    this.activeIndex = i;
    this.Currentuser = Object.assign({}, this.myArray[i]);
  }


  deleteData(i) {
    this.myArray.splice(i, 1);
    localStorage.setItem('users', JSON.stringify(this.myArray));
    console.log(this.myArray);
  }


  updateData() {
    this.myArray[this.activeIndex] = this.Currentuser;
    localStorage.setItem('users', JSON.stringify(this.myArray));
    console.log(this.myArray);
  }

}
