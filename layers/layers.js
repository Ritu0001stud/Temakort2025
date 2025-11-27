var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Lokalplanvedtaget_1 = new ol.format.GeoJSON();
var features_Lokalplanvedtaget_1 = format_Lokalplanvedtaget_1.readFeatures(json_Lokalplanvedtaget_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplanvedtaget_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplanvedtaget_1.addFeatures(features_Lokalplanvedtaget_1);
var lyr_Lokalplanvedtaget_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplanvedtaget_1, 
                style: style_Lokalplanvedtaget_1,
                popuplayertitle: 'Lokalplan vedtaget',
                interactive: true,
    title: 'Lokalplan vedtaget<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_0.png" /> 001<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_1.png" /> 101-1<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_2.png" /> 102<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_3.png" /> 103<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_4.png" /> 104<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_5.png" /> 105<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_6.png" /> 106<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_7.png" /> 108<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_8.png" /> 109-1<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_9.png" /> 112<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_10.png" /> 115<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_11.png" /> 116<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_12.png" /> 118<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_13.png" /> 119<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_14.png" /> 120<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_15.png" /> 121<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_16.png" /> 122<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_17.png" /> 124<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_18.png" /> 126<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_19.png" /> 127<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_20.png" /> 128<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_21.png" /> 131<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_22.png" /> 132<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_23.png" /> 133<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_24.png" /> 134<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_25.png" /> 135<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_26.png" /> 137<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_27.png" /> 139<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_28.png" /> 140<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_29.png" /> 141<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_30.png" /> 142<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_31.png" /> 143<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_32.png" /> 144<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_33.png" /> 147<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_34.png" /> 148<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_35.png" /> 149<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_36.png" /> 150<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_37.png" /> 151<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_38.png" /> 152<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_39.png" /> 154<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_40.png" /> 202<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_41.png" /> 203<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_42.png" /> 206<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_43.png" /> 207<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_44.png" /> 208<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_45.png" /> 209<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_46.png" /> 210<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_47.png" /> 211<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_48.png" /> 216<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_49.png" /> 220<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_50.png" /> 221<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_51.png" /> 225<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_52.png" /> 226<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_53.png" /> 228<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_54.png" /> 229<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_55.png" /> 230<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_56.png" /> 231<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_57.png" /> 232<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_58.png" /> 233<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_59.png" /> 234<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_60.png" /> 236<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_61.png" /> 237<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_62.png" /> 238<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_63.png" /> 239<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_64.png" /> 240<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_65.png" /> 241<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_66.png" /> 301-1<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_67.png" /> 303<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_68.png" /> 304<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_69.png" /> 305<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_70.png" /> 306<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_71.png" /> 313<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_72.png" /> 314<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_73.png" /> 316<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_74.png" /> 322<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_75.png" /> 323<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_76.png" /> 324<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_77.png" /> 325<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_78.png" /> 326<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_79.png" /> 327<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_80.png" /> 328<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_81.png" /> 329<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_82.png" /> 330<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_83.png" /> 331<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_84.png" /> 332<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_85.png" /> 335<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_86.png" /> 338<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_87.png" /> 339<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_88.png" /> 340<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_89.png" /> 341<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_90.png" /> 342<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_91.png" /> 343<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_92.png" /> 345<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_93.png" /> 403-1<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_94.png" /> 404<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_95.png" /> 405<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_96.png" /> 407<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_97.png" /> 408<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_98.png" /> 409<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_99.png" /> 411<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_100.png" /> 412<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_101.png" /> 418<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_102.png" /> 423<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_103.png" /> 429<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_104.png" /> 432<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_105.png" /> 433<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_106.png" /> 440<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_107.png" /> 441<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_108.png" /> 447<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_109.png" /> 448<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_110.png" /> 452<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_111.png" /> 454<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_112.png" /> 455<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_113.png" /> 456<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_114.png" /> 457<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_115.png" /> 458<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_116.png" /> 459<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_117.png" /> 462<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_118.png" /> 463<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_119.png" /> 464<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_120.png" /> 466<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_121.png" /> 467<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_122.png" /> 468<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_123.png" /> 469<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_124.png" /> 470<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_125.png" /> 471<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_126.png" /> 472<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_127.png" /> 473<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_128.png" /> 475<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_129.png" /> 476<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_130.png" /> 504<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_131.png" /> 507<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_132.png" /> 508<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_133.png" /> 510<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_134.png" /> 511<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_135.png" /> 516<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_136.png" /> 518<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_137.png" /> 519<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_138.png" /> A1<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_139.png" /> A10<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_140.png" /> A11<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_141.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_142.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_143.png" /> A13<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_144.png" /> A14<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_145.png" /> A15<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_146.png" /> A3<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_147.png" /> A5<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_148.png" /> A7<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_149.png" /> A8<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_150.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_151.png" /> B17<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_152.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_153.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_154.png" /> H1 tillæg 4<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_155.png" /> H10<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_156.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_157.png" /> H11<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_158.png" /> H12<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_159.png" /> H13<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_160.png" /> H14<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_161.png" /> H15<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_162.png" /> H16<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_163.png" /> H17<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_164.png" /> H18<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_165.png" /> H20<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_166.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_167.png" /> H3<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_168.png" /> H4<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_169.png" /> H5<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_170.png" /> H9<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_171.png" /> Lokalplan 127 med Tillæg nr. 1<br />\
    <img src="styles/legend/Lokalplanvedtaget_1_172.png" /> <br />' });
var format_Lokalplanforslag_2 = new ol.format.GeoJSON();
var features_Lokalplanforslag_2 = format_Lokalplanforslag_2.readFeatures(json_Lokalplanforslag_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplanforslag_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplanforslag_2.addFeatures(features_Lokalplanforslag_2);
var lyr_Lokalplanforslag_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplanforslag_2, 
                style: style_Lokalplanforslag_2,
                popuplayertitle: 'Lokalplanforslag',
                interactive: true,
    title: 'Lokalplanforslag<br />\
    <img src="styles/legend/Lokalplanforslag_2_0.png" /> 153<br />\
    <img src="styles/legend/Lokalplanforslag_2_1.png" /> 155<br />\
    <img src="styles/legend/Lokalplanforslag_2_2.png" /> 242<br />\
    <img src="styles/legend/Lokalplanforslag_2_3.png" /> <br />' });
var format_Strandbeskyttelseny_3 = new ol.format.GeoJSON();
var features_Strandbeskyttelseny_3 = format_Strandbeskyttelseny_3.readFeatures(json_Strandbeskyttelseny_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttelseny_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttelseny_3.addFeatures(features_Strandbeskyttelseny_3);
var lyr_Strandbeskyttelseny_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttelseny_3, 
                style: style_Strandbeskyttelseny_3,
                popuplayertitle: 'Strandbeskyttelse ny',
                interactive: false,
                title: '<img src="styles/legend/Strandbeskyttelseny_3.png" /> Strandbeskyttelse ny'
            });
var format_Kommuneplan_4 = new ol.format.GeoJSON();
var features_Kommuneplan_4 = format_Kommuneplan_4.readFeatures(json_Kommuneplan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommuneplan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommuneplan_4.addFeatures(features_Kommuneplan_4);
var lyr_Kommuneplan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kommuneplan_4, 
                style: style_Kommuneplan_4,
                popuplayertitle: 'Kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/Kommuneplan_4.png" /> Kommuneplan'
            });
var format_Genbrugsplads_5 = new ol.format.GeoJSON();
var features_Genbrugsplads_5 = format_Genbrugsplads_5.readFeatures(json_Genbrugsplads_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Genbrugsplads_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Genbrugsplads_5.addFeatures(features_Genbrugsplads_5);
var lyr_Genbrugsplads_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Genbrugsplads_5, 
                style: style_Genbrugsplads_5,
                popuplayertitle: 'Genbrugsplads',
                interactive: true,
                title: '<img src="styles/legend/Genbrugsplads_5.png" /> Genbrugsplads'
            });
var format_Kirker_6 = new ol.format.GeoJSON();
var features_Kirker_6 = format_Kirker_6.readFeatures(json_Kirker_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirker_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirker_6.addFeatures(features_Kirker_6);
var lyr_Kirker_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kirker_6, 
                style: style_Kirker_6,
                popuplayertitle: 'Kirker',
                interactive: true,
                title: '<img src="styles/legend/Kirker_6.png" /> Kirker'
            });
var format_Legeplads_7 = new ol.format.GeoJSON();
var features_Legeplads_7 = format_Legeplads_7.readFeatures(json_Legeplads_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legeplads_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legeplads_7.addFeatures(features_Legeplads_7);
var lyr_Legeplads_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legeplads_7, 
                style: style_Legeplads_7,
                popuplayertitle: 'Legeplads',
                interactive: true,
                title: '<img src="styles/legend/Legeplads_7.png" /> Legeplads'
            });
var format_Lgehus_8 = new ol.format.GeoJSON();
var features_Lgehus_8 = format_Lgehus_8.readFeatures(json_Lgehus_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lgehus_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lgehus_8.addFeatures(features_Lgehus_8);
var lyr_Lgehus_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lgehus_8, 
                style: style_Lgehus_8,
                popuplayertitle: 'Lægehus',
                interactive: true,
                title: '<img src="styles/legend/Lgehus_8.png" /> Lægehus'
            });
var format_Parker_9 = new ol.format.GeoJSON();
var features_Parker_9 = format_Parker_9.readFeatures(json_Parker_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parker_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parker_9.addFeatures(features_Parker_9);
var lyr_Parker_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parker_9, 
                style: style_Parker_9,
                popuplayertitle: 'Parker',
                interactive: true,
                title: '<img src="styles/legend/Parker_9.png" /> Parker'
            });
var format_Plejehjem_10 = new ol.format.GeoJSON();
var features_Plejehjem_10 = format_Plejehjem_10.readFeatures(json_Plejehjem_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Plejehjem_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Plejehjem_10.addFeatures(features_Plejehjem_10);
var lyr_Plejehjem_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Plejehjem_10, 
                style: style_Plejehjem_10,
                popuplayertitle: 'Plejehjem',
                interactive: true,
                title: '<img src="styles/legend/Plejehjem_10.png" /> Plejehjem'
            });
var format_Sygehus_11 = new ol.format.GeoJSON();
var features_Sygehus_11 = format_Sygehus_11.readFeatures(json_Sygehus_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sygehus_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sygehus_11.addFeatures(features_Sygehus_11);
var lyr_Sygehus_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sygehus_11, 
                style: style_Sygehus_11,
                popuplayertitle: 'Sygehus',
                interactive: true,
                title: '<img src="styles/legend/Sygehus_11.png" /> Sygehus'
            });
var format_Togstationer_12 = new ol.format.GeoJSON();
var features_Togstationer_12 = format_Togstationer_12.readFeatures(json_Togstationer_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_12.addFeatures(features_Togstationer_12);
var lyr_Togstationer_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_12, 
                style: style_Togstationer_12,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_12.png" /> Togstationer'
            });
var format_Uddanlesesteder_13 = new ol.format.GeoJSON();
var features_Uddanlesesteder_13 = format_Uddanlesesteder_13.readFeatures(json_Uddanlesesteder_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uddanlesesteder_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uddanlesesteder_13.addFeatures(features_Uddanlesesteder_13);
var lyr_Uddanlesesteder_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uddanlesesteder_13, 
                style: style_Uddanlesesteder_13,
                popuplayertitle: 'Uddanlesesteder',
                interactive: true,
                title: '<img src="styles/legend/Uddanlesesteder_13.png" /> Uddanlesesteder'
            });
var format_Fodboldbaner_14 = new ol.format.GeoJSON();
var features_Fodboldbaner_14 = format_Fodboldbaner_14.readFeatures(json_Fodboldbaner_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fodboldbaner_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fodboldbaner_14.addFeatures(features_Fodboldbaner_14);
var lyr_Fodboldbaner_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fodboldbaner_14, 
                style: style_Fodboldbaner_14,
                popuplayertitle: 'Fodboldbaner ',
                interactive: true,
                title: '<img src="styles/legend/Fodboldbaner_14.png" /> Fodboldbaner '
            });
var format_Badestrand_15 = new ol.format.GeoJSON();
var features_Badestrand_15 = format_Badestrand_15.readFeatures(json_Badestrand_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Badestrand_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Badestrand_15.addFeatures(features_Badestrand_15);
var lyr_Badestrand_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Badestrand_15, 
                style: style_Badestrand_15,
                popuplayertitle: 'Badestrand ',
                interactive: true,
                title: '<img src="styles/legend/Badestrand_15.png" /> Badestrand '
            });
var format_Brnehaver_16 = new ol.format.GeoJSON();
var features_Brnehaver_16 = format_Brnehaver_16.readFeatures(json_Brnehaver_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Brnehaver_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Brnehaver_16.addFeatures(features_Brnehaver_16);
var lyr_Brnehaver_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Brnehaver_16, 
                style: style_Brnehaver_16,
                popuplayertitle: 'Børnehaver',
                interactive: true,
                title: '<img src="styles/legend/Brnehaver_16.png" /> Børnehaver'
            });
var format_Folkeskoler_17 = new ol.format.GeoJSON();
var features_Folkeskoler_17 = format_Folkeskoler_17.readFeatures(json_Folkeskoler_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_17.addFeatures(features_Folkeskoler_17);
var lyr_Folkeskoler_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_17, 
                style: style_Folkeskoler_17,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_17.png" /> Folkeskoler'
            });
var format_Elladestandere_18 = new ol.format.GeoJSON();
var features_Elladestandere_18 = format_Elladestandere_18.readFeatures(json_Elladestandere_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Elladestandere_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Elladestandere_18.addFeatures(features_Elladestandere_18);
var lyr_Elladestandere_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Elladestandere_18, 
                style: style_Elladestandere_18,
                popuplayertitle: 'El-ladestandere',
                interactive: true,
                title: '<img src="styles/legend/Elladestandere_18.png" /> El-ladestandere'
            });
var format_Havn_19 = new ol.format.GeoJSON();
var features_Havn_19 = format_Havn_19.readFeatures(json_Havn_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Havn_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Havn_19.addFeatures(features_Havn_19);
var lyr_Havn_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Havn_19, 
                style: style_Havn_19,
                popuplayertitle: 'Havn',
                interactive: true,
                title: '<img src="styles/legend/Havn_19.png" /> Havn'
            });
var format_HvidovreApotek_20 = new ol.format.GeoJSON();
var features_HvidovreApotek_20 = format_HvidovreApotek_20.readFeatures(json_HvidovreApotek_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovreApotek_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovreApotek_20.addFeatures(features_HvidovreApotek_20);
var lyr_HvidovreApotek_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovreApotek_20, 
                style: style_HvidovreApotek_20,
                popuplayertitle: 'Hvidovre Apotek ',
                interactive: true,
                title: '<img src="styles/legend/HvidovreApotek_20.png" /> Hvidovre Apotek '
            });
var format_Hvidovrekommune_21 = new ol.format.GeoJSON();
var features_Hvidovrekommune_21 = format_Hvidovrekommune_21.readFeatures(json_Hvidovrekommune_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hvidovrekommune_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hvidovrekommune_21.addFeatures(features_Hvidovrekommune_21);
var lyr_Hvidovrekommune_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hvidovrekommune_21, 
                style: style_Hvidovrekommune_21,
                popuplayertitle: 'Hvidovre kommune ',
                interactive: false,
                title: '<img src="styles/legend/Hvidovrekommune_21.png" /> Hvidovre kommune '
            });
var format_HvidovreRdhus_22 = new ol.format.GeoJSON();
var features_HvidovreRdhus_22 = format_HvidovreRdhus_22.readFeatures(json_HvidovreRdhus_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovreRdhus_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovreRdhus_22.addFeatures(features_HvidovreRdhus_22);
var lyr_HvidovreRdhus_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovreRdhus_22, 
                style: style_HvidovreRdhus_22,
                popuplayertitle: 'Hvidovre Rådhus ',
                interactive: true,
                title: '<img src="styles/legend/HvidovreRdhus_22.png" /> Hvidovre Rådhus '
            });
var format_Kirkegrde_23 = new ol.format.GeoJSON();
var features_Kirkegrde_23 = format_Kirkegrde_23.readFeatures(json_Kirkegrde_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirkegrde_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirkegrde_23.addFeatures(features_Kirkegrde_23);
var lyr_Kirkegrde_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kirkegrde_23, 
                style: style_Kirkegrde_23,
                popuplayertitle: 'Kirkegårde',
                interactive: false,
                title: '<img src="styles/legend/Kirkegrde_23.png" /> Kirkegårde'
            });
var format_Resturanter_24 = new ol.format.GeoJSON();
var features_Resturanter_24 = format_Resturanter_24.readFeatures(json_Resturanter_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Resturanter_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Resturanter_24.addFeatures(features_Resturanter_24);
var lyr_Resturanter_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Resturanter_24, 
                style: style_Resturanter_24,
                popuplayertitle: 'Resturanter ',
                interactive: true,
                title: '<img src="styles/legend/Resturanter_24.png" /> Resturanter '
            });
var format_Supermarkeder_25 = new ol.format.GeoJSON();
var features_Supermarkeder_25 = format_Supermarkeder_25.readFeatures(json_Supermarkeder_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Supermarkeder_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Supermarkeder_25.addFeatures(features_Supermarkeder_25);
var lyr_Supermarkeder_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Supermarkeder_25, 
                style: style_Supermarkeder_25,
                popuplayertitle: 'Supermarkeder',
                interactive: true,
                title: '<img src="styles/legend/Supermarkeder_25.png" /> Supermarkeder'
            });
var format_Svmmehaler_26 = new ol.format.GeoJSON();
var features_Svmmehaler_26 = format_Svmmehaler_26.readFeatures(json_Svmmehaler_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Svmmehaler_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Svmmehaler_26.addFeatures(features_Svmmehaler_26);
var lyr_Svmmehaler_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Svmmehaler_26, 
                style: style_Svmmehaler_26,
                popuplayertitle: 'Svømmehaler',
                interactive: true,
                title: '<img src="styles/legend/Svmmehaler_26.png" /> Svømmehaler'
            });
var format_Tankstationer_27 = new ol.format.GeoJSON();
var features_Tankstationer_27 = format_Tankstationer_27.readFeatures(json_Tankstationer_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tankstationer_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tankstationer_27.addFeatures(features_Tankstationer_27);
var lyr_Tankstationer_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tankstationer_27, 
                style: style_Tankstationer_27,
                popuplayertitle: 'Tankstationer',
                interactive: true,
                title: '<img src="styles/legend/Tankstationer_27.png" /> Tankstationer'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Lokalplanvedtaget_1.setVisible(true);lyr_Lokalplanforslag_2.setVisible(true);lyr_Strandbeskyttelseny_3.setVisible(true);lyr_Kommuneplan_4.setVisible(true);lyr_Genbrugsplads_5.setVisible(true);lyr_Kirker_6.setVisible(true);lyr_Legeplads_7.setVisible(true);lyr_Lgehus_8.setVisible(true);lyr_Parker_9.setVisible(true);lyr_Plejehjem_10.setVisible(true);lyr_Sygehus_11.setVisible(true);lyr_Togstationer_12.setVisible(true);lyr_Uddanlesesteder_13.setVisible(true);lyr_Fodboldbaner_14.setVisible(true);lyr_Badestrand_15.setVisible(true);lyr_Brnehaver_16.setVisible(true);lyr_Folkeskoler_17.setVisible(true);lyr_Elladestandere_18.setVisible(true);lyr_Havn_19.setVisible(true);lyr_HvidovreApotek_20.setVisible(true);lyr_Hvidovrekommune_21.setVisible(true);lyr_HvidovreRdhus_22.setVisible(true);lyr_Kirkegrde_23.setVisible(true);lyr_Resturanter_24.setVisible(true);lyr_Supermarkeder_25.setVisible(true);lyr_Svmmehaler_26.setVisible(true);lyr_Tankstationer_27.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Lokalplanvedtaget_1,lyr_Lokalplanforslag_2,lyr_Strandbeskyttelseny_3,lyr_Kommuneplan_4,lyr_Genbrugsplads_5,lyr_Kirker_6,lyr_Legeplads_7,lyr_Lgehus_8,lyr_Parker_9,lyr_Plejehjem_10,lyr_Sygehus_11,lyr_Togstationer_12,lyr_Uddanlesesteder_13,lyr_Fodboldbaner_14,lyr_Badestrand_15,lyr_Brnehaver_16,lyr_Folkeskoler_17,lyr_Elladestandere_18,lyr_Havn_19,lyr_HvidovreApotek_20,lyr_Hvidovrekommune_21,lyr_HvidovreRdhus_22,lyr_Kirkegrde_23,lyr_Resturanter_24,lyr_Supermarkeder_25,lyr_Svmmehaler_26,lyr_Tankstationer_27];
lyr_Lokalplanvedtaget_1.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'anvgen': 'anvgen', 'datovedt': 'datovedt', 'doklink': 'doklink', });
lyr_Lokalplanforslag_2.set('fieldAliases', {'fid': 'fid', 'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Strandbeskyttelseny_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_Kommuneplan_4.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Genbrugsplads_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kirker_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Legeplads_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lgehus_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Parker_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Plejehjem_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Sygehus_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Togstationer_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Uddanlesesteder_13.set('fieldAliases', {'fid': 'fid', 'Skolens na': 'Skolens na', 'Uddanelse': 'Uddanelse', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Fodboldbaner_14.set('fieldAliases', {'fid': 'fid', 'fodboldban': 'fodboldban', 'Adresse': 'Adresse', 'By': 'By', 'Telefonumm': 'Telefonumm', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Badestrand_15.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Brnehaver_16.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Folkeskoler_17.set('fieldAliases', {'fid': 'fid', 'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Elladestandere_18.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Havn_19.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HvidovreApotek_20.set('fieldAliases', {'fid': 'fid', 'Apotek nav': 'Apotek nav', 'Adresse': 'Adresse', 'By': 'By', 'Telefonumm': 'Telefonumm', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Hvidovrekommune_21.set('fieldAliases', {'fid': 'fid', 'Kommune na': 'Kommune na', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_HvidovreRdhus_22.set('fieldAliases', {'fid': 'fid', 'rådhus na': 'rådhus na', 'Adresse': 'Adresse', 'By': 'By', 'Telefonnum': 'Telefonnum', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Kirkegrde_23.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Resturanter_24.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Supermarkeder_25.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Svmmehaler_26.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Tankstationer_27.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Lokalplanvedtaget_1.set('fieldImages', {'fid': 'TextEdit', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'anvgen': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', });
lyr_Lokalplanforslag_2.set('fieldImages', {'fid': '', 'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Strandbeskyttelseny_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_Kommuneplan_4.set('fieldImages', {'fid': 'Hidden', 'oid': 'Hidden', 'id': 'Hidden', 'planid': 'Hidden', 'objektkode': 'Hidden', 'komnr': 'Hidden', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Hidden', 'datovedt': 'Hidden', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'Hidden', 'datoopdt': 'Hidden', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'Hidden', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_Genbrugsplads_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Kirker_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Legeplads_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Lgehus_8.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Parker_9.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Plejehjem_10.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Sygehus_11.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Togstationer_12.set('fieldImages', {'fid': '', 'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Uddanlesesteder_13.set('fieldImages', {'fid': '', 'Skolens na': 'TextEdit', 'Uddanelse': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Fodboldbaner_14.set('fieldImages', {'fid': '', 'fodboldban': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonumm': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Badestrand_15.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Brnehaver_16.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Folkeskoler_17.set('fieldImages', {'fid': '', 'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Elladestandere_18.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Havn_19.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_HvidovreApotek_20.set('fieldImages', {'fid': '', 'Apotek nav': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonumm': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Hvidovrekommune_21.set('fieldImages', {'fid': '', 'Kommune na': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_HvidovreRdhus_22.set('fieldImages', {'fid': '', 'rådhus na': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Telefonnum': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Kirkegrde_23.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Resturanter_24.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Supermarkeder_25.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Svmmehaler_26.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Tankstationer_27.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Lokalplanvedtaget_1.set('fieldLabels', {'fid': 'no label', 'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'anvgen': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', });
lyr_Lokalplanforslag_2.set('fieldLabels', {'fid': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'datovedt': 'no label', 'doklink': 'no label', 'anvendelse': 'no label', });
lyr_Strandbeskyttelseny_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_Kommuneplan_4.set('fieldLabels', {'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', });
lyr_Genbrugsplads_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Kirker_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Legeplads_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Lgehus_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Parker_9.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Plejehjem_10.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Sygehus_11.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Togstationer_12.set('fieldLabels', {'fid': 'no label', 'Name': 'header label - visible with data', });
lyr_Uddanlesesteder_13.set('fieldLabels', {'fid': 'no label', 'Skolens na': 'no label', 'Uddanelse': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Fodboldbaner_14.set('fieldLabels', {'fid': 'no label', 'fodboldban': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefonumm': 'inline label - always visible', });
lyr_Badestrand_15.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Brnehaver_16.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Folkeskoler_17.set('fieldLabels', {'fid': 'no label', 'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Elladestandere_18.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Havn_19.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_HvidovreApotek_20.set('fieldLabels', {'fid': 'no label', 'Apotek nav': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefonumm': 'inline label - always visible', });
lyr_Hvidovrekommune_21.set('fieldLabels', {'fid': 'no label', 'Kommune na': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Telefonnum': 'no label', });
lyr_HvidovreRdhus_22.set('fieldLabels', {'fid': 'no label', 'rådhus na': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Telefonnum': 'inline label - always visible', });
lyr_Kirkegrde_23.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', });
lyr_Resturanter_24.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Supermarkeder_25.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Svmmehaler_26.set('fieldLabels', {'fid': 'no label', 'id': 'header label - always visible', 'Name': 'inline label - always visible', });
lyr_Tankstationer_27.set('fieldLabels', {'fid': 'no label', 'id': 'inline label - always visible', 'Name': 'inline label - always visible', });
lyr_Tankstationer_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});