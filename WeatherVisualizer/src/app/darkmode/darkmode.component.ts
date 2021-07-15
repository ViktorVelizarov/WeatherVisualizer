import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Style } from '../dataInterfaces';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.css','../app.component.css']
})
export class DarkmodeComponent implements OnInit {

@Output() emitStyle = new EventEmitter<Style>();  

  buttonOnClr: string = '#24619e';
  buttonOffClr: string = '#147ee9';
  lightmode: Style;
  darkmode: Style;
  
  isDarkMd: boolean = false;

  constructor() {
    this.lightmode = {
      'primClr':'#1976d2',
      'secnCld':'#d27519',
      'bgndClr':'#f0f0f0',
      'textClr':'#000000',
      'txt2Clr':'#FFFFFF',
      'buttonOnClr':'#24619e',
      'buttonOffClr':'#147ee9'
    }
    this.darkmode = {
      'primClr':'#1976d2',
      'secnCld':'#d27519',
      'bgndClr':'#252525',
      'textClr':'#FFFFFF',
      'txt2Clr':'#000000',
      'buttonOnClr':'#24619e',
      'buttonOffClr':'#147ee9'
    }
    this.changeMode();
  }

  changeMode()
  {
    this.emitStyle.emit(this.isDarkMd ? this.darkmode : this.lightmode);
  }

  ngOnInit() {
  }

}
