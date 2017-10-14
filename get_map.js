    function initMap() 
    {
      infowindow = new google.maps.InfoWindow();
        myLat = 42.39674;
        myLng = -71.121815;
        me = new google.maps.LatLng(myLat, myLng);
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: me
        });
        getGeolocation();
    }

    function getGeolocation() 
    {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
          myLat = position.coords.latitude;
          myLng = position.coords.longitude;
          renderMap();
          addCircle();
        }); 
      }
      else {
        alert("Geolocation not supported by your browser");
      }
    }

    function renderMap() 
    {
      me = new google.maps.LatLng(myLat, myLng);
      map.panTo(me);
      var marker = new google.maps.Marker({
        position: me
      });
      marker.setMap(map);
      google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent("Closest T-Stop: " + findClosestStop());
          infowindow.open(map, marker);
      });
    }

    function makeMarker(options) {
        var circleMark = new google.maps.Circle(options);
        circleMark.setMap(map);
    }

    function addCircle()
    {
      makeMarker({
            map: map,
            fillColor: "#FF0000",
            fillOpacity: 0.5,
            strokeColor: "#FF0000",
            strokeWeight: 1,
            center: myLat,
            position: myLng,
            radius: 500
        });
    }

    // var slider = new Slider("#ex8", {
    //   tooltip: 'always'
    // });