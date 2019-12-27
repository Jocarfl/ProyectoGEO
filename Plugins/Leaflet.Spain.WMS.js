//Spain

// Ortofotos del PNOA. MÃ¡xima actualidad
// Capabilities:http://www.ign.es/wms-inspire/pnoa-ma?request=GetCapabilities&service=WMS
// El servicio permite visualizar las ortofotos de mÃ¡xima actualidad del Plan Nacional de OrtofotografÃ­a AÃ©rea
// (PNOA) a partir de una escala aproximada 1:70 000. Para escalas menores (menos detalladas) se visualizan las
// imÃ¡genes de satÃ©lite Spot5.

var Spain_PNOA_Ortoimagen = L.tileLayer.wms('http://www.ign.es/wms-inspire/pnoa-ma', {
	layers: 'OI.OrthoimageCoverage',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: 'PNOA cedido por Â© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto GeogrÃ¡fico Nacional de EspaÃ±a</a>'
});
var Spain_PNOA_Mosaico = L.tileLayer.wms('http://www.ign.es/wms-inspire/pnoa-ma', {
	layers: 'OI.MosaicElement',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: 'PNOA cedido por Â© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto GeogrÃ¡fico Nacional de EspaÃ±a</a>'
});

// Ortofotos histÃ³ricas del PNOA
// Capabilities: http://www.ign.es/wms/pnoa-historico?request=GetCapabilities&service=WMS

var Spain_PNOA_2004 = L.tileLayer.wms('http://www.ign.es/wms/pnoa-historico', {
	layers: 'PNOA2004',			format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: 'PNOA cedido por Â© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto GeogrÃ¡fico Nacional de EspaÃ±a</a>'
});
var Spain_PNOA_2005 = L.tileLayer.wms('http://www.ign.es/wms/pnoa-historico', {
	layers: 'PNOA2005',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: 'PNOA cedido por Â© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto GeogrÃ¡fico Nacional de EspaÃ±a</a>'
});
var Spain_PNOA_2006 = L.tileLayer.wms('http://www.ign.es/wms/pnoa-historico', {
	layers: 'PNOA2006',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: 'PNOA cedido por Â© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto GeogrÃ¡fico Nacional de EspaÃ±a</a>'
});
var Spain_PNOA_2007 = L.tileLayer.wms('http://www.ign.es/wms/pnoa-historico', {
	layers: 'PNOA2007',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: 'PNOA cedido por Â© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto GeogrÃ¡fico Nacional de EspaÃ±a</a>'
});
var Spain_PNOA_2008 = L.tileLayer.wms('http://www.ign.es/wms/pnoa-historico', {
	layers: 'PNOA2008',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: 'PNOA cedido por Â© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto GeogrÃ¡fico Nacional de EspaÃ±a</a>'
});
var Spain_PNOA_2009 = L.tileLayer.wms('http://www.ign.es/wms/pnoa-historico', {
	layers: 'PNOA2009',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: 'PNOA cedido por Â© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto GeogrÃ¡fico Nacional de EspaÃ±a</a>'
});
var Spain_PNOA_2010 = L.tileLayer.wms('http://www.ign.es/wms/pnoa-historico', {
	layers: 'PNOA2010',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: 'PNOA cedido por Â© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto GeogrÃ¡fico Nacional de EspaÃ±a</a>'
});

// Unidades administrativas
// Capabilities:http://www.ign.es/wms-inspire/unidades-administrativas?request=GetCapabilities&service=WMS
// Unidades administrativas tres niveles de administraciÃ³n (comunidad autÃ³noma, provincia y municipio).

var Spain_UnidadAdministrativa = L.tileLayer.wms('http://www.ign.es/wms-inspire/unidades-administrativas', {
	layers: 'AU.AdministrativeUnit',
	format: 'image/png',
	transparent: true,
	continuousWorld : true,
	attribution: 'Â© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto GeogrÃ¡fico Nacional de EspaÃ±a</a>'

});

// CartografÃ­a raster IGN.
// Capabilities: http://www.ign.es/wms-inspire/mapa-raster?request=GetCapabilities&service=WMS
// CartografÃ­a raster del Instituto GeogrÃ¡fico Nacional.
// Mapa de EspaÃ±a a escala 1:2 000 000 hasta una resoluciÃ³n de 420 m/pixel.
// Mapa de EspaÃ±a a escala 1:1 250 000 hasta una resoluciÃ³n de 104.44 m/pixel.
// Mapa de EspaÃ±a a escala 1:500 000 hasta una resoluciÃ³n de 40.04 m/pixel.
// Mapa Provincial a escala 1:200 000 hasta una resoluciÃ³n de 20.16 m/pixel.
// Mapa TopogrÃ¡fico Nacional a escala 1:50 000 hasta una resoluciÃ³n de 5.04 m/pixel
// Mapa TopogrÃ¡fico Nacional a escala 1:25 000 a partir de una resoluciÃ³n de 5.04 m/pixel.

var Spain_MapasrasterIGN = L.tileLayer.wms('http://www.ign.es/wms-inspire/mapa-raster', {
	layers: 'mtn_rasterizado',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: 'Â© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto GeogrÃ¡fico Nacional de EspaÃ±a</a>'
});

// Mapa base de EspaÃ±a del Instituto GeogrÃ¡fico Nacional
// Capabilities: http://www.ign.es/wms-inspire/ign-base?request=GetCapabilities&service=WMS
// CartografÃ­a procedente de diversas bases de datos geogrÃ¡ficas del IGN.
// Para escalas menores se usa la Base CartogrÃ¡fica Nacional escala 1:500.000 (BCN500) y
// Base TopogrÃ¡fica Nacional escala 1:100.000 (BTN100)
// y para escalas mayores se usa la Base TopogrÃ¡fica Nacional 1:25.000 (BTN25) junto con la Base CartogrÃ¡fica NumÃ©rica 1:25.000 (BCN25).
// TambiÃ©n se visualiza informaciÃ³n procedente de NGBE (NomenclÃ¡tor GeogrÃ¡fico BÃ¡sico de EspaÃ±a),
// SIGLIM (Sistema GeogrÃ¡fico de LÃ­neas LÃ­mite) y Cartociudad.
var Spain_IGNBase = L.tileLayer.wms('http://www.ign.es/wms-inspire/ign-base', {
	layers: 'IGNBaseTodo',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: 'Â© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto GeogrÃ¡fico Nacional de EspaÃ±a</a>'
});

// Modelos Digitales del Terreno de EspaÃ±a
// http://www.ign.es/wms-inspire/mdt?request=GetCapabilities&service=WMS
// Modelos Digitales del Terreno de EspaÃ±a en diversos sistemas de referencia:
// Modelo Digital de Elevaciones, Modelo Digital de Pendientes y Modelo Digital de Orientaciones.

var Spain_MDT_Elevaciones = L.tileLayer.wms('http://www.ign.es/wms-inspire/mdt?', {
	layers: 'EL.GridCoverage',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: 'Â© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto GeogrÃ¡fico Nacional de EspaÃ±a</a>'
});

var Spain_MDT_Orientaciones = L.tileLayer.wms('http://www.ign.es/wms-inspire/mdt?', {
	layers: 'Orientaciones',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: 'Â© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto GeogrÃ¡fico Nacional de EspaÃ±a</a>'
});

var Spain_MDT_Pendientes = L.tileLayer.wms('http://www.ign.es/wms-inspire/mdt?', {
	layers: 'Pendientes',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: 'Â© <a href="http://www.ign.es/ign/main/index.do" target="_blank">Instituto GeogrÃ¡fico Nacional de EspaÃ±a</a>'
});

// CartografÃ­a Catastral
// Capabilities: http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?request=GetCapabilities&service=WMS
// CartografÃ­a Catastral de la DirecciÃ³n General del Catastro.

var Spain_Catastro = L.tileLayer.wms('http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx', {
	layers: 'Catastro',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: ' <a href="http://www.catastro.meh.es/" target="_blank">DirecciÃ³n General del Catastro</a>'
});

// ANDALUCIA

// Callejero Digital de AndalucÃ­a Unificado
// Capabilities: http://www.callejerodeandalucia.es/servicios/cdau/wms?request=GetCapabilities&service=WMS
// Ejes de vÃ­a y los portales del Callejero Digital de AndalucÃ­a Unificado.

var Andalucia_CDAUVialyPortal = L.tileLayer.wms('http://www.callejerodeandalucia.es/servicios/cdau/wms?', {
	layers: 'CDAU_wms',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
attribution: '<a href="http://www.callejerodeandalucia.es/portal/web/cdau/" target="_blank">Fuente: CDAU (Entidades Locales-Junta de AndalucÃ­a- IGN).</a>'
});

// CDAU Base CartogrÃ¡fica
// Capabilities: http://www.callejerodeandalucia.es/servicios/base/wms?request=GetCapabilities&service=WMS
// Base cartogrÃ¡fica del Callejero Digital de AndalucÃ­a Unificado


var Andalucia_CDAUBase = L.tileLayer.wms('http://www.callejerodeandalucia.es/servicios/base/wms?', {
	layers: 'CDAU_base',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: '<a href="http://www.callejerodeandalucia.es/portal/web/cdau/" target="_blank">Fuente: CDAU (Entidades Locales-Junta de AndalucÃ­a- IGN).</a>'
});

// Mapa Toporaster10
// Capabilities: http://www.ideandalucia.es/services/toporaster10/wms?request=GetCapabilities&service=WMS

var Andalucia_MapaToporaster10 = L.tileLayer.wms('http://www.ideandalucia.es/services/toporaster10/wms?', {
	layers: 'toporaster10',
	format: 'image/png',
	transparent: false,
	continuousWorld : true,
	attribution: '<a href="http://www.juntadeandalucia.es/institutodeestadisticaycartografia" target="_blank">Instituto de EstadÃ­stica y CartografÃ­a de AndalucÃ­a</a>'

});
