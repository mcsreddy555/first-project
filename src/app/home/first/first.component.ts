import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router'

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
  public result: any;
  searchText: any;
  name: any;
  response: any;


  public getCountries(): Observable<any> {
    return this.http.get<any>("https://restcountries.eu/rest/v2/all")
  }



  ngOnInit(): void {
    this.getCountries().subscribe((posRes) => {
      this.result = posRes;
    })
  }

}
