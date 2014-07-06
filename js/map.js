var map;
// var ajaxRequest;
// var plotlist;
// var plotlayers=[];

function initmap() {
	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 12, maxZoom: 18, attribution: osmAttrib});		

	// start the map in South-East England
	map.setView(new L.LatLng(43.260454, -79.865956), 16);
	map.addLayer(osm);

	map.scrollWheelZoom.disable();
	map.touchZoom.disable();

	var pointA = new L.LatLng(43.262540, -79.875119);
	var pointc = new L.LatLng(43.260431, -79.865955);
	var pointB = new L.LatLng(43.258336, -79.857288);
	var pointList = [pointA, pointc, pointB];

	var firstpolyline = new L.Polyline(pointList, {
	color: 'black',
	weight: 9,
	opacity: 0.35,
	smoothFactor: 1

	});
	firstpolyline.addTo(map);
}

initmap();
