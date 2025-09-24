import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, Heart, Menu, X, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { items } = useCart();
  const { getTotalItems } = useWishlist();

  const categories = [
    "Sarees",
    "Lehengas", 
    "Suits",
    "Kurtis",
    "Anarkalis",
    "Semi-stitched"
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-maroon to-emerald text-primary-foreground py-2 px-4 text-center text-sm">
        Free Shipping on Orders Above ₹999 | International Delivery Available
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary flex items-center">
            <img src="/logo.png" alt="Aarvi Fashion" className="w-25 h-14" />
          </Link> 

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase()}`}
                className="text-foreground hover:text-primary transition-colors"
              >
                {category}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search for sarees, lehengas..."
                className="pl-10"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative" asChild>
              <Link to="/wishlist">
                <Heart className="w-5 h-5" />
                <span className="hidden sm:inline ml-2">Wishlist</span>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </Button>
            
            <Button variant="ghost" size="sm" className="relative" asChild>
              <Link to="/cart">
                <ShoppingBag className="w-5 h-5" />
                <span className="hidden sm:inline ml-2">Cart</span>
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </Link>
            </Button>

            <Button variant="ghost" size="sm" asChild>
              <Link to="/login" className="flex items-center">
                <User className="w-5 h-5" />
                <span className="hidden sm:inline ml-2">Account</span>
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search for sarees, lehengas..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 py-4 border-t">
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/category/${category.toLowerCase()}`}
                  className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-secondary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-2 border-t pt-4 mt-4">
              <Link
                to="/login"
                className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Account / Login
              </Link>
              <Link
                to="/signup"
                className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Create Account
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;