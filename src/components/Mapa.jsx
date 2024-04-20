import { OpenStreetMapProvider } from "leaflet-geosearch";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const Mapa = ({ datos, actualizarCarrito }) => {
  const [lat, setLat] = useState(datos.lat || -26.8301695);
  const [lng, setLng] = useState(datos.lng || -65.2044388);
  const [calle, setCalle] = useState("65, 25 de Mayo de 1810, Centro, San Miguel de Tucumán, Departamento Capital, Tucumán, T4000, Argentina");

  const actualizarDireccion = (direccion, lat, lng) => {
    setCalle(direccion);

    if (actualizarCarrito) {
      actualizarCarrito(direccion, lat, lng);
    }
  };

  const redIcon = new L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  })

  useEffect(() => {
    if (datos.delivery) {
      const mapa = L.map("mapa").setView([lat, lng], 15);
      let marker;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapa);

      marker = new L.marker([lat, lng], {
        icon: redIcon,
        draggable: true,
        autoPan: true,
      }).addTo(mapa);

      const provider = new OpenStreetMapProvider({
        params: {
          bounded: 1,
          viewbox: "-65.5,-27,-64.5,-26",
          countrycodes: "AR",
        },
      });

      marker.bindPopup("¡Aquí estoy!").openPopup();
      marker.on("moveend", (e) => {
        const posicion = e.target.getLatLng();
        setLat(posicion.lat);
        setLng(posicion.lng);

        provider
          .search({ query: `${posicion.lat},${posicion.lng}` })
          .then((resultados) => {
            const resultado = resultados[0];
            const calle = `${resultado.label}`;
            actualizarDireccion(calle, resultado.x, resultado.y);
          });
      });

      return () => {
        mapa.remove();
      };
    }
  }, [datos.delivery]);

  return (
    <div>
      <div id="mapa" className="shadow" style={{ height: "400px" }}></div>
      <input
        type="text"
        placeholder="Su direccion es..."
        className="form-control mt-3 p-2"
        value={calle}
        onChange={(e) => setCalle(e.target.value)}
        readOnly
      />
      <input type="hidden" name="calle" id="calle" value={calle}/>
      <input type="hidden" name="lat" id="lat" value={lat}/>
      <input type="hidden" name="lng" id="lng" value={lng} />
    </div>
  );
};

export default Mapa;
