export function get() {
    return {
        status: 200,
        body: {
            coord: {
                lon: -103.4553,
                lat: 20.6955
            },
            weather: [
                {
                    id: 800,
                    main: 'Clear',
                    description: 'cielo claro',
                    icon: '01n'
                }
            ],
            base: 'stations',
            main: {
                temp: 22.5,
                feels_like: 21.72,
                temp_min: 22.05,
                temp_max: 22.5,
                pressure: 1015,
                humidity: 35,
                sea_level: 1015,
                grnd_level: 838
            },
            visibility: 10000,
            wind: {
                speed: 2.07,
                deg: 255,
                gust: 2.57
            },
            clouds: { all: 0 },
            dt: 1653196359,
            sys: {
                type: 2,
                id: 268566,
                country: 'MX',
                sunrise: 1653221667,
                sunset: 1653269211
            },
            timezone: -18000,
            id: 3985806,
            name: 'San Juan de Ocotán',
            cod: 200
        }
    }
}