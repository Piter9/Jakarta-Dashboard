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
var format_Jakarta_Povertypoverty_risk_rank_1 = new ol.format.GeoJSON();
var features_Jakarta_Povertypoverty_risk_rank_1 = format_Jakarta_Povertypoverty_risk_rank_1.readFeatures(json_Jakarta_Povertypoverty_risk_rank_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jakarta_Povertypoverty_risk_rank_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jakarta_Povertypoverty_risk_rank_1.addFeatures(features_Jakarta_Povertypoverty_risk_rank_1);
var lyr_Jakarta_Povertypoverty_risk_rank_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jakarta_Povertypoverty_risk_rank_1, 
                style: style_Jakarta_Povertypoverty_risk_rank_1,
                popuplayertitle: 'Jakarta_Poverty — poverty_risk_rank',
                interactive: true,
    title: 'Jakarta_Poverty — poverty_risk_rank<br />\
    <img src="styles/legend/Jakarta_Povertypoverty_risk_rank_1_0.png" /> 0 - 0.2<br />\
    <img src="styles/legend/Jakarta_Povertypoverty_risk_rank_1_1.png" /> 0.2 - 0.4<br />\
    <img src="styles/legend/Jakarta_Povertypoverty_risk_rank_1_2.png" /> 0.4 - 0.6<br />\
    <img src="styles/legend/Jakarta_Povertypoverty_risk_rank_1_3.png" /> 0.6 - 0.8<br />\
    <img src="styles/legend/Jakarta_Povertypoverty_risk_rank_1_4.png" /> 0.8 - 1<br />' });
var format_2024Mapping_2 = new ol.format.GeoJSON();
var features_2024Mapping_2 = format_2024Mapping_2.readFeatures(json_2024Mapping_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2024Mapping_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2024Mapping_2.addFeatures(features_2024Mapping_2);
var lyr_2024Mapping_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2024Mapping_2, 
                style: style_2024Mapping_2,
                popuplayertitle: '2024 Mapping',
                interactive: true,
    title: '2024 Mapping<br />\
    <img src="styles/legend/2024Mapping_2_0.png" /> Water<br />\
    <img src="styles/legend/2024Mapping_2_1.png" /> Non Building<br />\
    <img src="styles/legend/2024Mapping_2_2.png" /> Slum Building<br />\
    <img src="styles/legend/2024Mapping_2_3.png" /> Non Slum Building<br />' });
var format_BatasKecamatan_3 = new ol.format.GeoJSON();
var features_BatasKecamatan_3 = format_BatasKecamatan_3.readFeatures(json_BatasKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_3.addFeatures(features_BatasKecamatan_3);
var lyr_BatasKecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_3, 
                style: style_BatasKecamatan_3,
                popuplayertitle: 'Batas Kecamatan',
                interactive: false,
                title: '<img src="styles/legend/BatasKecamatan_3.png" /> Batas Kecamatan'
            });
var format_BatasKelurahan_4 = new ol.format.GeoJSON();
var features_BatasKelurahan_4 = format_BatasKelurahan_4.readFeatures(json_BatasKelurahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKelurahan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKelurahan_4.addFeatures(features_BatasKelurahan_4);
var lyr_BatasKelurahan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKelurahan_4, 
                style: style_BatasKelurahan_4,
                popuplayertitle: 'Batas Kelurahan',
                interactive: true,
                title: '<img src="styles/legend/BatasKelurahan_4.png" /> Batas Kelurahan'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Jakarta_Povertypoverty_risk_rank_1.setVisible(true);lyr_2024Mapping_2.setVisible(true);lyr_BatasKecamatan_3.setVisible(true);lyr_BatasKelurahan_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Jakarta_Povertypoverty_risk_rank_1,lyr_2024Mapping_2,lyr_BatasKecamatan_3,lyr_BatasKelurahan_4];
lyr_Jakarta_Povertypoverty_risk_rank_1.set('fieldAliases', {'fid': 'fid', 'Pop_sum': 'Pop_sum', 'Sattlement_mean': 'Sattlement_mean', 'Building_H_max': 'Building_H_max', 'pov_risk_idx': 'pov_risk_idx', });
lyr_2024Mapping_2.set('fieldAliases', {'fid': 'fid', 'Classification': 'Classification', 'NDVI': 'NDVI', 'MNDWI': 'MNDWI', 'NDBI': 'NDBI', 'Total Buildings': 'Total Buildings', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'Classification_str': 'Classification_str', });
lyr_BatasKecamatan_3.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', });
lyr_BatasKelurahan_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', });
lyr_Jakarta_Povertypoverty_risk_rank_1.set('fieldImages', {'fid': 'TextEdit', 'Pop_sum': 'TextEdit', 'Sattlement_mean': 'TextEdit', 'Building_H_max': 'TextEdit', 'pov_risk_idx': 'TextEdit', });
lyr_2024Mapping_2.set('fieldImages', {'fid': 'TextEdit', 'Classification': 'Range', 'NDVI': 'TextEdit', 'MNDWI': 'TextEdit', 'NDBI': 'TextEdit', 'Total Buildings': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'Classification_str': '', });
lyr_BatasKecamatan_3.set('fieldImages', {'fid': '', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', });
lyr_BatasKelurahan_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', });
lyr_Jakarta_Povertypoverty_risk_rank_1.set('fieldLabels', {'fid': 'hidden field', 'Pop_sum': 'inline label - always visible', 'Sattlement_mean': 'inline label - always visible', 'Building_H_max': 'inline label - always visible', 'pov_risk_idx': 'inline label - always visible', });
lyr_2024Mapping_2.set('fieldLabels', {'fid': 'hidden field', 'Classification': 'hidden field', 'NDVI': 'inline label - always visible', 'MNDWI': 'inline label - always visible', 'NDBI': 'inline label - always visible', 'Total Buildings': 'inline label - always visible', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'Classification_str': 'inline label - always visible', });
lyr_BatasKecamatan_3.set('fieldLabels', {'fid': 'hidden field', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', });
lyr_BatasKelurahan_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - always visible', 'WADMKD': 'inline label - always visible', 'WADMKK': 'inline label - always visible', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'LUAS': 'hidden field', });
lyr_BatasKelurahan_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});