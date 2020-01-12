import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myArray: any = [];
  user: any= {};

  constructor() { }

  ngOnInit() {
    var retreivedUsers = localStorage.getItem('users');
  
    this.myArray = JSON.parse(retreivedUsers);
    
  }
  debugger;

showModal(i){
  this.user= this.myArray[i]
  debugger;
}

deleteData(i){
  this.myArray.splice(i,1);
  localStorage.setItem('users', JSON.stringify(this.myArray));
  console.log(this.myArray)
}

updateData(){
  console.log(this.myArray)
  localStorage.setItem('users', JSON.stringify(this.myArray));
debugger;
  console.log(this.myArray)
}
}
