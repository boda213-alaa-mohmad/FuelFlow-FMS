"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { stations } from "@/data/stations_map";

const activeIcon = L.divIcon({
  className: "custom-marker",
  html: `<div style="background-color: #FF7A59; width: 22px; height: 22px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;"></div>`,
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

const alertIcon = L.divIcon({
  className: "custom-marker",
  html: `<div style="background-color: #ef4444; width: 22px; height: 22px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 8px rgba(0,0,0,0.3); display: flex; align-items: center; justify-content: center;"></div>`,
  iconSize: [22, 22],
  iconAnchor: [11, 11],
});

export function MapViewComponent() {
  return (
    <div className="w-full h-[calc(100vh-160px)] min-h-[550px] rounded-2xl overflow-hidden border border-slate-100 shadow-sm relative z-0">
      <MapContainer
        // position egypt
        center={[27.0368, 30.8576]}
        zoom={6}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {stations.map((station) => (
          <Marker
            key={station.id}
            position={[station.lat, station.lng]}
            icon={station.alert ? alertIcon : activeIcon}
          >
            <Popup>
              <div className="p-1 space-y-1">
                <h4 className="text-xs font-bold text-slate-900">
                  {station.name}
                </h4>
                <p className="text-[11px] text-slate-500">
                  Fuel Level:{" "}
                  <span className="font-bold text-slate-700">
                    {station.fuelLevel}
                  </span>
                </p>
                <span
                  className={`inline-block text-[10px] px-1.5 py-0.5 rounded-xs font-bold ${
                    station.alert
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {station.status}
                </span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
