"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { Map as LeafletMap } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { SITE_GEO } from "@/lib/site";

const LAT = SITE_GEO.latitude;
const LON = SITE_GEO.longitude;

const CARTO_KEY = process.env.NEXT_PUBLIC_CARTO_MAP_KEY;
const tileUrl =
  "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" +
  (CARTO_KEY ? `?key=${CARTO_KEY}` : "");

const pin = L.divIcon({
  className: "",
  html: `<svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 0C9.373 0 4 5.373 4 12c0 9 12 28 12 28S28 21 28 12C28 5.373 22.627 0 16 0z" fill="#C41230"/>
    <circle cx="16" cy="12" r="5" fill="white"/>
  </svg>`,
  iconSize: [32, 40],
  iconAnchor: [16, 40],
  popupAnchor: [0, -42],
});

export default function LocationMap() {
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    // prevent Leaflet from looking for icons in _next/static
    delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
    L.Icon.Default.mergeOptions({ iconRetinaUrl: "", iconUrl: "", shadowUrl: "" });
  }, []);

  // Re-measure once after mount in case the container sized after the map created.
  useEffect(() => {
    const t = setTimeout(() => mapRef.current?.invalidateSize(), 210);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative isolate h-full w-full">
      <MapContainer
        ref={mapRef}
        center={[LAT, LON]}
        zoom={11}
        scrollWheelZoom={false}
        className="h-full w-full"
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">Carto</a> &copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url={tileUrl}
          subdomains="abcd"
          maxZoom={20}
        />
        <Marker position={[LAT, LON]} icon={pin}>
          <Popup>
            <span className="font-semibold">Carolina Moldings, Inc.</span>
            <br />
            3600 Woodpark Blvd, Suite A
            <br />
            Charlotte, NC 28206
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
