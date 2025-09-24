import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  size?: string;
  color?: string;
  addedAt: number; // timestamp when item was added
}

interface WishlistContextType {
  items: WishlistItem[];
  addToWishlist: (item: Omit<WishlistItem, "addedAt">) => void;
  removeFromWishlist: (id: string, size?: string, color?: string) => void;
  isInWishlist: (id: string, size?: string, color?: string) => boolean;
  clearWishlist: () => void;
  getTotalItems: () => number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const WISHLIST_STORAGE_KEY = "kanchan-fashion-wishlist";

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<WishlistItem[]>([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (savedWishlist) {
        setItems(JSON.parse(savedWishlist));
      }
    } catch (error) {
      console.error("Failed to load wishlist from localStorage:", error);
    }
  }, []);

  // Save wishlist to localStorage whenever items change
  useEffect(() => {
    try {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.error("Failed to save wishlist to localStorage:", error);
    }
  }, [items]);

  const addToWishlist = (item: Omit<WishlistItem, "addedAt">) => {
    // Validate required fields
    if (!item.id || !item.name || !item.price || !item.image) {
      console.error("Invalid wishlist item data:", item);
      return;
    }

    // Check if item already exists
    const existing = items.find(p => 
      p.id === item.id && 
      p.size === item.size && 
      p.color === item.color
    );

    if (existing) {
      console.log("Item already in wishlist:", item.name);
      return;
    }

    const newItem = {
      ...item,
      addedAt: Date.now()
    };

    setItems(prev => [...prev, newItem]);
    console.log("Added to wishlist:", newItem);
  };

  const removeFromWishlist = (id: string, size?: string, color?: string) => {
    setItems(prev => prev.filter(item => 
      !(item.id === id && item.size === size && item.color === color)
    ));
    console.log("Removed from wishlist:", id);
  };

  const isInWishlist = (id: string, size?: string, color?: string) => {
    return items.some(item => 
      item.id === id && 
      item.size === size && 
      item.color === color
    );
  };

  const clearWishlist = () => {
    setItems([]);
    console.log("Wishlist cleared");
  };

  const getTotalItems = () => {
    return items.length;
  };

  const value = {
    items,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
    getTotalItems
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
