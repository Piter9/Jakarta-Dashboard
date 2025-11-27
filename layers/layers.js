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
var format_2024Mapping_1 = new ol.format.GeoJSON();
var features_2024Mapping_1 = format_2024Mapping_1.readFeatures(json_2024Mapping_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024Mapping_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024Mapping_1.addFeatures(features_2024Mapping_1);
var lyr_2024Mapping_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024Mapping_1, 
                style: style_2024Mapping_1,
                popuplayertitle: '2024 Mapping',
                interactive: true,
    title: '2024 Mapping<br />\
    <img src="styles/legend/2024Mapping_1_0.png" /> Water<br />\
    <img src="styles/legend/2024Mapping_1_1.png" /> Non Building<br />\
    <img src="styles/legend/2024Mapping_1_2.png" /> Slum Building<br />\
    <img src="styles/legend/2024Mapping_1_3.png" /> Non Slum Building<br />' });
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
                interactive: false,
                title: '<img src="styles/legend/Clipped_2.png" /> Clipped'
            });
var format_BatasKelurahan_3 = new ol.format.GeoJSON();
var features_BatasKelurahan_3 = format_BatasKelurahan_3.readFeatures(json_BatasKelurahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKelurahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKelurahan_3.addFeatures(features_BatasKelurahan_3);
var lyr_BatasKelurahan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKelurahan_3, 
                style: style_BatasKelurahan_3,
                popuplayertitle: 'Batas Kelurahan',
                interactive: true,
                title: '<img src="styles/legend/BatasKelurahan_3.png" /> Batas Kelurahan'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_2024Mapping_1.setVisible(true);lyr_Clipped_2.setVisible(true);lyr_BatasKelurahan_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_2024Mapping_1,lyr_Clipped_2,lyr_BatasKelurahan_3];
lyr_2024Mapping_1.set('fieldAliases', {'fid': 'fid', 'Classification': 'Classification', 'NDVI': 'NDVI', 'MNDWI': 'MNDWI', 'NDBI': 'NDBI', 'Total Buildings': 'Total Buildings', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'Classification_str': 'Classification_str', });
lyr_Clipped_2.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_BatasKelurahan_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_2024Mapping_1.set('fieldImages', {'fid': 'TextEdit', 'Classification': 'Range', 'NDVI': 'TextEdit', 'MNDWI': 'TextEdit', 'NDBI': 'TextEdit', 'Total Buildings': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'Classification_str': '', });
lyr_Clipped_2.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_BatasKelurahan_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_2024Mapping_1.set('fieldLabels', {'fid': 'hidden field', 'Classification': 'hidden field', 'NDVI': 'inline label - always visible', 'MNDWI': 'inline label - always visible', 'NDBI': 'inline label - always visible', 'Total Buildings': 'inline label - always visible', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'Classification_str': 'inline label - always visible', });
lyr_Clipped_2.set('fieldLabels', {'WADMKC': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'no label', });
lyr_BatasKelurahan_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'LUAS': 'hidden field', });
lyr_BatasKelurahan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});