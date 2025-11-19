import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function Map({ center = { lat: 0, lng: 0 }, markers = [] }) {
  const ref = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({ apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, version: 'weekly' });
    let map;
    loader.load().then(() => {
      map = new google.maps.Map(ref.current, { center, zoom: 13 });
      mapRef.current = map;
    });
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;
    // clear existing markers
    mapRef.current.markers?.forEach(m => m.setMap(null));
    mapRef.current.markers = [];
    markers.forEach(m => {
      const marker = new google.maps.Marker({ position: m.position, map: mapRef.current, title: m.title });
      mapRef.current.markers.push(marker);
    });
    if (markers.length > 0) {
      const bounds = new google.maps.LatLngBounds();
      markers.forEach(m => bounds.extend(m.position));
      mapRef.current.fitBounds(bounds);
    }
  }, [markers]);

  return <div ref={ref} style={{ width: '100%', height: '480px', borderRadius: 8 }} />;
}
