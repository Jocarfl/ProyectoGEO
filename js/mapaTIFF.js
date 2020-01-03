class MapaTif{

    constructor(){
      console.log("Nuevo Mapa")
    }

    inicializar( idMapa ){


      var mymap = L.map(idMapa).setView([35, -3], 5);


      let url = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';


      L.tileLayer(url, {
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: 'abcd'
      }).addTo(mymap);

      var zoomHome = L.Control.zoomHome();
      zoomHome.addTo(mymap);

      var tiff = "http://127.0.0.1:8080/CORINE_INCENDIO%20(1).tif";
        fetch(tiff).then(r => r.arrayBuffer()).then(function(buffer) {
        var s = L.ScalarField.fromGeoTIFF(buffer);
        let layer = L.canvasLayer.scalarField(s, {
                  color: chroma.scale(['#FFA5A5', '#FA0000']).domain(s.range),
              }).addTo(mymap);
        layer.on("click", function(e) {
          if (e.value !== null) {
          let popup = L.popup()
            .setLatLng(e.latlng)
            .setContent(`${e.value}`)
            .openOn(mymap);
          }
      });

      mymap.fitBounds(layer.getBounds());
    });

      var measureControl = new L.Control.Measure({
        position: 'topleft',
        primaryLengthUnit: 'meters',
        secondaryLengthUnit: 'kilometers',
        primaryAreaUnit: 'hectares',
        activeColor: 'red',
        completedColor: 'blue'
      });
      measureControl.addTo(mymap);

      var printer = L.easyPrint({
        tileLayer: inicial,
        sizeModes: ['Current', 'A4Landscape', 'A4Portrait'],
        filename: 'myMap',
        exportOnly: true,
        hideControlContainer: true
      }).addTo(mymap);

      var osm2 = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
      var miniMap = new L.Control.MiniMap(osm2, {
        toggleDisplay: true,
        zoomLevelOffset: -8
      }).addTo(mymap);

      var position = new L.Control.MousePosition({
        position: 'bottomleft',
        separator: '--',
        prefix: 'Coordenadas Lat--Lon : '
      }).addTo(mymap);

      var escala = L.control.scale({
        position: 'bottomleft',
        metric: true,
        maxWidth: 200
      }).addTo(mymap);

      var zoomBox = L.Control.boxzoom({
        position: 'topleft'
      }).addTo(mymap);

      var source = L.WMS.source('https://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx?', {
        opacity: 0.1,
        info_format: "text/html"
      });
      source.getLayer("PARCELA").addTo(mymap);
    }

}
