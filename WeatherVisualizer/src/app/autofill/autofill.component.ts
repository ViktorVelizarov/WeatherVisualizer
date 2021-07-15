import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { CityDataInterface, Style } from '../dataInterfaces';

@Component({
  selector: 'app-autofill',
  templateUrl: './autofill.component.html',
  styleUrls: ['./autofill.component.css']
})
export class AutofillComponent implements OnInit {

@Input() curStyle: Style;

  cityDataArr: CityDataInterface[] = [];

  cityCtrl = new FormControl();
  filteredCities: Observable<CityDataInterface[]>;

  input: string = '-1,Please select a City';

  constructor() {
    this.getCityData();
    this.cityCtrl.setValue('Please enter a City');
    this.filteredCities = this.cityCtrl.valueChanges
      .pipe(
        startWith(''),
        map(city => city ? this._filterCities(city) : this.cityDataArr.slice())
      );
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

  private _filterCities(value: string): CityDataInterface[] {
    const filterValue = value.toLowerCase();

    return this.cityDataArr.filter(city => city.City.toLowerCase().includes(filterValue));
  }

  ngOnInit() {
  }

  @Output() newEvent = new EventEmitter<string>();

  returnCityCode(value: string) {
    this.newEvent.emit(value);
  }

  getCityData() {
    let that = this;

    fetch('http://localhost:3000/pipe/https://worldweather.wmo.int/en/json/full_city_list.txt')
      .then(function (response) {
        response.text().then(txt => {

          let lines = txt.split(/\n/gi)

          for (let line of lines) {
            line = line.replace(/"/gi, '');
            // This is India
            let tokens = line.split(/;/gi)

            if (tokens.length == 3) {
              that.cityDataArr.push({
                "Country": tokens[0],
                "City": tokens[1],
                "CityId": tokens[2]
              })
            }
          }
          that.cityDataArr.shift();
        });
      })
  }

  autoCompleteChangeHandler(value: string) {
    let chosenCity: CityDataInterface = { "City": "Please select a City", "CityId": "-1", "Country": "NULL" };
    chosenCity = this.cityDataArr.find(o => o.City === value) as CityDataInterface;
    if (!chosenCity)
      chosenCity = { "City": "Please select a City", "CityId": "-1", "Country": "NULL" };
    this.input = chosenCity.CityId + ',' + chosenCity.City;
    this.returnCityCode(chosenCity.CityId);
  }

  dropDownChangeHandler() {
    let inputs = this.input.split(/,/gi);
    // console.log(inputs);
    if (inputs[0] != '-1') {
      this.cityCtrl.setValue(inputs[1])
      this.returnCityCode(inputs[0]);
    }
    else {
      this.cityCtrl.setValue('Please enter a City')
      this.returnCityCode('-1');
    }
  }

}
