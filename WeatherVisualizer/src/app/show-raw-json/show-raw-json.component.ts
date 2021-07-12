import { Component, OnInit } from '@angular/core';
import { WeatherData, CityDataInterface } from '../weather';

@Component({
  selector: 'app-show-raw-json',
  templateUrl: './show-raw-json.component.html',
  styleUrls: ['./show-raw-json.component.css']
})
export class AppShowRawJsonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.input = '303';
    this.getDataFromSite();
    this.getCityData();
  }

  getCityData() {
    let that = this;

    fetch('http://localhost:3000/pipe/https://worldweather.wmo.int/en/json/full_city_list.txt')
      .then(function (response) {
        response.text().then(txt => {

          let lines = txt.split(/\n/gi)

          for (let line of lines) {
            //console.log(line);
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

  dropDownChangeHandler() {
    console.log(this.input);
    this.getDataFromSite();
  }

  getDataFromSite() {
    let data = ''
    let that = this;

    fetch('http://localhost:3000/pipe/https://worldweather.wmo.int/en/json/' + this.input + '_en.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        that.arr = [myJson];
        console.log(that.arr)
      });
  }

  //Add input validation and a switch statement to go thru the cities in https://worldweather.wmo.int/en/json/full_city_list.txts
  onEnter(value: string) {
    this.input = value;
    this.getDataFromSite();
  }

  resolveWeatherIcon(value: string) {
    let baseSrc = '../../assets/Weather Icons/';
    switch (value) {
      case 'Sandstorm':
      case 'Duststorm':
      case 'Sand':
      case 'Dust':
      case 'Windy':
      case 'Squall':
      case 'Stormy':
      case 'Gale':
      case 'Dry':
        return baseSrc + 'wind-solid.svg';
      case 'Hail':
      case 'Blowing':
      case 'Snow':
      case 'Blizzard':
      case 'Snowdrift':
      case 'Snow Showers':
      case 'Flurries':
      case 'Heavy Snow':
      case 'Snowfall':
      case 'Light Snow':
        return baseSrc + 'snowflake-regular.svg';
      case 'Sleet':
      case 'Showers':
      case 'Heavy Showers':
      case 'Rainshower':
        return baseSrc + 'cloud-showers-heavy-solid.svg';
      case 'Thunderstorms':
      case 'Thundershowers':
      case 'Storm':
      case 'Lightning':
        return baseSrc + 'bolt-solid.svg';
      case 'Occasional Showers':
      case 'Scattered Showers':
      case 'Isolated Showers':
      case 'Light Showers':
      case 'Freezing Rain':
      case 'Sandstorm':
      case 'Rain':
      case 'Drizzle':
      case 'Light Rain':
      case 'Wet':
      case 'Humid':
        return baseSrc + 'cloud-rain-solid.svg';
      case 'Fog':
      case 'Mist':
      case 'Smoke':
      case 'Haze':
        return baseSrc + 'smog-solid.svg';
      case 'Overcast':
      case 'Cloudy':
      case 'Mostly Cloudy':
        return baseSrc + 'cloud-solid.svg';
      case 'Sunny Periods':
      case 'No Rain':
      case 'Clearing':
      case 'Partly Cloudy':
      case 'Partly Bright':
      case 'Mild':
        return baseSrc + 'cloud-sun-solid.svg';
      case 'Bright':
      case 'Sunny':
      case 'Fair':
      case 'Fine':
      case 'Clear':
        return baseSrc + 'sun-solid.svg';
      case 'Freezing':
      case 'Frost':
      case 'Cold':
      case 'Chilly':
      case 'Cool':
        return baseSrc + 'temperature-low-solid.svg';
      case 'Hot':
      case 'Warm':
      case 'Volcanic Ash':
        return baseSrc + 'temperature-high-solid.svg';
      default:
        return baseSrc + 'sun-solid.svg';
    }
  }

  cityDataArr: CityDataInterface[] = [];

  showContriesDD: boolean = false;

  showFarenheit: boolean = false;

  input: string = '';

  chosenId: string = '';

  arr: WeatherData[] = [];
}
