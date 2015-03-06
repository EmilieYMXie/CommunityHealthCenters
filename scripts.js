/*
 * GREL for finding lat: value.parseJson().results[0].geometry.location.lat
 * GREL for fetch column based on URL for lat and long: 'http://www.datasciencetoolkit.org/maps/api/geocode/json?sensor=false&address=' + escape(value, 'url')
 */

var map = L.map('leafletMap').setView([40.81008, -73.95709], 13);