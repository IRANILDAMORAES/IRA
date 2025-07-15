ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-49.397562, -5.449025, -48.903726, -5.190750]);
var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pessoaspretaspardaseindgenas_1 = new ol.format.GeoJSON();
var features_Pessoaspretaspardaseindgenas_1 = format_Pessoaspretaspardaseindgenas_1.readFeatures(json_Pessoaspretaspardaseindgenas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pessoaspretaspardaseindgenas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pessoaspretaspardaseindgenas_1.addFeatures(features_Pessoaspretaspardaseindgenas_1);
var lyr_Pessoaspretaspardaseindgenas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pessoaspretaspardaseindgenas_1, 
                style: style_Pessoaspretaspardaseindgenas_1,
                popuplayertitle: 'Pessoas pretas, pardas e indígenas',
                interactive: false,
    title: 'Pessoas pretas, pardas e indígenas<br />\
    <img src="styles/legend/Pessoaspretaspardaseindgenas_1_0.png" /> 45% - 59%<br />\
    <img src="styles/legend/Pessoaspretaspardaseindgenas_1_1.png" /> 59% - 73%<br />\
    <img src="styles/legend/Pessoaspretaspardaseindgenas_1_2.png" /> 73% - 86%<br />\
    <img src="styles/legend/Pessoaspretaspardaseindgenas_1_3.png" /> 86% - 100%<br />' });
var format_Pessoascommaisde15anosquenosabemlernemescrever_2 = new ol.format.GeoJSON();
var features_Pessoascommaisde15anosquenosabemlernemescrever_2 = format_Pessoascommaisde15anosquenosabemlernemescrever_2.readFeatures(json_Pessoascommaisde15anosquenosabemlernemescrever_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pessoascommaisde15anosquenosabemlernemescrever_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pessoascommaisde15anosquenosabemlernemescrever_2.addFeatures(features_Pessoascommaisde15anosquenosabemlernemescrever_2);
var lyr_Pessoascommaisde15anosquenosabemlernemescrever_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pessoascommaisde15anosquenosabemlernemescrever_2, 
                style: style_Pessoascommaisde15anosquenosabemlernemescrever_2,
                popuplayertitle: 'Pessoas com mais de 15 anos que não sabem ler, nem escrever',
                interactive: false,
    title: 'Pessoas com mais de 15 anos que não sabem ler, nem escrever<br />\
    <img src="styles/legend/Pessoascommaisde15anosquenosabemlernemescrever_2_0.png" /> 0% - 5%<br />\
    <img src="styles/legend/Pessoascommaisde15anosquenosabemlernemescrever_2_1.png" /> 5% - 10%<br />\
    <img src="styles/legend/Pessoascommaisde15anosquenosabemlernemescrever_2_2.png" /> 10% - 15%<br />\
    <img src="styles/legend/Pessoascommaisde15anosquenosabemlernemescrever_2_3.png" /> 15% - 20%<br />' });
var format_Rendapercapita_3 = new ol.format.GeoJSON();
var features_Rendapercapita_3 = format_Rendapercapita_3.readFeatures(json_Rendapercapita_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Rendapercapita_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rendapercapita_3.addFeatures(features_Rendapercapita_3);
var lyr_Rendapercapita_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rendapercapita_3, 
                style: style_Rendapercapita_3,
                popuplayertitle: 'Renda per capita',
                interactive: false,
    title: 'Renda per capita<br />\
    <img src="styles/legend/Rendapercapita_3_0.png" /> Até R$759<br />\
    <img src="styles/legend/Rendapercapita_3_1.png" /> R$759 - R$1.518<br />\
    <img src="styles/legend/Rendapercapita_3_2.png" /> R$1.518 - R$4.554<br />\
    <img src="styles/legend/Rendapercapita_3_3.png" /> Acima R$4.554<br />' });
var format_Domicliossemabastecimentodeguadaredegeral_4 = new ol.format.GeoJSON();
var features_Domicliossemabastecimentodeguadaredegeral_4 = format_Domicliossemabastecimentodeguadaredegeral_4.readFeatures(json_Domicliossemabastecimentodeguadaredegeral_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Domicliossemabastecimentodeguadaredegeral_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Domicliossemabastecimentodeguadaredegeral_4.addFeatures(features_Domicliossemabastecimentodeguadaredegeral_4);
var lyr_Domicliossemabastecimentodeguadaredegeral_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Domicliossemabastecimentodeguadaredegeral_4, 
                style: style_Domicliossemabastecimentodeguadaredegeral_4,
                popuplayertitle: 'Domicílios sem abastecimento de água da rede geral',
                interactive: false,
    title: 'Domicílios sem abastecimento de água da rede geral<br />\
    <img src="styles/legend/Domicliossemabastecimentodeguadaredegeral_4_0.png" /> 0% - 17%<br />\
    <img src="styles/legend/Domicliossemabastecimentodeguadaredegeral_4_1.png" /> 17% - 49%<br />\
    <img src="styles/legend/Domicliossemabastecimentodeguadaredegeral_4_2.png" /> 49% - 82%<br />\
    <img src="styles/legend/Domicliossemabastecimentodeguadaredegeral_4_3.png" /> 82% - 100%<br />' });
var format_Domicliossemesgotamentosanitrioesembanheiro_5 = new ol.format.GeoJSON();
var features_Domicliossemesgotamentosanitrioesembanheiro_5 = format_Domicliossemesgotamentosanitrioesembanheiro_5.readFeatures(json_Domicliossemesgotamentosanitrioesembanheiro_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Domicliossemesgotamentosanitrioesembanheiro_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Domicliossemesgotamentosanitrioesembanheiro_5.addFeatures(features_Domicliossemesgotamentosanitrioesembanheiro_5);
var lyr_Domicliossemesgotamentosanitrioesembanheiro_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Domicliossemesgotamentosanitrioesembanheiro_5, 
                style: style_Domicliossemesgotamentosanitrioesembanheiro_5,
                popuplayertitle: 'Domicílios sem esgotamento sanitário e sem banheiro',
                interactive: false,
    title: 'Domicílios sem esgotamento sanitário e sem banheiro<br />\
    <img src="styles/legend/Domicliossemesgotamentosanitrioesembanheiro_5_0.png" /> 0% - 26%<br />\
    <img src="styles/legend/Domicliossemesgotamentosanitrioesembanheiro_5_1.png" /> 26% - 66%<br />\
    <img src="styles/legend/Domicliossemesgotamentosanitrioesembanheiro_5_2.png" /> 66% - 87%<br />\
    <img src="styles/legend/Domicliossemesgotamentosanitrioesembanheiro_5_3.png" /> 87% - 100%<br />' });
var format_Domicliossemcoletadelixo_6 = new ol.format.GeoJSON();
var features_Domicliossemcoletadelixo_6 = format_Domicliossemcoletadelixo_6.readFeatures(json_Domicliossemcoletadelixo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Domicliossemcoletadelixo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Domicliossemcoletadelixo_6.addFeatures(features_Domicliossemcoletadelixo_6);
var lyr_Domicliossemcoletadelixo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Domicliossemcoletadelixo_6, 
                style: style_Domicliossemcoletadelixo_6,
                popuplayertitle: 'Domicílios sem coleta de lixo',
                interactive: false,
    title: 'Domicílios sem coleta de lixo<br />\
    <img src="styles/legend/Domicliossemcoletadelixo_6_0.png" /> 0% - 8%<br />\
    <img src="styles/legend/Domicliossemcoletadelixo_6_1.png" /> 8% - 34%<br />\
    <img src="styles/legend/Domicliossemcoletadelixo_6_2.png" /> 34% - 76%<br />\
    <img src="styles/legend/Domicliossemcoletadelixo_6_3.png" /> 76% - 100%<br />' });
var lyr_IRAndicedeRacismoAmbiental_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'IRA - Índice de Racismo Ambiental<br />\
    <img src="styles/legend/IRAndicedeRacismoAmbiental_7_0.png" /> <= 0,36<br />\
    <img src="styles/legend/IRAndicedeRacismoAmbiental_7_1.png" /> 0,36 - 0,47<br />\
    <img src="styles/legend/IRAndicedeRacismoAmbiental_7_2.png" /> 0,47 - 0,58<br />\
    <img src="styles/legend/IRAndicedeRacismoAmbiental_7_3.png" /> 0,58 - 0,69<br />\
    <img src="styles/legend/IRAndicedeRacismoAmbiental_7_4.png" /> > 0,69<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/IRAndicedeRacismoAmbiental_7.png",
            attributions: ' ',
            projection: 'EPSG:4326',
            alwaysInRange: true,
            imageExtent: [-49.294467, -5.442703, -49.007962, -5.196904]
        })
    });
var format_DistritosurbanosdeMarab_8 = new ol.format.GeoJSON();
var features_DistritosurbanosdeMarab_8 = format_DistritosurbanosdeMarab_8.readFeatures(json_DistritosurbanosdeMarab_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DistritosurbanosdeMarab_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistritosurbanosdeMarab_8.addFeatures(features_DistritosurbanosdeMarab_8);
var lyr_DistritosurbanosdeMarab_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistritosurbanosdeMarab_8, 
                style: style_DistritosurbanosdeMarab_8,
                popuplayertitle: 'Distritos urbanos de Marabá',
                interactive: true,
                title: '<img src="styles/legend/DistritosurbanosdeMarab_8.png" /> Distritos urbanos de Marabá'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_Pessoaspretaspardaseindgenas_1.setVisible(true);lyr_Pessoascommaisde15anosquenosabemlernemescrever_2.setVisible(true);lyr_Rendapercapita_3.setVisible(true);lyr_Domicliossemabastecimentodeguadaredegeral_4.setVisible(true);lyr_Domicliossemesgotamentosanitrioesembanheiro_5.setVisible(true);lyr_Domicliossemcoletadelixo_6.setVisible(true);lyr_IRAndicedeRacismoAmbiental_7.setVisible(true);lyr_DistritosurbanosdeMarab_8.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_Pessoaspretaspardaseindgenas_1,lyr_Pessoascommaisde15anosquenosabemlernemescrever_2,lyr_Rendapercapita_3,lyr_Domicliossemabastecimentodeguadaredegeral_4,lyr_Domicliossemesgotamentosanitrioesembanheiro_5,lyr_Domicliossemcoletadelixo_6,lyr_IRAndicedeRacismoAmbiental_7,lyr_DistritosurbanosdeMarab_8];
lyr_Pessoaspretaspardaseindgenas_1.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'RACIALIZACAO': 'RACIALIZACAO', });
lyr_Pessoascommaisde15anosquenosabemlernemescrever_2.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'ANALFABETISMO': 'ANALFABETISMO', });
lyr_Rendapercapita_3.set('fieldAliases', {'CD_SETOR': 'CD_SETOR', 'PER_CAPITA': 'PER_CAPITA', });
lyr_Domicliossemabastecimentodeguadaredegeral_4.set('fieldAliases', {'cd_setor': 'cd_setor', 'SEM_AGUA': 'SEM_AGUA', });
lyr_Domicliossemesgotamentosanitrioesembanheiro_5.set('fieldAliases', {'cd_setor': 'cd_setor', 'SEM_ESGOTO': 'SEM_ESGOTO', });
lyr_Domicliossemcoletadelixo_6.set('fieldAliases', {'cd_setor': 'cd_setor', 'SEM_COLETA_LIXO': 'SEM_COLETA_LIXO', });
lyr_DistritosurbanosdeMarab_8.set('fieldAliases', {'Nome_2': 'Nome_2', });
lyr_Pessoaspretaspardaseindgenas_1.set('fieldImages', {'CD_SETOR': 'TextEdit', 'RACIALIZACAO': 'Range', });
lyr_Pessoascommaisde15anosquenosabemlernemescrever_2.set('fieldImages', {'CD_SETOR': 'TextEdit', 'ANALFABETISMO': 'Range', });
lyr_Rendapercapita_3.set('fieldImages', {'CD_SETOR': 'TextEdit', 'PER_CAPITA': 'TextEdit', });
lyr_Domicliossemabastecimentodeguadaredegeral_4.set('fieldImages', {'cd_setor': 'TextEdit', 'SEM_AGUA': 'TextEdit', });
lyr_Domicliossemesgotamentosanitrioesembanheiro_5.set('fieldImages', {'cd_setor': 'TextEdit', 'SEM_ESGOTO': 'TextEdit', });
lyr_Domicliossemcoletadelixo_6.set('fieldImages', {'cd_setor': 'TextEdit', 'SEM_COLETA_LIXO': 'TextEdit', });
lyr_DistritosurbanosdeMarab_8.set('fieldImages', {'Nome_2': 'TextEdit', });
lyr_Pessoaspretaspardaseindgenas_1.set('fieldLabels', {'CD_SETOR': 'no label', 'RACIALIZACAO': 'no label', });
lyr_Pessoascommaisde15anosquenosabemlernemescrever_2.set('fieldLabels', {'CD_SETOR': 'no label', 'ANALFABETISMO': 'no label', });
lyr_Rendapercapita_3.set('fieldLabels', {'CD_SETOR': 'no label', 'PER_CAPITA': 'no label', });
lyr_Domicliossemabastecimentodeguadaredegeral_4.set('fieldLabels', {'cd_setor': 'no label', 'SEM_AGUA': 'no label', });
lyr_Domicliossemesgotamentosanitrioesembanheiro_5.set('fieldLabels', {'cd_setor': 'no label', 'SEM_ESGOTO': 'no label', });
lyr_Domicliossemcoletadelixo_6.set('fieldLabels', {'cd_setor': 'no label', 'SEM_COLETA_LIXO': 'no label', });
lyr_DistritosurbanosdeMarab_8.set('fieldLabels', {'Nome_2': 'no label', });
lyr_DistritosurbanosdeMarab_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});