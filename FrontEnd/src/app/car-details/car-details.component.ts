import { Component, OnInit } from '@angular/core';
import { Car } from '../common/car.model';
import { DataService } from '../common/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  step:string
  userObject:Car


  constructor( private dataService : DataService, private route: Router)
  {

  }

  ngOnInit() {    this.step="1"
  this.userObject= new Car;
  }
  
  moveToStep2(user){
    console.log(user)
    this.step = "2"
  } 
  
  submitForm(user){
    console.log(this.userObject)
    this.dataService.addUser(this.userObject)
      .subscribe(data => {
        console.log(data)
        this.route.navigate(["/summary"]);
      },
    err=>{
      console.log("error",err)
    })
  }
}