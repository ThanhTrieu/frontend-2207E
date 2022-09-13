import axios from 'axios';

const getDataVirusCorona = async () => {
    const url = `https://api.covid19api.com/summary`;
    const response = await axios.get(url);
    const result   = response.status === 200 ? response.data : null;
    return result; // tra ve promise
}
export default getDataVirusCorona;

export function* getDataWeatherByCityName(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=84f0c05e16abc57b03ca8fa00b59f78e&units=metric`;
    const response = yield axios.get(url);
    const result = response.status === 200 ? response.data : null;
    return result;
}