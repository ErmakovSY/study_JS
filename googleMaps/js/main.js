// API key = AIzaSyBb7wZFJHwk6nWfeMdQy4fMPfIelzwdSpU

let map, marker, infoWindow;
let infoContentZP = '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">Запорожье</h1>'+
'<div id="bodyContent"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, inventore!</p></div></div>';
let infoContentPL = '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">Полтава</h1>'+
'<div id="bodyContent"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, inventore!</p></div></div>';
let infoContentKY = '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">Киев</h1>'+
'<div id="bodyContent"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, inventore!</p></div></div>';
let infoContentOD = '<div id="content"><div id="siteNotice"></div><h1 id="firstHeading" class="firstHeading">Одесса</h1>'+
'<div id="bodyContent"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, inventore!</p></div></div>';

let cities = [
  ['Запорожье', './img/markerZP.png', infoContentZP, {lat: 47.816011, lng: 35.170238}], 
  ['Полтава', './img/markerPL.png', infoContentPL, {lat: 49.568737, lng: 34.585708}], 
  ['Киев', './img/markerKY.png', infoContentKY, {lat: 50.449200, lng: 30.516683}], 
  ['Одесса', './img/markerOD.png', infoContentOD, {lat: 46.478335, lng: 30.723613}] 
];

let directionsService, directionsDisplay;

/**
 * The CenterControl adds a control to the map that recenters the map on
 * Chicago.
 * This constructor takes the control DIV as an argument.
 * @constructor
 */

function CenterControl(controlDiv, map, controlTitle, icon, infoContent, targetPoint) {

  // Set CSS for the control border.
  let controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '22px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to recenter the map';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  let controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto, Arial, sans-serif';
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = controlTitle;
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {
    map.panTo(targetPoint);
    infoWindow.setContent(infoContent);
    setTimeout(function() { 
      marker.setPosition(targetPoint);
      marker.setIcon(icon); 
    }, 400);
  });
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: cities[0][3],
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.TOP_CENTER
    },
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
    scaleControl: true,
    streetViewControl: true,
    streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP
    },
    fullscreenControl: true
  });
  marker = new google.maps.Marker({
    position: cities[0][3],
    map: map,
    icon: './img/markerZP.png'
  });
  infoWindow = new google.maps.InfoWindow({
    content: infoContentZP
  });
  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  });
  
  // Create the DIV to hold the control and call the CenterControl()
  // constructor passing in this DIV.
  let control, centerControl;
  cities.map(function(item) {
    control = document.createElement('div');
    centerControl = new CenterControl(control, map, item[0], item[1], item[2], item[3]);
    //control.index = 1;
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);
  });


  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  directionsDisplay.setMap(map);
  document.getElementById('submit').addEventListener('click', function() {
    setTimeout(function(){
      $("#directions-panel").animate({opacity:1}, 500);
			$("#directions-panel").css("pointer-events", "all");
			$("#directions-panel").css("z-index", "2");
    }, 1000);
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  });

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var waypts = [];
    var checkboxArray = document.getElementById('waypoints');
    for (var i = 0; i < checkboxArray.length; i++) {
      if (checkboxArray.options[i].selected) {
        waypts.push({
          location: checkboxArray[i].value,
          stopover: true
        });
      }
    }
    directionsService.route({
      origin: document.getElementById('start').value,
      destination: document.getElementById('end').value,
      waypoints: waypts,
      optimizeWaypoints: true,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        var route = response.routes[0];
        var summaryPanel = document.getElementById('directions-panel');
        summaryPanel.innerHTML = '';
        // For each route, display summary information.
        for (var i = 0; i < route.legs.length; i++) {
          var routeSegment = i + 1;
          summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment +
              '</b><br>';
          summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
          summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
          summaryPanel.innerHTML += route.legs[i].distance.text + '<br><br>';
        }
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}

let showBlock = (selector) => {
	$(selector).animate({opacity:1}, 500);
	$(selector).css("pointer-events", "all");
	$(selector).css("z-index", "2");
}
let hideBlock = (selector) => {
	$(selector).animate({opacity:0}, 500);
	$(selector).css("pointer-events", "none");
	$(selector).css("z-index", "-1");
}

$(document).ready(function(){
  $("#btn-way").click(function(e){
    e.preventDefault();
    if ($("#right-panel").css("opacity") == "0") {
			showBlock("#right-panel");
      	if ($("#directions-panel").children().length != 0) {
					showBlock("#directions-panel");
				} else {
					hideBlock("#directions-panel");
				} 
    } else {
			hideBlock("#right-panel");
      hideBlock("#directions-panel");
    }
  });
});