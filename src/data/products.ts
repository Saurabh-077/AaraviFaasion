// Import product images
import maroonSaree from "@/assets/products/maroon-silk-saree.jpg";
import emeraldLehenga from "@/assets/products/emerald-lehenga.jpg";
import creamSuit from "@/assets/products/cream-palazzo-suit.jpg";
import goldKurti from "@/assets/products/gold-embroidered-kurti.jpg";
import pinkAnarkali from "@/assets/products/pink-anarkali.jpg";
import navyLehenga from "@/assets/products/navy-lehenga.jpg";
import sareesCollection from "@/assets/sarees-collection.jpg";
import lehengaCategory from "@/assets/lehenga-category.jpg";
import suitsCategory from "@/assets/suits-category.jpg";
import kurtisCategory from "@/assets/kurtis-category.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  fabric: string;
  care: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
  featured: boolean;
  trending: boolean;
  isNew: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Royal Maroon Silk Saree",
    category: "sarees",
    price: 4999,
    originalPrice: 7999,
    images: [maroonSaree],
    description: "Exquisite maroon silk saree with intricate gold embroidery. Perfect for weddings and special occasions.",
    fabric: "Pure Silk",
    care: "Dry clean only",
    sizes: ["Free Size"],
    colors: ["Maroon", "Deep Red"],
    inStock: true,
    featured: true,
    trending: true,
    isNew: false,
    rating: 4.8,
    reviews: 156
  },
  {
    id: "2", 
    name: "Emerald Green Lehenga",
    category: "lehengas",
    price: 12999,
    originalPrice: 18999,
    images: [emeraldLehenga],
    description: "Stunning emerald green lehenga with gold thread work and sequin details.",
    fabric: "Net with Silk Lining",
    care: "Dry clean only",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Emerald Green", "Forest Green"],
    inStock: true,
    featured: true,
    trending: false,
    isNew: true,
    rating: 4.9,
    reviews: 89
  },
  {
    id: "3",
    name: "Cream Palazzo Suit Set",
    category: "suits", 
    price: 3499,
    originalPrice: 4999,
    images: [creamSuit],
    description: "Elegant cream palazzo suit with delicate embroidery and comfortable fit.",
    fabric: "Cotton Silk",
    care: "Machine wash cold",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Cream", "Off White", "Light Pink"],
    inStock: true,
    featured: false,
    trending: true,
    isNew: false,
    rating: 4.6,
    reviews: 203
  },
  {
    id: "4",
    name: "Gold Embroidered Kurti",
    category: "kurtis",
    price: 1999,
    originalPrice: 2999,
    images: [goldKurti],
    description: "Beautiful kurti with gold embroidery work, perfect for casual and festive wear.",
    fabric: "Cotton",
    care: "Machine wash cold",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Maroon", "Navy Blue", "Mustard"],
    inStock: true,
    featured: false,
    trending: false,
    isNew: true,
    rating: 4.4,
    reviews: 112
  },
  {
    id: "5",
    name: "Pink Anarkali Dress",
    category: "anarkalis", 
    price: 5999,
    originalPrice: 8999,
    images: [pinkAnarkali],
    description: "Graceful pink anarkali with intricate mirror work and flowing silhouette.",
    fabric: "Georgette",
    care: "Dry clean preferred",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pink", "Peach", "Coral"],
    inStock: true,
    featured: true,
    trending: false,
    isNew: false,
    rating: 4.7,
    reviews: 178
  },
  {
    id: "6",
    name: "Navy Blue Semi-Stitched Lehenga",
    category: "semi-stitched",
    price: 8999,
    originalPrice: 12999,
    images: [navyLehenga],
    description: "Semi-stitched navy blue lehenga with silver thread work, customizable fit.",
    fabric: "Silk with Net Dupatta",
    care: "Dry clean only",
    sizes: ["Free Size"],
    colors: ["Navy Blue", "Royal Blue"],
    inStock: true,
    featured: false,
    trending: true,
    isNew: true,
    rating: 4.5,
    reviews: 67
  }
];

export const categories = [
  { name: "Sarees", slug: "sarees", image: sareesCollection },
  { name: "Lehengas", slug: "lehengas", image: lehengaCategory },
  { name: "Suits", slug: "suits", image: suitsCategory },
  { name: "Kurtis", slug: "kurtis", image: kurtisCategory },
  { name: "Anarkalis", slug: "anarkalis", image: sareesCollection },
  { name: "Semi-stitched", slug: "semi-stitched", image: lehengaCategory },
  { name: "Unstitched", slug: "unstitched", image: suitsCategory },
  { name: "Indo-Western", slug: "indo-western", image: kurtisCategory }
];