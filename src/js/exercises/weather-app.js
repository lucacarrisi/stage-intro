function weatherApp() {

    const $wrappers = document.querySelectorAll(".weather-widget");

    // const $template = document.querySelector(".day-template");

    function apiCall() {
        return new Promise((resolve, reject) => {
            fetch('https://mocki.io/v1/761fc179-b6df-42f3-b117-c5b5a744c2a9')
                .then((res) => {
                    if (!(res.status === 200)) {
                        throw new Error('Errore')
                    }

                    resolve(res.json())
                })
                .catch((e) => {
                    reject(e);
                })

        })
    }

    function init() {
        $wrappers.forEach($wrapper => writeUI($wrapper));
    }

    function writeUI($wrapper) {
        $wrapper.classList.add('loading');
        const $city = $wrapper.querySelector(".city");
        let $days = $wrapper.querySelector(".days");

        $city.innerHTML = '-';
        $days.innerHTML = '';

        apiCall()
            .finally(() => {
                $wrapper.classList.remove('loading');
            })
            .then(function (data) {
                const city = data.address;
                $city.innerHTML = city;

                data.days.forEach(day => writeDay(day, $days));
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    function writeDay(currentDay, $days) {
        // estrarre informazione data e temperatura
        // stampare info nel dom

        let temperature = currentDay.temp;
        let date = new Date(currentDay.datetime);
        let weekDay = date.getDay();
        const weekDays = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab",]

        const template = `
            <div class="day">
                <div class="day-name">${weekDays[weekDay]}</div>
                <div class="date">${date.toLocaleDateString()}</div>
                <div class="temperature"><span class="value">${temperatureCelsius(temperature)}</span> °</div>
            </div>`;

        $days.innerHTML += template;

        // const $currentTemplate = $template.cloneNode(true);
        // const $dayName = $currentTemplate.querySelector('.day-name');
        // const $date = $currentTemplate.querySelector('.date');
        // const $temperature = $currentTemplate.querySelector('.temperature .value');

        // $dayName.innerText = weekDays[weekDay];
        // $date.innerText = date.toLocaleDateString();
        // $temperature.innerText = temperatureCelsius(temperature);
        // $currentTemplate.classList.remove('d-none');
        // $currentTemplate.classList.add('day');

        // $days.appendChild($currentTemplate);
    }

    const temperatureCelsius = fahrenheit => (((fahrenheit - 32) * 5 / 9).toFixed(1)); // funzione per convertire in Celsius

    return {
        init,
    };

}