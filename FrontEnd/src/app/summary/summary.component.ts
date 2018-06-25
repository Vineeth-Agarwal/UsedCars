import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  report : any
  constructor(private dataService : DataService ) { }

  ngOnInit() {
    this.dataService.getUserDetail().subscribe(
      (data:any)=>{
        console.log(data)
        this.report = data.data
      },
      err=>{
        console.log(err)
      }
    )
  }

}
