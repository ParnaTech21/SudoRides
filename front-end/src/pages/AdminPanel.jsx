import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Car, Package, DollarSign, TrendingUp, AlertCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/">
            <img src={logo} alt="SudoRides" className="h-12" />
          </Link>
          <h1 className="text-xl font-bold">Admin Panel</h1>
          <Link to="/">
            <Button variant="ghost">Logout</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <Badge variant="secondary">+12%</Badge>
            </div>
            <div className="text-2xl font-bold mb-1">2,847</div>
            <div className="text-sm text-muted-foreground">Active Riders</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                <Car className="w-6 h-6 text-accent" />
              </div>
              <Badge variant="secondary">+8%</Badge>
            </div>
            <div className="text-2xl font-bold mb-1">432</div>
            <div className="text-sm text-muted-foreground">Active Drivers</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <Badge variant="secondary">+24%</Badge>
            </div>
            <div className="text-2xl font-bold mb-1">1,234</div>
            <div className="text-sm text-muted-foreground">Trips Today</div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <Badge variant="secondary">+18%</Badge>
            </div>
            <div className="text-2xl font-bold mb-1">₦842K</div>
            <div className="text-sm text-muted-foreground">Revenue Today</div>
          </Card>
        </div>

        <Tabs defaultValue="rides" className="space-y-6">
          <TabsList>
            <TabsTrigger value="rides">Recent Rides</TabsTrigger>
            <TabsTrigger value="drivers">Drivers</TabsTrigger>
            <TabsTrigger value="riders">Riders</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="rides">
            <Card className="p-6">
              <h3 className="font-bold mb-4">Recent Ride Activity</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-border last:border-0">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Car className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Ride #{1000 + i}</div>
                        <div className="text-sm text-muted-foreground">Ikeja → Victoria Island</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={i % 3 === 0 ? "secondary" : "default"}>
                        {i % 3 === 0 ? "Completed" : "In Progress"}
                      </Badge>
                      <div className="text-sm text-muted-foreground mt-1">₦{800 + i * 100}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="drivers">
            <Card className="p-6">
              <h3 className="font-bold mb-4">Driver Management</h3>
              <div className="space-y-4">
                {["John Doe", "Sarah Smith", "Mike Johnson", "Emily Brown"].map((name, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-border last:border-0">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center font-bold">
                        {name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <div className="font-medium">{name}</div>
                        <div className="text-sm text-muted-foreground">
                          Rating: {(4.5 + Math.random() * 0.5).toFixed(1)} ⭐
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={i % 2 === 0 ? "default" : "secondary"}>
                        {i % 2 === 0 ? "Online" : "Offline"}
                      </Badge>
                      <div className="text-sm text-muted-foreground mt-1">{20 + i * 5} trips today</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="riders">
            <Card className="p-6">
              <h3 className="font-bold mb-4">Rider Management</h3>
              <div className="space-y-4">
                {["Alice Cooper", "Bob Wilson", "Carol Davis", "David Lee"].map((name, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-border last:border-0">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center font-bold">
                        {name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <div className="font-medium">{name}</div>
                        <div className="text-sm text-muted-foreground">
                          Member since {2020 + i}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">₦{(5 + i) * 1000}</div>
                      <div className="text-sm text-muted-foreground">{50 + i * 10} total trips</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  <h3 className="font-bold">Revenue Analytics</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Today</span>
                    <span className="font-bold">₦842,340</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">This Week</span>
                    <span className="font-bold">₦4.2M</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">This Month</span>
                    <span className="font-bold">₦18.5M</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                  <h3 className="font-bold">Active Issues</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-destructive/10 rounded-lg">
                    <div className="font-medium">3 Payment Disputes</div>
                    <div className="text-sm text-muted-foreground">Requires attention</div>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <div className="font-medium">5 Driver Verifications</div>
                    <div className="text-sm text-muted-foreground">Pending review</div>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;