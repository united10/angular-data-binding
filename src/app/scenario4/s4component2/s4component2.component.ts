import { Component,EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-s4component2',
  templateUrl: './s4component2.component.html',
  styleUrls: ['./s4component2.component.css']
})
export class S4component2Component implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  name="";
  @Output() sendToParent =new EventEmitter<string>();
  display(){
    this.sendToParent.emit(this.name);
  }

}
