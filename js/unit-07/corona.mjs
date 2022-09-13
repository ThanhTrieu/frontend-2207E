import getDataVirusCorona from './services/api.mjs';

function getDataVN(){
    getDataVirusCorona()
    .then(data => {
        let arrCountries = data['Countries'];
        let result = arrCountries.find(item => item.CountryCode === 'VN');
        console.log(result);
    })
    .catch(err => console.log(err))
}
getDataVN();