import { Component, Input, OnInit, OnChanges, SimpleChanges, SimpleChange, DoCheck } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, OnChanges, DoCheck {

  constructor() { }
  @Input() myNumber:any;

  ngOnChanges(changes: SimpleChanges){
    const newNumber:SimpleChange=changes.myNumber;
    console.log("ngOnChanges()  ==>Previous Value :"+ newNumber.previousValue)
    console.log("ngOnChanges()  ==>Current Value :" + newNumber.currentValue)
    
  }

  ngOnInit(): void {
    console.log("ngOnInit()  ==> Value :"  +this.myNumber)
    
  }

  ngDoCheck(){
    console.log("ngDoCheck()  ==> value : " + this.myNumber)
  }


  ngAfterContentInit(){
    console.log("ngAfterContentInit() --calls one time")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked()  --calls every time")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit() --calls only one time after ngAftercontent Checked")
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked() -------calls every time")
  }

  ngOnDestroy(){
    console.log("ngOnDestroy()")
  }

  
}
