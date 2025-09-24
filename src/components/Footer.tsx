import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <img src="/logo.png" alt="Aarvi Fashion" className="w-25 h-14" />
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Premium Indian ethnic wear for the modern woman. Authentic designs, 
              quality fabrics, and timeless elegance.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</Link></li>
              <li><Link to="/size-guide" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Size Guide</Link></li>
              <li><Link to="/affiliate-program" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Affiliate Program</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold mb-4">Policies</h4>
            <ul className="space-y-2">
              <li><Link to="/shipping-info" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/80">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-primary-foreground/80">info@kanchanfashion.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-primary-foreground/80">Mumbai, Maharashtra, India</span>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">Newsletter</h5>
              <div className="flex">
                <Input 
                  placeholder="Your email" 
                  className="rounded-r-none bg-primary-foreground/10 border-primary-foreground/20"
                />
                <Button variant="secondary" className="rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © 2024 Aarvi Fashion. All rights reserved. | Designed with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;