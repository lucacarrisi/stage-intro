const { it } = require("node:test");

function weatherApp () {

    const $wrappers = document.querySelectorAll(".weather-widget");

    const data = {
        "queryCost": 1,
        "latitude": 38.893311,
        "longitude": -77.014647,
        "resolvedAddress": "20099, USA",
        "address": "Rome",
        "timezone": "America/New_York",
        "tzoffset": -4,
        "description": "Similar temperatures continuing with a chance of rain multiple days.",
        "days": [
         {
          "datetime": "2024-07-08",
          "datetimeEpoch": 1720065600,
          "tempmax": 92.9,
          "tempmin": 73.7,
          "temp": 81.7,
          "feelslikemax": 99.1,
          "feelslikemin": 73.7,
          "feelslike": 84.6,
          "dew": 69.5,
          "humidity": 67.9,
          "precip": 0.669,
          "precipprob": 57,
          "precipcover": 29.17,
          "preciptype": [
           "rain"
          ],
          "snow": 0,
          "snowdepth": 0,
          "windgust": 15,
          "windspeed": 11.8,
          "winddir": 202.7,
          "pressure": 1013.9,
          "cloudcover": 72.2,
          "visibility": 9.9,
          "solarradiation": 227.8,
          "solarenergy": 19.7,
          "uvindex": 8,
          "severerisk": 30,
          "sunrise": "05:48:24",
          "sunriseEpoch": 1720086504,
          "sunset": "20:36:45",
          "sunsetEpoch": 1720139805,
          "moonphase": 0.95,
          "conditions": "Rain, Partially cloudy",
          "description": "Partly cloudy throughout the day with storms possible.",
          "icon": "rain",
          "stations": [
           "KIAD",
           "KDCA",
           "D6279",
           "KGAI",
           "KBWI",
           "KADW"
          ],
          "source": "comb",
          "hours": [
           {
            "datetime": "12:00:00",
            "datetimeEpoch": 1720108800,
            "temp": 90.1,
            "feelslike": 94.7,
            "humidity": 50.12,
            "dew": 69,
            "precip": 0,
            "precipprob": 8,
            "snow": 0,
            "snowdepth": 0,
            "preciptype": null,
            "windgust": 6.9,
            "windspeed": 4.7,
            "winddir": 210,
            "pressure": 1014,
            "visibility": 10.1,
            "cloudcover": 50,
            "solarradiation": 846,
            "solarenergy": 3,
            "uvindex": 8,
            "severerisk": 10,
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "stations": null,
            "source": "fcst"
           },
           {
            "datetime": "13:00:00",
            "datetimeEpoch": 1720112400,
            "temp": 92,
            "feelslike": 97.1,
            "humidity": 47.11,
            "dew": 69,
            "precip": 0,
            "precipprob": 15,
            "snow": 0,
            "snowdepth": 0,
            "preciptype": null,
            "windgust": 8.1,
            "windspeed": 4.7,
            "winddir": 200,
            "pressure": 1013,
            "visibility": 10.1,
            "cloudcover": 54,
            "solarradiation": 758,
            "solarenergy": 2.7,
            "uvindex": 8,
            "severerisk": 10,
            "conditions": "Partially cloudy",
            "icon": "partly-cloudy-day",
            "stations": null,
            "source": "fcst"
           }
          ]
         },
         {
            "datetime": "2024-07-09",
            "datetimeEpoch": 1720065600,
            "tempmax": 92.9,
            "tempmin": 73.7,
            "temp": 86.7,
            "feelslikemax": 99.1,
            "feelslikemin": 73.7,
            "feelslike": 84.6,
            "dew": 69.5,
            "humidity": 67.9,
            "precip": 0.669,
            "precipprob": 57,
            "precipcover": 29.17,
            "preciptype": [
             "rain"
            ],
            "snow": 0,
            "snowdepth": 0,
            "windgust": 15,
            "windspeed": 11.8,
            "winddir": 202.7,
            "pressure": 1013.9,
            "cloudcover": 72.2,
            "visibility": 9.9,
            "solarradiation": 227.8,
            "solarenergy": 19.7,
            "uvindex": 8,
            "severerisk": 30,
            "sunrise": "05:48:24",
            "sunriseEpoch": 1720086504,
            "sunset": "20:36:45",
            "sunsetEpoch": 1720139805,
            "moonphase": 0.95,
            "conditions": "Rain, Partially cloudy",
            "description": "Partly cloudy throughout the day with storms possible.",
            "icon": "rain",
            "stations": [
             "KIAD",
             "KDCA",
             "D6279",
             "KGAI",
             "KBWI",
             "KADW"
            ],
            "source": "comb",
            "hours": [
             {
              "datetime": "12:00:00",
              "datetimeEpoch": 1720108800,
              "temp": 90.1,
              "feelslike": 94.7,
              "humidity": 50.12,
              "dew": 69,
              "precip": 0,
              "precipprob": 8,
              "snow": 0,
              "snowdepth": 0,
              "preciptype": null,
              "windgust": 6.9,
              "windspeed": 4.7,
              "winddir": 210,
              "pressure": 1014,
              "visibility": 10.1,
              "cloudcover": 50,
              "solarradiation": 846,
              "solarenergy": 3,
              "uvindex": 8,
              "severerisk": 10,
              "conditions": "Partially cloudy",
              "icon": "partly-cloudy-day",
              "stations": null,
              "source": "fcst"
             },
             {
              "datetime": "13:00:00",
              "datetimeEpoch": 1720112400,
              "temp": 92,
              "feelslike": 97.1,
              "humidity": 47.11,
              "dew": 69,
              "precip": 0,
              "precipprob": 15,
              "snow": 0,
              "snowdepth": 0,
              "preciptype": null,
              "windgust": 8.1,
              "windspeed": 4.7,
              "winddir": 200,
              "pressure": 1013,
              "visibility": 10.1,
              "cloudcover": 54,
              "solarradiation": 758,
              "solarenergy": 2.7,
              "uvindex": 8,
              "severerisk": 10,
              "conditions": "Partially cloudy",
              "icon": "partly-cloudy-day",
              "stations": null,
              "source": "fcst"
             }
            ]
         },
         {
            "datetime": "2024-07-11",
            "datetimeEpoch": 1720065600,
            "tempmax": 92.9,
            "tempmin": 73.7,
            "temp": 75.7,
            "feelslikemax": 99.1,
            "feelslikemin": 73.7,
            "feelslike": 84.6,
            "dew": 69.5,
            "humidity": 67.9,
            "precip": 0.669,
            "precipprob": 57,
            "precipcover": 29.17,
            "preciptype": [
             "rain"
            ],
            "snow": 0,
            "snowdepth": 0,
            "windgust": 15,
            "windspeed": 11.8,
            "winddir": 202.7,
            "pressure": 1013.9,
            "cloudcover": 72.2,
            "visibility": 9.9,
            "solarradiation": 227.8,
            "solarenergy": 19.7,
            "uvindex": 8,
            "severerisk": 30,
            "sunrise": "05:48:24",
            "sunriseEpoch": 1720086504,
            "sunset": "20:36:45",
            "sunsetEpoch": 1720139805,
            "moonphase": 0.95,
            "conditions": "Rain, Partially cloudy",
            "description": "Partly cloudy throughout the day with storms possible.",
            "icon": "rain",
            "stations": [
             "KIAD",
             "KDCA",
             "D6279",
             "KGAI",
             "KBWI",
             "KADW"
            ],
            "source": "comb",
            "hours": [
             {
              "datetime": "12:00:00",
              "datetimeEpoch": 1720108800,
              "temp": 90.1,
              "feelslike": 94.7,
              "humidity": 50.12,
              "dew": 69,
              "precip": 0,
              "precipprob": 8,
              "snow": 0,
              "snowdepth": 0,
              "preciptype": null,
              "windgust": 6.9,
              "windspeed": 4.7,
              "winddir": 210,
              "pressure": 1014,
              "visibility": 10.1,
              "cloudcover": 50,
              "solarradiation": 846,
              "solarenergy": 3,
              "uvindex": 8,
              "severerisk": 10,
              "conditions": "Partially cloudy",
              "icon": "partly-cloudy-day",
              "stations": null,
              "source": "fcst"
             },
             {
              "datetime": "13:00:00",
              "datetimeEpoch": 1720112400,
              "temp": 92,
              "feelslike": 97.1,
              "humidity": 47.11,
              "dew": 69,
              "precip": 0,
              "precipprob": 15,
              "snow": 0,
              "snowdepth": 0,
              "preciptype": null,
              "windgust": 8.1,
              "windspeed": 4.7,
              "winddir": 200,
              "pressure": 1013,
              "visibility": 10.1,
              "cloudcover": 54,
              "solarradiation": 758,
              "solarenergy": 2.7,
              "uvindex": 8,
              "severerisk": 10,
              "conditions": "Partially cloudy",
              "icon": "partly-cloudy-day",
              "stations": null,
              "source": "fcst"
             }
            ]
         }
        ],
        "alerts": [
         {
          "event": "Heat Advisory",
          "headline": "Heat Advisory issued July 4 at 3:52AM EDT until July 5 at 8:00PM EDT by NWS Baltimore MD/Washington DC",
          "ends": "2024-07-05T20:00:00",
          "endsEpoch": 1720224000,
          "onset": "2024-07-05T12:00:00",
          "onsetEpoch": 1720195200,
          "id": "urn:oid:2.49.0.1.840.0.41d1cbe5fcb400ba06baa76ab690ffcbce957dff.001.1",
          "language": "en",
          "link": null,
          "description": "* WHAT...For the first Heat Advisory, heat index values between\n100 to 105 expected. For the second Heat Advisory, heat index\nvalues up to 107 expected.\n\n* WHERE...Portions of central, northern and southern Maryland,\nThe District of Columbia and central and northern Virginia.\n\n* WHEN...For the first Heat Advisory, from noon today to 8 PM\nEDT this evening. For the second Heat Advisory, from noon to 8\nPM EDT Friday.\n\n* IMPACTS...Hot temperatures and high humidity may cause heat\nillnesses to occur.\n\n* ADDITIONAL DETAILS...The combination of air temperatures in the\n90s and high humidity will result in the potential for increased\nheat-related illnesses, especially those partaking in outdoor\nIndependence Day activities today."
         },
         {
          "event": "Air Quality Alert",
          "headline": "Air Quality Alert issued July 3 at 4:40PM EDT by NWS Baltimore MD/Washington DC",
          "ends": "2024-07-05T00:00:00",
          "endsEpoch": 1720152000,
          "onset": "2024-07-03T16:40:00",
          "onsetEpoch": 1720039200,
          "id": "urn:oid:2.49.0.1.840.0.708d4f756957d792e915bf50ef661e7b2e9d13d1.001.1",
          "language": "en",
          "link": null,
          "description": "The Metropolitan Washington Council of Governments and District\nDepartment of Environment has issued a Code ORANGE Air Quality\nAlert Thursday for\nthe District of Columbia.\n\nA Code Orange Air Quality Alert means that air pollution\nconcentrations within the region may become unhealthy for\nsensitive groups. Sensitive groups include children, people\nsuffering from asthma, heart disease or other lung diseases and\nthe elderly. The effects of air pollution can be minimized by\navoiding strenuous activity or exercise outdoors.\n\nFor more information on ground-level ozone\nand fine particles visit the web site\nhttps://www.mwcog.org/environment/air/forecast/."
         }
        ],
        "stations": {
         "KIAD": {
          "distance": 38229,
          "latitude": 38.95,
          "longitude": -77.45,
          "useCount": 0,
          "id": "KIAD",
          "name": "KIAD",
          "quality": 100,
          "contribution": 0
         },
         "KDCA": {
          "distance": 5002,
          "latitude": 38.85,
          "longitude": -77.03,
          "useCount": 0,
          "id": "KDCA",
          "name": "KDCA",
          "quality": 100,
          "contribution": 0
         },
         "D6279": {
          "distance": 10616,
          "latitude": 38.966,
          "longitude": -77.094,
          "useCount": 0,
          "id": "D6279",
          "name": "DW6279 Chevy Chase MD US",
          "quality": 0,
          "contribution": 0
         },
         "F8531": {
          "distance": 3071,
          "latitude": 38.888,
          "longitude": -76.98,
          "useCount": 0,
          "id": "F8531",
          "name": "FW8531 Washington DC US",
          "quality": 0,
          "contribution": 0
         },
         "KGAI": {
          "distance": 33603,
          "latitude": 39.17,
          "longitude": -77.17,
          "useCount": 0,
          "id": "KGAI",
          "name": "GAITHERSBURG, MD",
          "quality": 100,
          "contribution": 0
         },
         "KBWI": {
          "distance": 43664,
          "latitude": 39.18,
          "longitude": -76.67,
          "useCount": 0,
          "id": "KBWI",
          "name": "KBWI",
          "quality": 100,
          "contribution": 0
         },
         "KADW": {
          "distance": 14961,
          "latitude": 38.82,
          "longitude": -76.87,
          "useCount": 0,
          "id": "KADW",
          "name": "KADW",
          "quality": 98,
          "contribution": 0
         },
         "WASD2": {
          "distance": 2310,
          "latitude": 38.873,
          "longitude": -77.022,
          "useCount": 0,
          "id": "WASD2",
          "name": "Washington, DC NWLON",
          "quality": 0,
          "contribution": 0
         }
        },
        "currentConditions": {
         "datetime": "08:25:00",
         "datetimeEpoch": 1720095900,
         "temp": 79.6,
         "feelslike": 79.6,
         "humidity": 69.7,
         "dew": 68.9,
         "precip": 0,
         "precipprob": 0,
         "snow": 0,
         "snowdepth": 0,
         "preciptype": null,
         "windgust": 7.3,
         "windspeed": 3.5,
         "winddir": 232,
         "pressure": 1015,
         "visibility": 9.9,
         "cloudcover": 0,
         "solarradiation": 213,
         "solarenergy": 0.8,
         "uvindex": 2,
         "conditions": "Clear",
         "icon": "clear-day",
         "stations": [
          "KDCA",
          "F8531",
          "WASD2"
         ],
         "source": "obs",
         "sunrise": "05:48:24",
         "sunriseEpoch": 1720086504,
         "sunset": "20:36:45",
         "sunsetEpoch": 1720139805,
         "moonphase": 0.95
        }
       };

    function init (){
        $wrappers.forEach($wrapper => writeUI($wrapper));
    }

    function writeUI ($wrapper){
        const $city = $wrapper.querySelector(".city");
        const city = data.address;
        $city.innerHTML = city;
        
        let $days = $wrapper.querySelector(".days");
        data.days.forEach(day => writeDay(day, $days));
    }

    function writeDay (currentDay, $days){
        // estrarre informazione data e temperatura
        // stampare info nel dom
        
        let temperature = currentDay.temp;
        let date = new Date(currentDay.datetime);
        let weekDay = date.getDay();
        const weekDays = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab",]
        
        const template = weekDays[weekDay] + "  " + date.toLocaleDateString('it') + ",  " + temperatureCelsius(temperature) + " °";
        const $day = template;
        $days.innerHTML += `<div class="day">${$day}</div>`;
    }
    
    const temperatureCelsius = fahrenheit => (((fahrenheit - 32) * 5/9).toFixed(1)); // funzione per convertire in Celsius
    
    return {
        init,
    };

}