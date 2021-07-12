export interface CityDataInterface
{
	Country: string,
	City: string,
	CityId: string
}

export interface WeatherData
{
city: {
	lang: string,
	cityName: string,
	cityLatitude: string,
	cityLongitude: string,
	cityId: number,
	isCapital: boolean,
	stationName: string,
	tourismURL: string,
	tourismBoardName: string,
	isDep: boolean,
	timeZone: string,
	isDST: string,
	member: {
		memId: number,
		memName: string,
		shortMemName: string,
		url: string,
		orgName: string,
		logo: string,
		ra: number
	},
	forecast: {
		issueDate: string,
		timeZone: string,
		forecastDay: [
			{forecastDate: string, wxdesc: string, weather: string, minTemp: string, maxTemp: string, minTempF: string, maxTempF: string, weatherIcon: number},
			{forecastDate: string, wxdesc: string, weather: string, minTemp: string, maxTemp: string, minTempF: string, maxTempF: string, weatherIcon: number},
			{forecastDate: string, wxdesc: string, weather: string, minTemp: string, maxTemp: string, minTempF: string, maxTempF: string, weatherIcon: number},
			{forecastDate: string, wxdesc: string, weather: string, minTemp: string, maxTemp: string, minTempF: string, maxTempF: string, weatherIcon: number},
			{forecastDate: string, wxdesc: string, weather: string, minTemp: string, maxTemp: string, minTempF: string, maxTempF: string, weatherIcon: number}
		]
	},
	climate: {
		raintype: string,
		raindef: string,
		rainunit: string,
		datab: number,
		datae: number,
		tempb: string,
		tempe: string,
		rdayb: string,
		rdaye: string,
		rainfallb: string,
		rainfalle: string,
		climatefromclino: string,
		climateMonth: [
			{month: number, maxTemp: string, minTemp: string, meanTemp: any, maxTempF: string, minTempF: string, meanTempF: any, raindays: string, rainfall: string, climateFromMemDate: string},
			{month: number, maxTemp: string, minTemp: string, meanTemp: any, maxTempF: string, minTempF: string, meanTempF: any, raindays: string, rainfall: string, climateFromMemDate: string},
			{month: number, maxTemp: string, minTemp: string, meanTemp: any, maxTempF: string, minTempF: string, meanTempF: any, raindays: string, rainfall: string, climateFromMemDate: string},
			{month: number, maxTemp: string, minTemp: string, meanTemp: any, maxTempF: string, minTempF: string, meanTempF: any, raindays: string, rainfall: string, climateFromMemDate: string},
			{month: number, maxTemp: string, minTemp: string, meanTemp: any, maxTempF: string, minTempF: string, meanTempF: any, raindays: string, rainfall: string, climateFromMemDate: string},
			{month: number, maxTemp: string, minTemp: string, meanTemp: any, maxTempF: string, minTempF: string, meanTempF: any, raindays: string, rainfall: string, climateFromMemDate: string},
			{month: number, maxTemp: string, minTemp: string, meanTemp: any, maxTempF: string, minTempF: string, meanTempF: any, raindays: string, rainfall: string, climateFromMemDate: string},
			{month: number, maxTemp: string, minTemp: string, meanTemp: any, maxTempF: string, minTempF: string, meanTempF: any, raindays: string, rainfall: string, climateFromMemDate: string},
			{month: number, maxTemp: string, minTemp: string, meanTemp: any, maxTempF: string, minTempF: string, meanTempF: any, raindays: string, rainfall: string, climateFromMemDate: string},
			{month: number, maxTemp: string, minTemp: string, meanTemp: any, maxTempF: string, minTempF: string, meanTempF: any, raindays: string, rainfall: string, climateFromMemDate: string},
			{month: number, maxTemp: string, minTemp: string, meanTemp: any, maxTempF: string, minTempF: string, meanTempF: any, raindays: string, rainfall: string, climateFromMemDate: string},
			{month: number, maxTemp: string, minTemp: string, meanTemp: any, maxTempF: string, minTempF: string, meanTempF: any, raindays: string, rainfall: string, climateFromMemDate: string}
		]
	}
}
}