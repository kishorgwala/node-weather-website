const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f4032bbdac6063ad7b098b282573befc&query='+ longitude +','+ latitude +'&units=m'

    request({url: url, json: true}, (error, response) => {
       if(error){
            callback('Unable to connect to weather service', undefined)
       }else if(response.body.current === 0){
            callback('Unable to find weather service. Try some other search', undefined)
       }else{
            callback(undefined, {
                place: response.body.current.weather_descriptions[0],
                temprature: response.body.current.temperature,
                feelslike: response.body.current.feelslike
            })
       }
    })
}
module.exports = forecast