import { Component, OnInit } from '@angular/core';
import { WeatherData, CityDataInterface } from '../weather';

@Component({
  selector: 'app-weatherDisplay',
  templateUrl: './weatherDisplay.component.html',
  styleUrls: ['./weatherDisplay.component.css', '../app.component.css']
})
export class WeatherDisplayComponent implements OnInit {

  forecastSize = 0;

  showContriesDD: boolean = false;
  showFarenheit: boolean = false;
  showIconifyIcons: boolean = true;

  buttonOnClr: string = '#24619e';
  buttonOffClr: string = '#147ee9';

  input: string = '';
  chosenId: string = '';

  arr: WeatherData[] = [];

  cityDataArr: CityDataInterface[] = [];

  constructor() { }

  ngOnInit() {
    // this.input = '303';
    // this.getDataFromSite(this.input);
    this.getCityData();
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

  getDataFromSite(cityCode: string) {
    let that = this;

    if (cityCode == '-1') {
      that.arr = [];
      return;
    }

    fetch('http://localhost:3000/pipe/https://worldweather.wmo.int/en/json/' + cityCode + '_en.json')
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        that.arr = [myJson];
        // that.arr.push(myJson);
        that.forecastSize = that.arr[0].city.forecast.forecastDay.length;
        // console.log(that.arr)
      });
  }

  printData(value: string) {
    if (!value)
      return 'No data'
    return value
  }

  //Add input validation and a switch statement to go thru the cities in https://worldweather.wmo.int/en/json/full_city_list.txts
  onEnter(value: string) {
    this.getDataFromSite(value);
  }

  takeCityCode(CityCode: string) {
    this.getDataFromSite(CityCode);
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
      case 'Sunny Intervals':
      case 'No Rain':
      case 'Clearing':
      case 'Sunny Periods':
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
        return baseSrc + 'question-solid.svg';
    }
  }

  resolveWeatherIconIconify(value: string) {
    let baseSrc = '../../assets/Weather Icons - Iconify/';
    switch (value) {
      case 'Sand':
      case 'Dust':
      case 'Windy':
      case 'Squall':
      case 'Gale':
      case 'Blowing':
        return baseSrc + 'weather-windy.svg';

      case 'Sandstorm':
      case 'Duststorm':
      case 'Sandstorm':
        return baseSrc + 'weather-tornado.svg';


      case 'Hail':
        return baseSrc + 'weather-hail.svg';

      case 'Snow':
      case 'Snow Showers':
      case 'Flurries':
      case 'Light Snow':
        return baseSrc + 'weather-snowy.svg';

      case 'Blizzard':
      case 'Snowdrift':
      case 'Heavy Snow':
      case 'Snowfall':
        return baseSrc + 'weather-snowy-heavy.svg';

      case 'Sleet':
        return baseSrc + 'weather-snowy-rainy.svg';

      case 'Showers':
      case 'Heavy Showers':
      case 'Rainshower':
        return baseSrc + 'weather-pouring.svg';

      case 'Thunderstorms':
      case 'Thundershowers':
      case 'Storm':
      case 'Stormy':
        return baseSrc + 'weather-lightning-rainy.svg';

      case 'Lightning':
        return baseSrc + 'weather-lightning.svg';

      case 'Occasional Showers':
      case 'Scattered Showers':
      case 'Isolated Showers':
      case 'Light Showers':
        return baseSrc + 'weather-partly-rainy.svg';

      case 'Freezing Rain':
        return baseSrc + 'weather-hail.svg';

      case 'Drizzle':
      case 'Light Rain':
      case 'Rain':
        return baseSrc + 'weather-rainy.svg';

      case 'Wet':
      case 'Humid':
        return baseSrc + 'water-percent.svg';

      case 'Fog':
      case 'Mist':
        return baseSrc + 'weather-fog.svg';

      case 'Smoke':
      case 'Haze':
        return baseSrc + 'weather-haze.svg';

      case 'Overcast':
        return baseSrc + 'cloud.svg';
      case 'Cloudy':
      case 'Mostly Cloudy':
        return baseSrc + 'cloud-outline.svg';

      case 'Sunny Intervals':
      case 'No Rain':
      case 'Clearing':
      case 'Sunny Periods':
      case 'Partly Cloudy':
      case 'Partly Bright':
      case 'Mild':
        return baseSrc + 'weather-partly-cloudy.svg';

      case 'Bright':
      case 'Sunny':
      case 'Fair':
      case 'Fine':
      case 'Clear':
        return baseSrc + 'weather-sunny.svg';

      case 'Cool':
        return baseSrc + 'thermometer-low.svg';

      case 'Chilly':
      case 'Cold':
        return baseSrc + 'snowflake.svg';

      case 'Frost':
      case 'Freezing':
        return baseSrc + 'snowflake-alert.svg';

      case 'Warm':
        return baseSrc + 'thermometer-high.svg';

      case 'Hot':
      case 'Dry':
        return baseSrc + 'weather-sunny-alert.svg';

      case 'Volcanic Ash':
        return baseSrc + 'mushrooom.svg';

      default:
        return baseSrc + 'cloud-question.svg';
    }
  }
}
