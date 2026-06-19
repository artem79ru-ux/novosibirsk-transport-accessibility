var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: 'Границы районов Новосибирска',
                interactive: true,
                title: '<img src="styles/legend/_0.png" /> Границы районов Новосибирска'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Обеспеченность районов транспортом',
                interactive: true,
    title: 'Обеспеченность районов транспортом<br />\
    <img src="styles/legend/_1_0.png" /> 55,8 - 60,5<br />\
    <img src="styles/legend/_1_1.png" /> 60,5 - 63,7<br />\
    <img src="styles/legend/_1_2.png" /> 63,7 - 66,2<br />\
    <img src="styles/legend/_1_3.png" /> 66,2 - 75,5<br />\
    <img src="styles/legend/_1_4.png" /> 75,5 - 98,4<br />' });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Жилые территории вне зоны доступности',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> Жилые территории вне зоны доступности'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Улично-дорожная сеть',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> Улично-дорожная сеть'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'Зоны пешей доступности к транспорту',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> Зоны пешей доступности к транспорту'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
cluster__5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource__5
});
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:cluster__5, 
                style: style__5,
                popuplayertitle: 'Остановки автобусов',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> Остановки автобусов'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
cluster__6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource__6
});
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:cluster__6, 
                style: style__6,
                popuplayertitle: 'Станции метро и трамвая',
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> Станции метро и трамвая'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(false);lyr__5.setVisible(true);lyr__6.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6];
lyr__0.set('fieldAliases', {'fid': 'fid', 'population': 'population', 'name': 'Район', });
lyr__1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'admin_level': 'admin_level', 'population': 'population', 'name': 'Район', 'area0_sum': 'area0_sum', 'area0_sum_2': 'area0_sum_2', 'area': 'area', 'access_pct': 'access_pct', 'resid_area': 'Жилая территория, м2', 'covered': 'Обеспеченная жилая территория, %', 'deficit': 'Дефицитная жилая территория, %', 'deficit_ha': 'Дефицитная жилая территория, га', });
lyr__2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr__3.set('fieldAliases', {'fid': 'fid', 'fclass': 'fclass', 'name': 'name', });
lyr__4.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'layer': 'layer', 'path': 'path', });
lyr__5.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'Название', });
lyr__6.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'Название', 'layer': 'layer', 'path': 'path', });
lyr__0.set('fieldImages', {'fid': 'Hidden', 'population': 'Hidden', 'name': 'Hidden', });
lyr__1.set('fieldImages', {'fid': 'Hidden', 'full_id': 'Hidden', 'osm_id': 'Hidden', 'osm_type': 'Hidden', 'admin_level': 'Hidden', 'population': 'Hidden', 'name': 'TextEdit', 'area0_sum': 'Hidden', 'area0_sum_2': 'Hidden', 'area': 'Hidden', 'access_pct': 'Hidden', 'resid_area': 'TextEdit', 'covered': 'TextEdit', 'deficit': 'TextEdit', 'deficit_ha': 'TextEdit', });
lyr__2.set('fieldImages', {'fid': 'Hidden', 'osm_id': 'Hidden', 'code': 'Hidden', 'fclass': 'Hidden', 'name': 'Hidden', });
lyr__3.set('fieldImages', {'fid': 'Hidden', 'fclass': 'Hidden', 'name': 'Hidden', });
lyr__4.set('fieldImages', {'fid': 'Hidden', 'osm_id': 'Hidden', 'code': 'Hidden', 'fclass': 'Hidden', 'name': 'Hidden', 'layer': 'Hidden', 'path': 'Hidden', });
lyr__5.set('fieldImages', {'fid': 'Hidden', 'osm_id': 'Hidden', 'code': 'Hidden', 'fclass': 'Hidden', 'name': 'TextEdit', });
lyr__6.set('fieldImages', {'fid': 'Hidden', 'osm_id': 'Hidden', 'code': 'Hidden', 'fclass': 'Hidden', 'name': 'TextEdit', 'layer': 'Hidden', 'path': 'Hidden', });
lyr__0.set('fieldLabels', {});
lyr__1.set('fieldLabels', {'name': 'header label - visible with data', 'resid_area': 'inline label - visible with data', 'covered': 'inline label - visible with data', 'deficit': 'inline label - visible with data', 'deficit_ha': 'inline label - visible with data', });
lyr__2.set('fieldLabels', {});
lyr__3.set('fieldLabels', {});
lyr__4.set('fieldLabels', {});
lyr__5.set('fieldLabels', {'name': 'header label - visible with data', });
lyr__6.set('fieldLabels', {'name': 'header label - visible with data', });
lyr__6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});