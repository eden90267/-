$(document).ready(function() {
   /*map*/
    var map = new GMaps({
      div: '.map',
      lat: 25.0339031,
      lng: 121.5623159
    });
    
    map.addMarker({
      lat: 25.0339031,
      lng: 121.5623159,
      title: '101',
      infoWindow: {
          content: '<p>Taipei 101</p>'
      }
    });
});