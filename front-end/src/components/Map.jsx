import React from "react";
import { GoogleMap, Marker, DirectionsRenderer, useJsApiLoader } from "@react-google-maps/api";

// Default map center
const defaultCenter = { lat: 37.7749, lng: -122.4194 }; // San Francisco

const containerStyle = {
  width: "100%",
  height: "300px",
};

export default function Map({ origin, destination }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [directions, setDirections] = React.useState(null);

  React.useEffect(() => {
    if (isLoaded && origin?.lat && destination?.lat) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: { lat: origin.lat, lng: origin.lng },
          destination: { lat: destination.lat, lng: destination.lng },
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirections(result);
          }
        }
      );
    }
  }, [isLoaded, origin, destination]);

  if (!isLoaded) return <div className="bg-blue-100 h-32 flex items-center justify-center rounded">Loading Map...</div>;

  return (
    <div className="mb-4 rounded shadow overflow-hidden">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={origin?.lat ? { lat: origin.lat, lng: origin.lng } : defaultCenter}
        zoom={12}
      >
        {origin?.lat && (
          <Marker position={{ lat: origin.lat, lng: origin.lng }} label="A" />
        )}
        {destination?.lat && (
          <Marker position={{ lat: destination.lat, lng: destination.lng }} label="B" />
        )}
        {directions && (
          <DirectionsRenderer directions={directions} />
        )}
      </GoogleMap>
    </div>
  );
}