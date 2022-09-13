import { getDataWeatherByCityName } from './services/api.mjs';

getDataWeatherByCityName('HaNoi')
    .next().value
    .then(data => console.log(data))