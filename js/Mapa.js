class Mapa{

  constructor(){
    console.log("Nuevo Mapa")
  }

  inicializar( idMapa ){
    var map = L.map( idMapa, {
      center: [38.972, -0.303],
      zoom: 12,
      zoomControl: false
    });
    var inicial = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    var zoomHome = L.Control.zoomHome();
    zoomHome.addTo(map);

    // CATASTRO/PARCELARIO layers
    var Spain_Catastro = L.tileLayer.wms('http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx', {
      layers: 'catastro',
      format: 'image/png',
      transparent: false,
      continuousWorld: true,
      attribution: ' <a href="http://www.catastro.meh.es/" target="_blank">DirecciÃ³n General del Catastro</a>'
    });

    //Topografico
    var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });
    // Campos de Oliveras

    var Incendio = new L.Shapefile('Corine_incendio_shp.zip', {
      onEachFeature: function(feature, marker) {
        marker.bindPopup("<h5>Area en ha: " + feature.properties.AREA_HA + "</h5><i><b>Descripcion:</b>" + feature.properties.DESC_ + "<br><b>Area:</b>" +
          feature.properties.Shape_Area + " m2<br><b> Perímetro:" + feature.properties.Shape_Leng + "m");
      }
    });

    var Precipitaciones = new L.Shapefile('combinacion.zip', {
      onEachFeature: function(feature, marker) {
        marker.bindPopup("<h6>Area: " + feature.properties.Area + "</h6><i><b>Perimetro: </b>" + feature.properties.Perimetro);
      }
    });



    // Menu de capas
    var baseMaps = [{
      groupName: "IGN Base",
      layers: {
        "Ortoimagen": Spain_PNOA_Ortoimagen,
        "Base": Spain_IGNBase,
      }
    }, {

      groupName: "Catastro/DGC",
      layers: {
        "Parcelario": Spain_Catastro,
      }
    }, {

      groupName: "Topografico",
      layers: {
        "Topografico": OpenTopoMap,
      }
    }];

    var overlays = [{
      groupName: "Capas vectoriales",
      layers: {
        "Incendio 1": Incendio,
        "Incendio 2": Precipitaciones,
      }
    }];

    var options = {
      container_width: "300px",
      group_maxHeight: "80px",
      exclusive: false,
      collapsed: true,
      position: 'topright'
    };
    var control = L.Control.styledLayerControl(baseMaps, overlays, options);
    map.addControl(control);

    var measureControl = new L.Control.Measure({
      position: 'topleft',
      primaryLengthUnit: 'meters',
      secondaryLengthUnit: 'kilometers',
      primaryAreaUnit: 'hectares',
      activeColor: 'red',
      completedColor: 'blue'
    });
    measureControl.addTo(map);

    var printer = L.easyPrint({
      tileLayer: inicial,
      sizeModes: ['Current', 'A4Landscape', 'A4Portrait'],
      filename: 'myMap',
      exportOnly: true,
      hideControlContainer: true
    }).addTo(map);

    var osm2 = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    var miniMap = new L.Control.MiniMap(osm2, {
      toggleDisplay: true,
      zoomLevelOffset: -8
    }).addTo(map);

    var position = new L.Control.MousePosition({
      position: 'bottomleft',
      separator: '--',
      prefix: 'Coordenadas Lat--Lon : '
    }).addTo(map);

    var escala = L.control.scale({
      position: 'bottomleft',
      metric: true,
      maxWidth: 200
    }).addTo(map);

    var zoomBox = L.Control.boxzoom({
      position: 'topleft'
    }).addTo(map);

    var source = L.WMS.source('https://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?', {
      opacity: 0.1,
      info_format: "text/html"
    });
    source.getLayer("PARCELA").addTo(map);
  }

}
