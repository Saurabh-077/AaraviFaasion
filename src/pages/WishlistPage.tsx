import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const WishlistPage = () => {
  const { items, removeFromWishlist, clearWishlist, getTotalItems } = useWishlist();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      originalPrice: item.originalPrice,
      image: item.image,
      size: item.size,
      color: item.color
    });

    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`
    });
  };

  const handleRemoveFromWishlist = (item: any) => {
    removeFromWishlist(item.id, item.size, item.color);
    toast({
      title: "Removed from wishlist",
      description: `${item.name} has been removed from your wishlist.`
    });
  };

  const handleMoveAllToCart = () => {
    items.forEach(item => {
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        originalPrice: item.originalPrice,
        image: item.image,
        size: item.size,
        color: item.color
      });
    });

    toast({
      title: "All items added to cart!",
      description: `${items.length} items have been added to your cart.`
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <Heart className="w-24 h-24 mx-auto text-muted-foreground mb-6" />
            <h1 className="text-3xl font-bold mb-4">Your wishlist is empty</h1>
            <p className="text-muted-foreground mb-8">
              Save items you love to your wishlist and they'll appear here.
            </p>
            <Button asChild>
              <Link to="/">Continue Shopping</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
            <p className="text-muted-foreground">
              {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} saved
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={handleMoveAllToCart}>
              <Plus className="w-4 h-4 mr-2" />
              Add All to Cart
            </Button>
            <Button variant="outline" onClick={clearWishlist}>
              <Trash2 className="w-4 h-4 mr-2" />
              Clear Wishlist
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <Card key={`${item.id}-${item.size}-${item.color}-${index}`} className="group overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                
                {/* Remove from wishlist button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-3 right-3 p-2 bg-background/80 hover:bg-background"
                  onClick={() => handleRemoveFromWishlist(item)}
                >
                  <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                </Button>

                {/* Quick add to cart */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    onClick={() => handleAddToCart(item)}
                    className="w-full bg-background/90 text-foreground hover:bg-background"
                    size="sm"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              <CardContent className="p-4">
                <Link to={`/product/${item.id}`}>
                  <h3 className="font-medium text-foreground mb-2 hover:text-primary transition-colors line-clamp-2">
                    {item.name}
                  </h3>
                </Link>
                
                <div className="text-sm text-muted-foreground mb-2">
                  {item.size && <span>Size: {item.size}</span>}
                  {item.size && item.color && <span> • </span>}
                  {item.color && <span>Color: {item.color}</span>}
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-bold text-lg">
                    ₹{item.price.toLocaleString()}
                  </span>
                  {item.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{item.originalPrice.toLocaleString()}
                    </span>
                  )}
                  {item.originalPrice && (
                    <Badge className="bg-destructive text-destructive-foreground">
                      {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleAddToCart(item)}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleRemoveFromWishlist(item)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {items.length > 0 && (
          <div className="mt-12 text-center">
            <Separator className="mb-8" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/">Continue Shopping</Link>
              </Button>
              <Button variant="outline" onClick={handleMoveAllToCart}>
                <Plus className="w-4 h-4 mr-2" />
                Add All to Cart
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default WishlistPage;
