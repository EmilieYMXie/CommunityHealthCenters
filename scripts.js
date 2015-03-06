/*
 * GREL for finding lat: value.parseJson().results[0].geometry.location.lat
 * GREL for fetch column based on URL for lat and long: 'http://www.datasciencetoolkit.org/maps/api/geocode/json?sensor=false&address=' + escape(value, 'url')
 */

var map = L.map('leafletMap').setView([40.81008, -73.95709], 13);

//add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);