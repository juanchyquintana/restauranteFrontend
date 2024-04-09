import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { OpenStreetMapProvider } from "leaflet-geosearch";

const Mapa = ({ datos }) => {
  const [lat, setLat] = useState(datos.lat || -26.8301695);
  const [lng, setLng] = useState(datos.lng || -65.2044388);
  const [calle, setCalle] = useState(datos.calle || "");

  useEffect(() => {
    const mapa = L.map("mapa").setView([lat, lng], 15);
    let marker;

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapa);

    marker = new L.marker([lat, lng], {
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

    marker.on("moveend", (e) => {
      const posicion = e.target.getLatLng();
      setLat(posicion.lat);
      setLng(posicion.lng);

      provider
        .search({ query: `${posicion.lat},${posicion.lng}` })
        .then((results) => {
          const result = results[0];
          setCalle(result.label);
        });
    });

    return () => {
      mapa.remove();
    };
  }, [lat, lng]);

  return (
    <div>
      <div id="mapa" style={{ height: "400px" }}></div>
      <input
        type="text"
        placeholder="Escribe la calle"
        className="form-control"
        value={calle}
        onChange={(e) => setCalle(e.target.value)}
      />
      <input
        type="hidden"
        name="calle"
        id="calle"
        value={calle}
      />
      <input
        type="hidden"
        name="lat"
        id="lat"
        value={lat}
      />
      <input
        type="hidden"
        name="lng"
        id="lng"
        value={lng}
      />
    </div>
  );
};

export default Mapa;
