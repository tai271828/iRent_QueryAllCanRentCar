function queryCar()
{
	$.get(
		"getHasCarStation",
		{ 
			startTime: "20201028200000",
			endTime: "20201028220000",
			carType: "001601"
		},
		function (data) {
			setMarkers(data);
		}
	);
}

var markers = []; 
function setMarkers(stations) {
	// Loop through markers and set map to null for each
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(null);
	}

	// Reset the markers array
	markers = [];

	var map = new google.maps.Map(document.getElementById("map"));

	

	_stations = stations["hasCar"]
	// _station.StationName
			  	// _stations.forEach(function (_station) {
				// 	pos = _station.stationGIS;
				// 	console.log(_station);
				// });
	_stations.forEach(function (_station) {
		var myLatLng = new google.maps.LatLng(_station.stationGIS[0], _station.stationGIS[1]);
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			animation: google.maps.Animation.DROP,
			title: _station.StationName,
		});
		marker.addListener('click', function () {
			var infowindow = new google.maps.InfoWindow({
				position: point,
				content: _station.StationName,
			});
			infowindow.open(map, marker);
		});
		// To add the marker to the map, call setMap();
		marker.setMap(map);

		// Push marker to markers array
		markers.push(marker);
	});

}


function googleMapShow()
{
	const googleMap = new Vue({
	  el: '#app',
	  data: {
		map: null
	  },
	  methods: {
		// init google map
		initMap() {
		  
		  // 預設顯示的地點：台北市政府親子劇場
		  let location = {
			lat: 25.0374865, // 經度
			lng: 121.5647688 // 緯度
		  };
		  // 建立地圖
		  this.map = new google.maps.Map(document.getElementById('map'), {
			center: location, // 中心點座標
			zoom: 16, // 1-20，數字愈大，地圖愈細：1是世界地圖，20就會到街道
			/*
			  roadmap 顯示默認道路地圖視圖。
			  satellite 顯示 Google 地球衛星圖像。
			  hybrid 顯示正常和衛星視圖的混合。
			  terrain 顯示基於地形信息的物理地圖。
			*/
			zoomControl: false,
			mapTypeControl: false,
			scaleControl: false,
			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: false,
			mapTypeId: 'roadmap',
			styles:[
					  {
						"elementType": "geometry",
						"stylers": [
						  {
							"color": "#242f3e"
						  }
						]
					  },
					  {
						"elementType": "labels.text.fill",
						"stylers": [
						  {
							"color": "#746855"
						  }
						]
					  },
					  {
						"elementType": "labels.text.stroke",
						"stylers": [
						  {
							"color": "#242f3e"
						  }
						]
					  },
					  {
						"featureType": "administrative",
						"elementType": "geometry",
						"stylers": [
						  {
							"visibility": "off"
						  }
						]
					  },
					  {
						"featureType": "administrative.locality",
						"elementType": "labels.text.fill",
						"stylers": [
						  {
							"color": "#d59563"
						  }
						]
					  },
					  {
						"featureType": "poi",
						"stylers": [
						  {
							"visibility": "off"
						  }
						]
					  },
					  {
						"featureType": "poi",
						"elementType": "labels.text.fill",
						"stylers": [
						  {
							"color": "#d59563"
						  }
						]
					  },
					  {
						"featureType": "poi.park",
						"elementType": "geometry",
						"stylers": [
						  {
							"color": "#263c3f"
						  }
						]
					  },
					  {
						"featureType": "poi.park",
						"elementType": "labels.text.fill",
						"stylers": [
						  {
							"color": "#6b9a76"
						  }
						]
					  },
					  {
						"featureType": "road",
						"elementType": "geometry",
						"stylers": [
						  {
							"color": "#38414e"
						  }
						]
					  },
					  {
						"featureType": "road",
						"elementType": "geometry.stroke",
						"stylers": [
						  {
							"color": "#212a37"
						  }
						]
					  },
					  {
						"featureType": "road",
						"elementType": "labels.icon",
						"stylers": [
						  {
							"visibility": "off"
						  }
						]
					  },
					  {
						"featureType": "road",
						"elementType": "labels.text.fill",
						"stylers": [
						  {
							"color": "#9ca5b3"
						  }
						]
					  },
					  {
						"featureType": "road.highway",
						"elementType": "geometry",
						"stylers": [
						  {
							"color": "#746855"
						  }
						]
					  },
					  {
						"featureType": "road.highway",
						"elementType": "geometry.stroke",
						"stylers": [
						  {
							"color": "#1f2835"
						  }
						]
					  },
					  {
						"featureType": "road.highway",
						"elementType": "labels.text.fill",
						"stylers": [
						  {
							"color": "#f3d19c"
						  }
						]
					  },
					  {
						"featureType": "transit",
						"stylers": [
						  {
							"visibility": "off"
						  }
						]
					  },
					  {
						"featureType": "transit",
						"elementType": "geometry",
						"stylers": [
						  {
							"color": "#2f3948"
						  }
						]
					  },
					  {
						"featureType": "transit.station",
						"elementType": "labels.text.fill",
						"stylers": [
						  {
							"color": "#d59563"
						  }
						]
					  },
					  {
						"featureType": "water",
						"elementType": "geometry",
						"stylers": [
						  {
							"color": "#17263c"
						  }
						]
					  },
					  {
						"featureType": "water",
						"elementType": "labels.text.fill",
						"stylers": [
						  {
							"color": "#515c6d"
						  }
						]
					  },
					  {
						"featureType": "water",
						"elementType": "labels.text.stroke",
						"stylers": [
						  {
							"color": "#17263c"
						  }
						]
					  }
					]
			  });
			  	
		}
	  },
	  created() {
		window.addEventListener('load', () => {
		  this.initMap();
		});
	  }
	});
}

$(document).ready(function(){
	document.getElementById("queryCar").addEventListener("click", queryCar);
	googleMapShow();
});