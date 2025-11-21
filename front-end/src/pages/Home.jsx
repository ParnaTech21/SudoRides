import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Car, Package, Bike, Shield, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img src={logo} alt="SudoRides" className="h-12" />
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">Home</Link>
            <Link to="/rider" className="text-foreground hover:text-primary transition-colors font-medium">Book Ride</Link>
            <Link to="/driver" className="text-foreground hover:text-primary transition-colors font-medium">Drive</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Ride Fast. Ride Smart.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Urban mobility redefined. Book bikes, cars, or luxury rides in seconds. Deliver packages anywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/rider">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary text-lg px-8">
                  Book a Ride
                </Button>
              </Link>
              <Link to="/driver">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Become a Driver
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Choose Your Ride</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 hover:shadow-primary transition-all duration-300 border-2 hover:border-primary cursor-pointer group">
              <Bike className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Bike</h3>
              <p className="text-muted-foreground mb-4">Fast & affordable for short trips</p>
              <div className="text-2xl font-bold text-primary">₦50<span className="text-sm text-muted-foreground">/km</span></div>
            </Card>
            
            <Card className="p-6 hover:shadow-primary transition-all duration-300 border-2 hover:border-primary cursor-pointer group">
              <Car className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Standard Car</h3>
              <p className="text-muted-foreground mb-4">Comfortable rides for everyone</p>
              <div className="text-2xl font-bold text-primary">₦120<span className="text-sm text-muted-foreground">/km</span></div>
            </Card>
            
            <Card className="p-6 hover:shadow-glow transition-all duration-300 border-2 hover:border-accent cursor-pointer group bg-gradient-to-br from-card to-accent/5">
              <Car className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Luxury</h3>
              <p className="text-muted-foreground mb-4">Premium experience guaranteed</p>
              <div className="text-2xl font-bold text-accent">₦300<span className="text-sm text-muted-foreground">/km</span></div>
            </Card>
          </div>
        </div>
      </section>

      {/* Package Delivery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-8 md:p-12 text-secondary-foreground">
            <div className="flex items-center gap-4 mb-6">
              <Package className="w-16 h-16 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Package Delivery</h2>
            </div>
            <p className="text-xl mb-6 opacity-90">
              Need to send something across town? Use SudoRides for fast, reliable package delivery with real-time tracking.
            </p>
            <Link to="/rider">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Send a Package
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose SudoRides?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safe & Secure</h3>
              <p className="text-muted-foreground">Verified drivers, insured rides, 24/7 support</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Pickup</h3>
              <p className="text-muted-foreground">Average wait time under 5 minutes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Best Prices</h3>
              <p className="text-muted-foreground">Competitive rates for all budgets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={logo} alt="SudoRides" className="h-10 mb-4" />
              <p className="text-sm opacity-80">Fast, reliable rides and deliveries across the city.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Safety</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            © 2024 SudoRides. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;