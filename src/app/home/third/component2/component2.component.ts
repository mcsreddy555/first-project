import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  data1:any;
  constructor(private service:DataService) {
    service.dataTransfer.subscribe((res)=>{
      this.data1=res
    })
  }

  onClick1(data:any){
    this.service.dataTransfer.next(data.value)
  }

  ngOnInit(): void {
  }

}
