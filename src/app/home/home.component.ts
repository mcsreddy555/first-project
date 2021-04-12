import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'One', cols: 4, rows: 3, color: 'lightblue'},
    
    {text: 'Two', cols: 2, rows: 2, color: 'lightpink'},
    {text: 'Three', cols: 2, rows: 2, color: '#DDBDF1'},
  ];

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

  add3() {
    this.router.navigate(['../home/third'])
  }

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


