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
var format_ZonalStatistics_1 = new ol.format.GeoJSON();
var features_ZonalStatistics_1 = format_ZonalStatistics_1.readFeatures(json_ZonalStatistics_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonalStatistics_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonalStatistics_1.addFeatures(features_ZonalStatistics_1);
var lyr_ZonalStatistics_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonalStatistics_1, 
                style: style_ZonalStatistics_1,
                popuplayertitle: 'Zonal Statistics',
                interactive: true,
    title: 'Zonal Statistics<br />\
    <img src="styles/legend/ZonalStatistics_1_0.png" /> Water<br />\
    <img src="styles/legend/ZonalStatistics_1_1.png" /> Non Building<br />\
    <img src="styles/legend/ZonalStatistics_1_2.png" /> Slum Building<br />\
    <img src="styles/legend/ZonalStatistics_1_3.png" /> Non Slum Building<br />' });
var format_Clipped_2 = new ol.format.GeoJSON();
var features_Clipped_2 = format_Clipped_2.readFeatures(json_Clipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_2.addFeatures(features_Clipped_2);
var lyr_Clipped_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_2, 
                style: style_Clipped_2,
                popuplayertitle: 'Clipped',
                interactive: true,
                title: '<img src="styles/legend/Clipped_2.png" /> Clipped'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_ZonalStatistics_1.setVisible(true);lyr_Clipped_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_ZonalStatistics_1,lyr_Clipped_2];
lyr_ZonalStatistics_1.set('fieldAliases', {'fid': 'fid', 'Classification': 'Classification', 'NDVI': 'NDVI', 'MNDWI': 'MNDWI', 'NDBI': 'NDBI', 'Total Buildings': 'Total Buildings', });
lyr_Clipped_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_ZonalStatistics_1.set('fieldImages', {'fid': 'TextEdit', 'Classification': 'Range', 'NDVI': 'TextEdit', 'MNDWI': 'TextEdit', 'NDBI': 'TextEdit', 'Total Buildings': 'TextEdit', });
lyr_Clipped_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_ZonalStatistics_1.set('fieldLabels', {'fid': 'hidden field', 'Classification': 'inline label - visible with data', 'NDVI': 'inline label - visible with data', 'MNDWI': 'inline label - visible with data', 'NDBI': 'inline label - visible with data', 'Total Buildings': 'inline label - visible with data', });
lyr_Clipped_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'inline label - always visible', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', });
lyr_Clipped_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});