import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  data1:any;

  constructor(private service:DataService) { 
    service.dataTransfer.subscribe((res)=>{
      this.data1=res;
    })
  }
  

  onClick(data:any){
    this.service.dataTransfer.next(data.value)
  }

  ngOnInit(): void {

  }

}
