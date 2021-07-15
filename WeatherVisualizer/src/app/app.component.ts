import { Component  } from '@angular/core';
import { Style } from './dataInterfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherVisualizer';
  curStyle: Style;

  constructor () {
    this.curStyle = {
      'primClr':'#1976d2',
      'secnCld':'#d27519',
      'bgndClr':'#f0f0f0',
      'textClr':'#000000',
      'txt2Clr':'#FFFFFF',
      'buttonOnClr':'#24619e',
      'buttonOffClr':'#147ee9'
    }
  }

  changeStyle($event: Style)
  {
    this.curStyle = $event;
    document.body.style.backgroundColor = this.curStyle.bgndClr;
  }
}