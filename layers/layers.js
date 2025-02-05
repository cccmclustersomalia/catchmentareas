var wms_layers = [];


        var lyr_ESRIBoundariesPlaces_0 = new ol.layer.Tile({
            'title': 'ESRI Boundaries&Places',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2025_New_Kismaayo_Shapefile_2 = new ol.format.GeoJSON();
var features_2025_New_Kismaayo_Shapefile_2 = format_2025_New_Kismaayo_Shapefile_2.readFeatures(json_2025_New_Kismaayo_Shapefile_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2025_New_Kismaayo_Shapefile_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2025_New_Kismaayo_Shapefile_2.addFeatures(features_2025_New_Kismaayo_Shapefile_2);
var lyr_2025_New_Kismaayo_Shapefile_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2025_New_Kismaayo_Shapefile_2, 
                style: style_2025_New_Kismaayo_Shapefile_2,
                popuplayertitle: '2025_New_Kismaayo_Shapefile',
                interactive: true,
    title: '2025_New_Kismaayo_Shapefile<br />\
    <img src="styles/legend/2025_New_Kismaayo_Shapefile_2_0.png" /> CA01<br />\
    <img src="styles/legend/2025_New_Kismaayo_Shapefile_2_1.png" /> CA02<br />\
    <img src="styles/legend/2025_New_Kismaayo_Shapefile_2_2.png" /> CA03<br />\
    <img src="styles/legend/2025_New_Kismaayo_Shapefile_2_3.png" /> CA04<br />\
    <img src="styles/legend/2025_New_Kismaayo_Shapefile_2_4.png" /> CA05<br />\
    <img src="styles/legend/2025_New_Kismaayo_Shapefile_2_5.png" /> CA06<br />\
    <img src="styles/legend/2025_New_Kismaayo_Shapefile_2_6.png" /> CA07<br />\
    <img src="styles/legend/2025_New_Kismaayo_Shapefile_2_7.png" /> CA08<br />\
    <img src="styles/legend/2025_New_Kismaayo_Shapefile_2_8.png" /> CA09<br />\
    <img src="styles/legend/2025_New_Kismaayo_Shapefile_2_9.png" /> CA10<br />\
    <img src="styles/legend/2025_New_Kismaayo_Shapefile_2_10.png" /> <br />'
        });
var format_Kismaayo_Sites_SV_Q4_2024_3 = new ol.format.GeoJSON();
var features_Kismaayo_Sites_SV_Q4_2024_3 = format_Kismaayo_Sites_SV_Q4_2024_3.readFeatures(json_Kismaayo_Sites_SV_Q4_2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kismaayo_Sites_SV_Q4_2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kismaayo_Sites_SV_Q4_2024_3.addFeatures(features_Kismaayo_Sites_SV_Q4_2024_3);
cluster_Kismaayo_Sites_SV_Q4_2024_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Kismaayo_Sites_SV_Q4_2024_3
});
var lyr_Kismaayo_Sites_SV_Q4_2024_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Kismaayo_Sites_SV_Q4_2024_3, 
                style: style_Kismaayo_Sites_SV_Q4_2024_3,
                popuplayertitle: 'Kismaayo_Sites_SV_Q4_2024',
                interactive: true,
                title: '<img src="styles/legend/Kismaayo_Sites_SV_Q4_2024_3.png" /> Kismaayo_Sites_SV_Q4_2024'
            });

lyr_ESRIBoundariesPlaces_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_2025_New_Kismaayo_Shapefile_2.setVisible(true);lyr_Kismaayo_Sites_SV_Q4_2024_3.setVisible(true);
var layersList = [lyr_ESRIBoundariesPlaces_0,lyr_OSMStandard_1,lyr_2025_New_Kismaayo_Shapefile_2,lyr_Kismaayo_Sites_SV_Q4_2024_3];
lyr_2025_New_Kismaayo_Shapefile_2.set('fieldAliases', {'FID_1': 'FID_1', 'CA_Name': 'CA_Name', 'Zone': 'Zone', 'NeighVilla': 'NeighVilla', 'admin2Name': 'admin2Name', 'admin2Pcod': 'admin2Pcod', 'admin1Name': 'admin1Name', 'admin1Pcod': 'admin1Pcod', 'OPZ_Name': 'OPZ_Name', 'OPZ_ID': 'OPZ_ID', 'IDP_HHs': 'IDP_HHs', 'IDP_Ind': 'IDP_Ind', 'IDP_Sites': 'IDP_Sites', });
lyr_Kismaayo_Sites_SV_Q4_2024_3.set('fieldAliases', {'CCCM IDP Site Code': 'CCCM IDP Site Code', 'Region': 'Region', 'District': 'District', 'IDP Site': 'IDP Site', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Neighbourhood': 'Neighbourhood', 'Neighbourhood Type': 'Neighbourhood Type', 'Date IDP site Established': 'Date IDP site Established', 'HH (Q3-2024)': 'HH (Q3-2024)', 'Individual (Q3-2024)': 'Individual (Q3-2024)', 'Source (Q3-2024)': 'Source (Q3-2024)', });
lyr_2025_New_Kismaayo_Shapefile_2.set('fieldImages', {'FID_1': 'TextEdit', 'CA_Name': 'TextEdit', 'Zone': 'TextEdit', 'NeighVilla': 'TextEdit', 'admin2Name': 'TextEdit', 'admin2Pcod': 'TextEdit', 'admin1Name': 'TextEdit', 'admin1Pcod': 'TextEdit', 'OPZ_Name': 'TextEdit', 'OPZ_ID': 'TextEdit', 'IDP_HHs': 'TextEdit', 'IDP_Ind': 'TextEdit', 'IDP_Sites': 'TextEdit', });
lyr_Kismaayo_Sites_SV_Q4_2024_3.set('fieldImages', {'CCCM IDP Site Code': 'TextEdit', 'Region': 'TextEdit', 'District': 'TextEdit', 'IDP Site': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Neighbourhood': 'TextEdit', 'Neighbourhood Type': 'TextEdit', 'Date IDP site Established': 'Range', 'HH (Q3-2024)': 'Range', 'Individual (Q3-2024)': 'Range', 'Source (Q3-2024)': 'TextEdit', });
lyr_2025_New_Kismaayo_Shapefile_2.set('fieldLabels', {'FID_1': 'no label', 'CA_Name': 'no label', 'Zone': 'no label', 'NeighVilla': 'no label', 'admin2Name': 'no label', 'admin2Pcod': 'no label', 'admin1Name': 'no label', 'admin1Pcod': 'no label', 'OPZ_Name': 'no label', 'OPZ_ID': 'no label', 'IDP_HHs': 'no label', 'IDP_Ind': 'no label', 'IDP_Sites': 'no label', });
lyr_Kismaayo_Sites_SV_Q4_2024_3.set('fieldLabels', {'CCCM IDP Site Code': 'no label', 'Region': 'no label', 'District': 'no label', 'IDP Site': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Neighbourhood': 'no label', 'Neighbourhood Type': 'no label', 'Date IDP site Established': 'no label', 'HH (Q3-2024)': 'no label', 'Individual (Q3-2024)': 'no label', 'Source (Q3-2024)': 'no label', });
lyr_Kismaayo_Sites_SV_Q4_2024_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});