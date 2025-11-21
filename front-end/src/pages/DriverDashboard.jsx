import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Navigation, Clock, Star, TrendingUp, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const DriverDashboard = () => {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="SudoRides" className="h-12" />
          </Link>
          <h1 className="text-xl font-bold">Driver Dashboard</h1>
          <Link to="/">
            <Button variant="ghost">Home</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Online Status */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                {isOnline ? "You're Online" : "You're Offline"}
              </h2>
              <p className="text-muted-foreground">
                {isOnline ? "Ready to accept ride requests" : "Go online to start earning"}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">{isOnline ? "Online" : "Offline"}</span>
              <Switch checked={isOnline} onCheckedChange={setIsOnline} />
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Earnings Card */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Today's Earnings</div>
                <div className="text-2xl font-bold">₦12,450</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-600">
              <TrendingUp className="w-4 h-4" />
              <span>+18% from yesterday</span>
            </div>
          </Card>

          {/* Trips Card */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Navigation className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Trips Completed</div>
                <div className="text-2xl font-bold">18</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">Total: 342 trips</div>
          </Card>

          {/* Rating Card */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-primary fill-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Your Rating</div>
                <div className="text-2xl font-bold">4.8</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">Based on 284 reviews</div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Active/Pending Requests */}
          <Card className="p-6">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              {isOnline ? "Ride Requests" : "Recent Trips"}
            </h3>
            
            {isOnline ? (
              <div className="text-center py-12">
                <Navigation className="w-16 h-16 text-muted-foreground opacity-50 mx-auto mb-4" />
                <p className="text-muted-foreground">Waiting for ride requests...</p>
                <p className="text-sm text-muted-foreground mt-2">You'll be notified when riders need you</p>
              </div>
            ) : (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-start gap-3 pb-4 border-b border-border last:border-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Ikeja to VI</div>
                      <div className="text-sm text-muted-foreground">Yesterday, 3:45 PM</div>
                      <Badge variant="secondary" className="mt-2">Completed</Badge>
                    </div>
                    <div className="font-bold text-primary">₦1,200</div>
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* Weekly Summary */}
          <Card className="p-6">
            <h3 className="font-bold mb-4">Weekly Summary</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Total Trips</span>
                <span className="font-bold">89</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Total Earnings</span>
                <span className="font-bold text-primary">₦54,320</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Online Hours</span>
                <span className="font-bold">42.5 hrs</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-muted-foreground">Avg. Rating</span>
                <span className="font-bold flex items-center gap-1">
                  4.8 <Star className="w-4 h-4 text-primary fill-primary" />
                </span>
              </div>
            </div>
            
            <Button className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
              View Detailed Report
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;