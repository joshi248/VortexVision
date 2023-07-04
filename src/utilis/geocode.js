import request from "request";

var geocode = (address, callback) => {
 var url = 'http://api.mapbox.com/geocoding/v5/mapbox.places/' + address+  '.json?access_token=pk.eyJ1IjoicHJhbmtleSIsImEiOiJja2UwMTdoMTMzYmQzMnNvZGhpOG1oOXJsIn0.GWQ9c9k6Pw2-Or-ldCWu7A';

    request({url , json : true}, (error, response)=>{
        if(error)
         callback('unable to connect to server',undefined);

         else if(response.body.features.length === 0)
          callback('no search results found', undefined);

          else{
              var data ={
                  location : response.body.features[0].place_name,
                  lattitude : response.body.features[0].center[1],
                  longitude : response.body.features[0].center[0]
              }

              callback(undefined,data);
          }
    })

}

export default geocode

// geocode("new delhi", (error, data) =>{
//     console.log('error ', error);
//     console.log('data ', data);
// })


// Error below
// module.exports = geocode;









