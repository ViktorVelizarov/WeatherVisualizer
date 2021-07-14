import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { CityDataInterface } from '../weather';

@Component({
  selector: 'app-autofill',
  templateUrl: './autofill.component.html',
  styleUrls: ['./autofill.component.css']
})
export class AutofillComponent implements OnInit {

  cityDataArr: CityDataInterface[] = [];

  cityCtrl = new FormControl();
  filteredCities: Observable<CityDataInterface[]>;

  input: string = '-1,empty';

  constructor() {
    this.getCityData();
    this.cityCtrl.setValue('Please enter a City');
    this.filteredCities = this.cityCtrl.valueChanges
      .pipe(
        startWith(''),
        map(city => city ? this._filterCities(city) : this.cityDataArr.slice())
      );
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
    let chosenCity: CityDataInterface = { "City": "NULL", "CityId": "-1", "Country": "NULL" };
    chosenCity = this.cityDataArr.find(o => o.City === value) as CityDataInterface;
    if (!chosenCity)
      chosenCity = { "City": "NULL", "CityId": "-1", "Country": "NULL" };
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
