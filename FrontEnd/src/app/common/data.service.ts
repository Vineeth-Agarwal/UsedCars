import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

// // *** local host****/
//   getUserDetail()
//   {
//     return this.http.get("http://localhost:3000/getCarLast")
//   }
//   addUser(item){
//     return this.http.post("http://localhost:3000/saveCar",item)
//   }

  // deployed heroku server

  // getUserDetail()
  // {
  //   return this.http.get("https://node-basic-create-app.herokuapp.com/getUserLast")
  // }
  // addUser(item){
  //   return this.http.post("https://node-basic-create-app.herokuapp.com/saveUser",item)
  // }

}

