import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s1component1',
  templateUrl: './s1component1.component.html',
  styleUrls: ['./s1component1.component.css']
})
export class S1component1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  name = '';
  values="";
  // onKey(event: any) { // without type info
  //   this.values += event.target.value + ' | ';
  //   console.log(this.values);
  // }
  // onkeyUp(){
  //   console.log(this.name);
  // }
  display(){
    console.log(this.name);
  }

}
