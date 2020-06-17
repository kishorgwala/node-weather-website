const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoia2lzaG9yZ3dhbGEiLCJhIjoiY2s5czRuZ2J6MTFwbzNucnJrZ3Jod2FsdCJ9.vtcT8yBMu8diYM7besT60A&limit=1'

    request({url: url, json: true}, (error, response) => {
       if(error){
            callback('Unable to connect to location service', undefined)
       }else if(response.body.features.length === 0){
            callback('Unable to find location. Try some other search', undefined)
       }else{
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name,
            })
       }
    })
}

module.exports = geocode