import React, { useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import Button from "./Button";
import api from "../api/api";

export default function RideRequestModal({ show, onClose }) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    try {
      await api.post("/rides/request", {
        origin: { address: origin },
        destination: { address: destination },
      });
      setSuccess("Ride requested successfully!");
      setOrigin("");
      setDestination("");
    } catch (err) {
      setSuccess("Ride request failed!");
    } finally {
      setLoading(false);
      setTimeout(() => {
        setSuccess("");
        onClose();
      }, 1500);
    }
  };

  return (
    <Modal open={show} title="Request a Ride" onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-2">
        <Input
          placeholder="Origin address"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          required
        />
        <Input
          placeholder="Destination address"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={loading || !origin || !destination}
        >
          {loading ? "Requesting..." : "Request Ride"}
        </Button>
      </form>
      {success && <div className="mt-2 text-green-600">{success}</div>}
    </Modal>
  );
}