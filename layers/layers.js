var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_LASA_Ptos_inv_geofisica_1 = new ol.format.GeoJSON();
var features_LASA_Ptos_inv_geofisica_1 = format_LASA_Ptos_inv_geofisica_1.readFeatures(json_LASA_Ptos_inv_geofisica_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LASA_Ptos_inv_geofisica_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LASA_Ptos_inv_geofisica_1.addFeatures(features_LASA_Ptos_inv_geofisica_1);
var lyr_LASA_Ptos_inv_geofisica_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LASA_Ptos_inv_geofisica_1, 
                style: style_LASA_Ptos_inv_geofisica_1,
                popuplayertitle: 'LASA_Ptos_inv_geofisica',
                interactive: true,
                title: '<img src="styles/legend/LASA_Ptos_inv_geofisica_1.png" /> LASA_Ptos_inv_geofisica'
            });
var format_LASA_Line_inv_geofisica_2 = new ol.format.GeoJSON();
var features_LASA_Line_inv_geofisica_2 = format_LASA_Line_inv_geofisica_2.readFeatures(json_LASA_Line_inv_geofisica_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LASA_Line_inv_geofisica_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LASA_Line_inv_geofisica_2.addFeatures(features_LASA_Line_inv_geofisica_2);
var lyr_LASA_Line_inv_geofisica_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LASA_Line_inv_geofisica_2, 
                style: style_LASA_Line_inv_geofisica_2,
                popuplayertitle: 'LASA_Line_inv_geofisica',
                interactive: true,
                title: '<img src="styles/legend/LASA_Line_inv_geofisica_2.png" /> LASA_Line_inv_geofisica'
            });
var format_LASA_Ptos_inv_geotecnica_3 = new ol.format.GeoJSON();
var features_LASA_Ptos_inv_geotecnica_3 = format_LASA_Ptos_inv_geotecnica_3.readFeatures(json_LASA_Ptos_inv_geotecnica_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LASA_Ptos_inv_geotecnica_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LASA_Ptos_inv_geotecnica_3.addFeatures(features_LASA_Ptos_inv_geotecnica_3);
var lyr_LASA_Ptos_inv_geotecnica_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LASA_Ptos_inv_geotecnica_3, 
                style: style_LASA_Ptos_inv_geotecnica_3,
                popuplayertitle: 'LASA_Ptos_inv_geotecnica',
                interactive: true,
                title: '<img src="styles/legend/LASA_Ptos_inv_geotecnica_3.png" /> LASA_Ptos_inv_geotecnica'
            });
var format_LASA_Ptos_instr_figuras_4 = new ol.format.GeoJSON();
var features_LASA_Ptos_instr_figuras_4 = format_LASA_Ptos_instr_figuras_4.readFeatures(json_LASA_Ptos_instr_figuras_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LASA_Ptos_instr_figuras_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LASA_Ptos_instr_figuras_4.addFeatures(features_LASA_Ptos_instr_figuras_4);
var lyr_LASA_Ptos_instr_figuras_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LASA_Ptos_instr_figuras_4, 
                style: style_LASA_Ptos_instr_figuras_4,
                popuplayertitle: 'LASA_Ptos_instr_figuras',
                interactive: true,
                title: '<img src="styles/legend/LASA_Ptos_instr_figuras_4.png" /> LASA_Ptos_instr_figuras'
            });
var format_LASA_Ptos_instr_planos_5 = new ol.format.GeoJSON();
var features_LASA_Ptos_instr_planos_5 = format_LASA_Ptos_instr_planos_5.readFeatures(json_LASA_Ptos_instr_planos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LASA_Ptos_instr_planos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LASA_Ptos_instr_planos_5.addFeatures(features_LASA_Ptos_instr_planos_5);
var lyr_LASA_Ptos_instr_planos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LASA_Ptos_instr_planos_5, 
                style: style_LASA_Ptos_instr_planos_5,
                popuplayertitle: 'LASA_Ptos_instr_planos',
                interactive: true,
                title: '<img src="styles/legend/LASA_Ptos_instr_planos_5.png" /> LASA_Ptos_instr_planos'
            });
var group_instrumentacion = new ol.layer.Group({
                                layers: [lyr_LASA_Ptos_instr_figuras_4,lyr_LASA_Ptos_instr_planos_5,],
                                fold: 'open',
                                title: 'instrumentacion'});
var group_geotecnicas = new ol.layer.Group({
                                layers: [lyr_LASA_Ptos_inv_geotecnica_3,],
                                fold: 'open',
                                title: 'geotecnicas'});
var group_geofisicas = new ol.layer.Group({
                                layers: [lyr_LASA_Ptos_inv_geofisica_1,lyr_LASA_Line_inv_geofisica_2,],
                                fold: 'open',
                                title: 'geofisicas'});

lyr_ESRISatellite_0.setVisible(true);lyr_LASA_Ptos_inv_geofisica_1.setVisible(true);lyr_LASA_Line_inv_geofisica_2.setVisible(true);lyr_LASA_Ptos_inv_geotecnica_3.setVisible(true);lyr_LASA_Ptos_instr_figuras_4.setVisible(true);lyr_LASA_Ptos_instr_planos_5.setVisible(true);
var layersList = [lyr_ESRISatellite_0,group_geofisicas,group_geotecnicas,group_instrumentacion];
lyr_LASA_Ptos_inv_geofisica_1.set('fieldAliases', {'TIPO_ENS': 'TIPO_ENS', 'COD': 'COD', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'Vs_30': 'Vs_30', 'T_s_': 'T_s_', 'CIA': 'CIA', 'ZONA': 'ZONA', 'NIV_EST': 'NIV_EST', 'N_PROYECTO': 'N_PROYECTO', 'PROYECTO': 'PROYECTO', 'EDT': 'EDT', 'NOMBRE_EDT': 'NOMBRE_EDT', 'AÑO': 'AÑO', 'MES': 'MES', 'REV': 'REV', 'PLANO': 'PLANO', 'ESTADO': 'ESTADO', });
lyr_LASA_Line_inv_geofisica_2.set('fieldAliases', {'TIPO_ENS': 'TIPO_ENS', 'COD': 'COD', 'ESTE_INI': 'ESTE_INI', 'NORTE_INI': 'NORTE_INI', 'CIA': 'CIA', 'ZONA': 'ZONA', 'NIV_EST': 'NIV_EST', 'N_PROYECTO': 'N_PROYECTO', 'PROYECTO': 'PROYECTO', 'EDT': 'EDT', 'NOMBRE_EDT': 'NOMBRE_EDT', 'AÑO': 'AÑO', 'MES': 'MES', 'REV': 'REV', 'PLANO': 'PLANO', 'ESTE_FIN': 'ESTE_FIN', 'NORTE_FIN': 'NORTE_FIN', 'FID_': 'FID_', 'N_EDT': 'N_EDT', });
lyr_LASA_Ptos_inv_geotecnica_3.set('fieldAliases', {'TIPO_ENS': 'TIPO_ENS', 'COD': 'COD', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'CIA': 'CIA', 'ZONA': 'ZONA', 'NIV_EST': 'NIV_EST', 'N_PROYECTO': 'N_PROYECTO', 'PROYECTO': 'PROYECTO', 'EDT': 'EDT', 'NOMBRE_EDT': 'NOMBRE_EDT', 'AÑO': 'AÑO', 'MES': 'MES', 'REV': 'REV', 'PLANO': 'PLANO', 'ESTADO': 'ESTADO', });
lyr_LASA_Ptos_instr_figuras_4.set('fieldAliases', {'TIPO_ENS': 'TIPO_ENS', 'COD': 'COD', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'CIA': 'CIA', 'ZONA': 'ZONA', 'NIV_EST': 'NIV_EST', 'N_PROYECTO': 'N_PROYECTO', 'PROYECTO': 'PROYECTO', 'EDT': 'EDT', 'NOMBRE_EDT': 'NOMBRE_EDT', 'AÑO': 'AÑO', 'MES': 'MES', 'REV': 'REV', 'FIGURA': 'FIGURA', 'ESTADO': 'ESTADO', });
lyr_LASA_Ptos_instr_planos_5.set('fieldAliases', {'TIPO_ENS': 'TIPO_ENS', 'COD': 'COD', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'CIA': 'CIA', 'ZONA': 'ZONA', 'NIV_EST': 'NIV_EST', 'N_PROYECTO': 'N_PROYECTO', 'PROYECTO': 'PROYECTO', 'EDT': 'EDT', 'NOMBRE_EDT': 'NOMBRE_EDT', 'AÑO': 'AÑO', 'MES': 'MES', 'REV': 'REV', 'PLANO': 'PLANO', 'ESTADO': 'ESTADO', });
lyr_LASA_Ptos_inv_geofisica_1.set('fieldImages', {'TIPO_ENS': 'TextEdit', 'COD': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', 'Vs_30': '', 'T_s_': '', 'CIA': 'TextEdit', 'ZONA': 'TextEdit', 'NIV_EST': 'TextEdit', 'N_PROYECTO': 'TextEdit', 'PROYECTO': 'TextEdit', 'EDT': 'TextEdit', 'NOMBRE_EDT': 'TextEdit', 'AÑO': 'TextEdit', 'MES': 'TextEdit', 'REV': 'TextEdit', 'PLANO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_LASA_Line_inv_geofisica_2.set('fieldImages', {'TIPO_ENS': 'TextEdit', 'COD': 'TextEdit', 'ESTE_INI': 'TextEdit', 'NORTE_INI': 'TextEdit', 'CIA': 'TextEdit', 'ZONA': 'TextEdit', 'NIV_EST': 'TextEdit', 'N_PROYECTO': 'TextEdit', 'PROYECTO': 'TextEdit', 'EDT': 'TextEdit', 'NOMBRE_EDT': 'TextEdit', 'AÑO': 'TextEdit', 'MES': 'TextEdit', 'REV': 'TextEdit', 'PLANO': 'TextEdit', 'ESTE_FIN': 'TextEdit', 'NORTE_FIN': 'TextEdit', 'FID_': 'TextEdit', 'N_EDT': 'TextEdit', });
lyr_LASA_Ptos_inv_geotecnica_3.set('fieldImages', {'TIPO_ENS': 'TextEdit', 'COD': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', 'CIA': 'TextEdit', 'ZONA': 'TextEdit', 'NIV_EST': 'TextEdit', 'N_PROYECTO': 'TextEdit', 'PROYECTO': 'TextEdit', 'EDT': 'TextEdit', 'NOMBRE_EDT': 'TextEdit', 'AÑO': 'TextEdit', 'MES': 'TextEdit', 'REV': 'TextEdit', 'PLANO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_LASA_Ptos_instr_figuras_4.set('fieldImages', {'TIPO_ENS': 'TextEdit', 'COD': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', 'CIA': 'TextEdit', 'ZONA': 'TextEdit', 'NIV_EST': 'TextEdit', 'N_PROYECTO': 'TextEdit', 'PROYECTO': 'TextEdit', 'EDT': 'TextEdit', 'NOMBRE_EDT': 'TextEdit', 'AÑO': 'TextEdit', 'MES': 'TextEdit', 'REV': 'TextEdit', 'FIGURA': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_LASA_Ptos_instr_planos_5.set('fieldImages', {'TIPO_ENS': 'TextEdit', 'COD': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', 'CIA': 'TextEdit', 'ZONA': 'TextEdit', 'NIV_EST': 'TextEdit', 'N_PROYECTO': 'TextEdit', 'PROYECTO': 'TextEdit', 'EDT': 'TextEdit', 'NOMBRE_EDT': 'TextEdit', 'AÑO': 'TextEdit', 'MES': 'TextEdit', 'REV': 'TextEdit', 'PLANO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_LASA_Ptos_inv_geofisica_1.set('fieldLabels', {'TIPO_ENS': 'inline label - always visible', 'COD': 'inline label - always visible', 'ESTE': 'inline label - always visible', 'NORTE': 'inline label - always visible', 'Vs_30': 'inline label - always visible', 'T_s_': 'inline label - always visible', 'CIA': 'inline label - always visible', 'ZONA': 'inline label - always visible', 'NIV_EST': 'inline label - always visible', 'N_PROYECTO': 'inline label - always visible', 'PROYECTO': 'inline label - always visible', 'EDT': 'inline label - always visible', 'NOMBRE_EDT': 'inline label - always visible', 'AÑO': 'inline label - always visible', 'MES': 'inline label - always visible', 'REV': 'inline label - always visible', 'PLANO': 'inline label - always visible', 'ESTADO': 'inline label - always visible', });
lyr_LASA_Line_inv_geofisica_2.set('fieldLabels', {'TIPO_ENS': 'inline label - always visible', 'COD': 'inline label - always visible', 'ESTE_INI': 'inline label - always visible', 'NORTE_INI': 'inline label - always visible', 'CIA': 'inline label - always visible', 'ZONA': 'inline label - always visible', 'NIV_EST': 'inline label - always visible', 'N_PROYECTO': 'inline label - always visible', 'PROYECTO': 'inline label - always visible', 'EDT': 'inline label - always visible', 'NOMBRE_EDT': 'inline label - always visible', 'AÑO': 'inline label - always visible', 'MES': 'inline label - always visible', 'REV': 'inline label - always visible', 'PLANO': 'inline label - always visible', 'ESTE_FIN': 'inline label - always visible', 'NORTE_FIN': 'inline label - always visible', 'FID_': 'inline label - always visible', 'N_EDT': 'inline label - always visible', });
lyr_LASA_Ptos_inv_geotecnica_3.set('fieldLabels', {'TIPO_ENS': 'inline label - always visible', 'COD': 'inline label - always visible', 'ESTE': 'inline label - always visible', 'NORTE': 'inline label - always visible', 'CIA': 'inline label - always visible', 'ZONA': 'inline label - always visible', 'NIV_EST': 'inline label - always visible', 'N_PROYECTO': 'inline label - always visible', 'PROYECTO': 'inline label - always visible', 'EDT': 'inline label - always visible', 'NOMBRE_EDT': 'inline label - always visible', 'AÑO': 'inline label - always visible', 'MES': 'inline label - always visible', 'REV': 'inline label - always visible', 'PLANO': 'inline label - always visible', 'ESTADO': 'inline label - always visible', });
lyr_LASA_Ptos_instr_figuras_4.set('fieldLabels', {'TIPO_ENS': 'inline label - always visible', 'COD': 'inline label - always visible', 'ESTE': 'inline label - always visible', 'NORTE': 'inline label - always visible', 'CIA': 'inline label - always visible', 'ZONA': 'inline label - always visible', 'NIV_EST': 'inline label - always visible', 'N_PROYECTO': 'inline label - always visible', 'PROYECTO': 'inline label - always visible', 'EDT': 'inline label - always visible', 'NOMBRE_EDT': 'inline label - always visible', 'AÑO': 'inline label - always visible', 'MES': 'inline label - always visible', 'REV': 'inline label - always visible', 'FIGURA': 'inline label - always visible', 'ESTADO': 'inline label - always visible', });
lyr_LASA_Ptos_instr_planos_5.set('fieldLabels', {'TIPO_ENS': 'inline label - always visible', 'COD': 'inline label - always visible', 'ESTE': 'inline label - always visible', 'NORTE': 'inline label - always visible', 'CIA': 'inline label - always visible', 'ZONA': 'inline label - always visible', 'NIV_EST': 'inline label - always visible', 'N_PROYECTO': 'inline label - always visible', 'PROYECTO': 'inline label - always visible', 'EDT': 'inline label - always visible', 'NOMBRE_EDT': 'inline label - always visible', 'AÑO': 'inline label - always visible', 'MES': 'inline label - always visible', 'REV': 'inline label - always visible', 'PLANO': 'inline label - always visible', 'ESTADO': 'inline label - always visible', });
lyr_LASA_Ptos_instr_planos_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});