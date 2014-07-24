var map = L.map('map', { zoomControl:true }).fitBounds([[43.2404867495,-79.8777300982],[43.266386864,-79.8114576083]]);
		var additional_attrib = 'created w. <a href="https://github.com/geolicious/qgis2leaf" target ="_blank">gis2leaf</a> by <a href="http://www.geolicious.de" target ="_blank">Geolicious</a> & contributors<br>';
	var feature_group = new L.featureGroup([]);
	map.scrollWheelZoom.disable();
	map.touchZoom.disable();
		map.attributionControl.addAttribution(additional_attrib + 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data: &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>');
		L.tileLayer('http://a.tile.stamen.com/toner/{z}/{x}/{y}.png').addTo(map);
		
			function pop_schools(feature, layer) {
				var popupContent = feature.properties.html_exp;
				layer.bindPopup(popupContent);
			}
					
			var exp_schoolsJSON = new L.geoJson(exp_schools,{
				onEachFeature: pop_schools,
				pointToLayer: function (feature, latlng) {  
					return L.circleMarker(latlng, {
						radius: feature.properties.radius_qgis2leaf,
						fillColor: feature.properties.color_qgis2leaf,
						color: 'black',
						weight: 1,
						opacity: feature.properties.transp_qgis2leaf,
						fillOpacity: feature.properties.transp_fill_qgis2leaf
						});
					}
				});
			feature_group.addLayer(exp_schoolsJSON);
			
			
					//add comment sign to hide this layer on the map in the initial view.
					
			function pop_hamiltonkidscannon(feature, layer) {
				var popupContent = feature.properties.html_exp;
				layer.bindPopup(popupContent);
			}
					
			var exp_hamiltonkidscannonJSON = new L.geoJson(exp_hamiltonkidscannon,{
				onEachFeature: pop_hamiltonkidscannon,
				style: function (feature) {
					return {weight:0.5,
							color: 'black',
							fillColor: feature.properties.color_qgis2leaf,
							opacity: feature.properties.transp_qgis2leaf,
							fillOpacity: feature.properties.transp_fill_qgis2leaf};
					}
				});

			feature_group.addLayer(exp_hamiltonkidscannonJSON);


			
					//add comment sign to hide this layer on the map in the initial view.
					exp_hamiltonkidscannonJSON.addTo(map);
					exp_schoolsJSON.addTo(map);
	L.control.layers({},{"Schools": exp_schoolsJSON,"Children Density": exp_hamiltonkidscannonJSON}).addTo(map);