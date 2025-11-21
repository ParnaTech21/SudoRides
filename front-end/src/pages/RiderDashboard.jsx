import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Navigation, Package, Car, Bike, Clock } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const RiderDashboard = () => {
  const [serviceType, setServiceType] = useState("ride");
  const [vehicleType, setVehicleType] = useState("car");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");

  const handleBooking = () => {
    console.log("Booking:", { serviceType, vehicleType, pickup, dropoff });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="SudoRides" className="h-12" />
          </Link>
          <h1 className="text-xl font-bold">Book Your Ride</h1>
          <Link to="/">
            <Button variant="ghost">Home</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <div>
            <Card className="p-6">
              <Tabs value={serviceType} onValueChange={setServiceType} className="mb-6">
                <TabsList className="grid grid-cols-2 w-full">
                  <TabsTrigger value="ride" className="flex items-center gap-2">
                    <Car className="w-4 h-4" />
                    Book Ride
                  </TabsTrigger>
                  <TabsTrigger value="delivery" className="flex items-center gap-2">
                    <Package className="w-4 h-4" />
                    Send Package
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="pickup">Pickup Location</Label>
                  <div className="relative mt-2">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="pickup"
                      placeholder="Enter pickup address"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="dropoff">Drop-off Location</Label>
                  <div className="relative mt-2">
                    <Navigation className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="dropoff"
                      placeholder="Enter destination"
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {serviceType === "ride" && (
                  <>
                    <div>
                      <Label className="mb-3 block">Select Vehicle Type</Label>
                      <div className="grid grid-cols-3 gap-3">
                        <Card
                          className={`p-4 cursor-pointer transition-all ${
                            vehicleType === "bike"
                              ? "border-primary border-2 bg-primary/5"
                              : "hover:border-primary/50"
                          }`}
                          onClick={() => setVehicleType("bike")}
                        >
                          <Bike className="w-8 h-8 text-primary mx-auto mb-2" />
                          <div className="text-center text-sm font-medium">Bike</div>
                          <div className="text-center text-xs text-muted-foreground">₦50/km</div>
                        </Card>

                        <Card
                          className={`p-4 cursor-pointer transition-all ${
                            vehicleType === "car"
                              ? "border-primary border-2 bg-primary/5"
                              : "hover:border-primary/50"
                          }`}
                          onClick={() => setVehicleType("car")}
                        >
                          <Car className="w-8 h-8 text-primary mx-auto mb-2" />
                          <div className="text-center text-sm font-medium">Car</div>
                          <div className="text-center text-xs text-muted-foreground">₦120/km</div>
                        </Card>

                        <Card
                          className={`p-4 cursor-pointer transition-all ${
                            vehicleType === "luxury"
                              ? "border-accent border-2 bg-accent/5"
                              : "hover:border-accent/50"
                          }`}
                          onClick={() => setVehicleType("luxury")}
                        >
                          <Car className="w-8 h-8 text-accent mx-auto mb-2" />
                          <div className="text-center text-sm font-medium">Luxury</div>
                          <div className="text-center text-xs text-muted-foreground">₦300/km</div>
                        </Card>
                      </div>
                    </div>
                  </>
                )}

                <Button
                  onClick={handleBooking}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary"
                  size="lg"
                  disabled={!pickup || !dropoff}
                >
                  {serviceType === "ride" ? "Request Ride" : "Book Delivery"}
                </Button>
              </div>
            </Card>

            {/* Price Estimate */}
            {pickup && dropoff && (
              <Card className="p-6 mt-6 bg-gradient-to-br from-primary/10 to-accent/5">
                <h3 className="font-bold mb-4">Estimated Fare</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Distance</span>
                  <span className="font-medium">~5.2 km</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-muted-foreground">Duration</span>
                  <span className="font-medium">~12 mins</span>
                </div>
                <div className="border-t border-border pt-3 mt-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-2xl text-primary">
                      ₦{vehicleType === "bike" ? "260" : vehicleType === "car" ? "624" : "1560"}
                    </span>
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Map Placeholder / Recent Rides */}
          <div className="space-y-6">
            <Card className="p-6 h-80 bg-muted flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Map view will appear here</p>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Recent Trips
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-3 pb-4 border-b border-border last:border-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Car className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Victoria Island to Lekki</div>
                      <div className="text-sm text-muted-foreground">2 days ago</div>
                    </div>
                    <div className="font-bold text-primary">₦850</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderDashboard;