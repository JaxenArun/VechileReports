//Data
var cities = [
              {
                  city : 'India',
                  desc : 'This is the best country in the world!',
                  lat : 23.200000,
                  long : 79.225487
              },
              {
                  city : 'New Delhi',
                  desc : 'The Heart of India!',
                  lat : 28.500000,
                  long : 77.250000
              },
              {
                  city : 'Mumbai',
                  desc : 'Bollywood city!',
                  lat : 19.000000,
                  long : 72.90000
              },
              {
                  city : 'Kolkata',
                  desc : 'Howrah Bridge!',
                  lat : 22.500000,
                  long : 88.400000
              },
              {
                  city : 'Chennai  ',
                  desc : 'Kathipara Bridge!',
                  lat : 13.000000,
                  long : 80.250000
              }
          ];

          //Angular App Module and Controller
          var sampleApp = angular.module('mapsApp', []);
          sampleApp.controller('MapCtrl', function ($scope) {

              var mapOptions = {
                  zoom: 4,
                  center: new google.maps.LatLng(25,80),
                  mapTypeId: google.maps.MapTypeId.TERRAIN
              }

              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

              $scope.markers = [];
              
              var infoWindow = new google.maps.InfoWindow();
              
              var createMarker = function (info){
                  
                  var marker = new google.maps.Marker({
                      map: $scope.map,
                      position: new google.maps.LatLng(info.lat, info.long),
                      title: info.city
                  });
                  marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
                  
                  google.maps.event.addListener(marker, 'click', function(){
                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                      infoWindow.open($scope.map, marker);
                  });
                  
                  $scope.markers.push(marker);
                  
              }  
              
              for (i = 0; i < cities.length; i++){
                  createMarker(cities[i]);
              }

              $scope.openInfoWindow = function(e, selectedMarker){
                  e.preventDefault();
                  google.maps.event.trigger(selectedMarker, 'click');
              }

          });

//var myApp = angular.module('myAppApp', ['ngMap']);

// angular.module('myAppApp', ['uiGmapgoogle-maps'])

    // .controller('MainCtrl', function ($scope) {
    
    // var lat = 40.7127;
    // var long = -74.0059;
    // $scope.map = { center: { latitude: lat, longitude: long }, zoom: 16 };
    

    // /* Lets find latitude & long based on an address */
    // var geocoder = new google.maps.Geocoder();
    // geocoder.geocode({
        // "address": "Brussels"
    // }, function (results, status) {a
        // if (status == google.maps.GeocoderStatus.OK && results.length > 0) {
            // var location = results[0].geometry.location,
                // lat = location.lat(),
                // lng = location.lng();
            // console.info("Latitude: " + lat);
            // console.info("Longitude: " + lng);

            // $scope.map = {
                // center: {
                    // latitude: lat,
                    // longitude: lng
                // },
                // zoom: 16
            // };

            // $scope.marker = {
                // id: 0,
                // coords: {
                    // latitude: lat,
                    // longitude: lng
                // },
                // options: {
                    // draggable: true
                // },
                // events: {
                    // dragend: function (marker, eventName, args) {
                        // $log.log('marker dragend');
                        // var lat = marker.getPosition().lat();
                        // var lon = marker.getPosition().lng();
                        // $log.log(lat);
                        // $log.log(lon);

                        // $scope.marker.options = {
                            // draggable: true,
                            // labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
                            // labelAnchor: "100 0",
                            // labelClass: "marker-labels"
                        // };
                    // }
                // }
            // };

        // }
    // });




// });