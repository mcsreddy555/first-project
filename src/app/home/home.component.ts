import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  public result: any;
  searchText: any;
  name: any;
  response: any;

  public myNumber:number=25;
  isVisible:boolean=true;

  public getCountries(): Observable<any> {
    return this.http.get<any>("https://restcountries.eu/rest/v2/all")
  }



  ngOnInit(): void {
    this.getCountries().subscribe((posRes) => {
      this.result = posRes;
    })
  }


  

  add1() {
    this.router.navigate(['../home/first'])
  }

  // add2() {
  //   this.router.navigate(['../home/second'])
  // }

  get counter(){
    return this.myNumber;
  }
  set counter(value){
    this.myNumber=value;
  }

  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }

  switchVisible(){
    this.isVisible=!this.isVisible
  }
}


