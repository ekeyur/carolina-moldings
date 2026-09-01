"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { Map as LeafletMap } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Maximize2, X } from "lucide-react";

const LAT = 35.2667;
const LON = -80.8238;

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
  const [expanded, setExpanded] = useState(false);
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    // prevent Leaflet from looking for icons in _next/static
    delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
    L.Icon.Default.mergeOptions({ iconRetinaUrl: "", iconUrl: "", shadowUrl: "" });
  }, []);

  // The same map element grows/shrinks in place — tell Leaflet to re-measure
  // its container and re-center once the size change has painted.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    if (expanded) map.scrollWheelZoom.enable();
    else map.scrollWheelZoom.disable();
    const t = setTimeout(() => {
      map.invalidateSize();
      map.setView([LAT, LON]);
    }, 210);
    return () => clearTimeout(t);
  }, [expanded]);

  // Lock body scroll and wire up Escape while expanded.
  useEffect(() => {
    if (!expanded) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [expanded]);

  const toggle = useCallback(() => setExpanded((v) => !v), []);

  return (
    <>
      {/* Backdrop shown only while expanded, so the page (and small map slot) is hidden */}
      {expanded && (
        <div
          className="fixed inset-0 z-1900 bg-navy/70 supports-backdrop-filter:backdrop-blur-sm"
          onClick={toggle}
        />
      )}

      <div
        className={
          expanded
            ? "fixed inset-3 z-2000 overflow-hidden rounded-[6px] border border-line shadow-2xl sm:inset-6 md:inset-10"
            : "relative isolate h-full w-full"
        }
      >
        <MapContainer
          ref={mapRef}
          center={[LAT, LON]}
          zoom={11}
          scrollWheelZoom={expanded}
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

        <button
          type="button"
          onClick={toggle}
          aria-label={expanded ? "Shrink map" : "Enlarge map"}
          className="absolute bottom-3 right-3 z-1000 flex items-center gap-1.5 rounded-[3px] border border-line bg-white/95 px-2.5 py-1.5 text-xs font-semibold text-navy shadow-sm backdrop-blur transition-colors hover:bg-white hover:text-carolina"
        >
          {expanded ? (
            <>
              <X className="size-3.5" />
              Close
            </>
          ) : (
            <>
              <Maximize2 className="size-3.5" />
              Enlarge
            </>
          )}
        </button>
      </div>
    </>
  );
}
