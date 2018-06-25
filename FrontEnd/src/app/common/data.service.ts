import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

// // *** local host****/
  getUserDetail()
  {
    // return this.http.get("http://localhost:3000/getCarLast")
    return this.http.get("http://localhost:3000/getCarLast")
  }
  addUser(item){
    return this.http.post("http://localhost:3000/saveCar",item)
    // return this.http.post("http://localhost:3000/saveCar",item)
  }

  // // deployed heroku server

  // getUserDetail()
  // {
  //   return this.http.get("https://usedcarsexam.herokuapp.com/getCarLast")
  // }
  // addUser(item){
  //   return this.http.post("https://usedcarsexam.herokuapp.com/saveCar",item)
  // }

}


