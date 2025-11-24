var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_SizeSegmentation40Pixels_1 = new ol.format.GeoJSON();
var features_SizeSegmentation40Pixels_1 = format_SizeSegmentation40Pixels_1.readFeatures(json_SizeSegmentation40Pixels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SizeSegmentation40Pixels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SizeSegmentation40Pixels_1.addFeatures(features_SizeSegmentation40Pixels_1);
var lyr_SizeSegmentation40Pixels_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SizeSegmentation40Pixels_1, 
                style: style_SizeSegmentation40Pixels_1,
                popuplayertitle: 'Size Segmentation 40 Pixels',
                interactive: false,
    title: 'Size Segmentation 40 Pixels<br />\
    <img src="styles/legend/SizeSegmentation40Pixels_1_0.png" /> Water<br />\
    <img src="styles/legend/SizeSegmentation40Pixels_1_1.png" /> Non Building/Housing<br />\
    <img src="styles/legend/SizeSegmentation40Pixels_1_2.png" /> Slum<br />\
    <img src="styles/legend/SizeSegmentation40Pixels_1_3.png" /> Non-Slum<br />' });
var format_SizeSegmentation25Pixels_2 = new ol.format.GeoJSON();
var features_SizeSegmentation25Pixels_2 = format_SizeSegmentation25Pixels_2.readFeatures(json_SizeSegmentation25Pixels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SizeSegmentation25Pixels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SizeSegmentation25Pixels_2.addFeatures(features_SizeSegmentation25Pixels_2);
var lyr_SizeSegmentation25Pixels_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SizeSegmentation25Pixels_2, 
                style: style_SizeSegmentation25Pixels_2,
                popuplayertitle: 'Size Segmentation 25 Pixels',
                interactive: false,
    title: 'Size Segmentation 25 Pixels<br />\
    <img src="styles/legend/SizeSegmentation25Pixels_2_0.png" /> Water<br />\
    <img src="styles/legend/SizeSegmentation25Pixels_2_1.png" /> Non Building/Housing<br />\
    <img src="styles/legend/SizeSegmentation25Pixels_2_2.png" /> Slum<br />\
    <img src="styles/legend/SizeSegmentation25Pixels_2_3.png" /> Non Slum<br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_SizeSegmentation40Pixels_1.setVisible(true);lyr_SizeSegmentation25Pixels_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_SizeSegmentation40Pixels_1,lyr_SizeSegmentation25Pixels_2];
lyr_SizeSegmentation40Pixels_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_SizeSegmentation25Pixels_2.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_SizeSegmentation40Pixels_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_SizeSegmentation25Pixels_2.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_SizeSegmentation40Pixels_1.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_SizeSegmentation25Pixels_2.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_SizeSegmentation25Pixels_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});