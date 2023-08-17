import request from "request";
var forecast = (lattitude,longitude, callback) => {
    var url ='http://api.weatherstack.com/current?access_key=03fdd6037dc1fa202e14ed67a6306e00&query='+lattitude+","+longitude;

    request({url , json : true}, (error, response)=>{
        if(error)
         callback('Please reload the page. The server might response!!',undefined);

        //  else if(response.body.location.name === null)
        //   callback('no search results found', undefined);

          else{
         callback(undefined,"The current temp is "+response.body.current.temperature + " degrees and humidity in percentage is " + response.body.current.humidity);
          }
    })

}


export default forecast

// forecast(-74.3893168105238,40.1502478924, (error, data) =>{
//     console.log('error ', error);
//     console.log('data ', data);
// })

// Errors
// module.exports = forecast;




