/**
 * Product Data Schema & Store
 * This file contains the primary product data, category definitions, 
 * and subcategory mappings for the application.
 */

// Master list of top-level categories
export const categories = [
  { categoryId: "electronics", value: "Electronics" },
  { categoryId: "fashion", value: "Fashion" },
  { categoryId: "home", value: "Home & Living" },
  { categoryId: "books", value: "Books" },
  { categoryId: "fitness", value: "Fitness" }
];

// Subcategories mapped to their parent categoryId
export const subcategories = [
  // Electronics
  { subcategoryId: "audio", value: "Audio", categoryId: "electronics" },
  { subcategoryId: "computing", value: "Computing", categoryId: "electronics" },

  // Fashion
  { subcategoryId: "menswear", value: "Men's Wear", categoryId: "fashion" },
  { subcategoryId: "womenswear", value: "Women's Wear", categoryId: "fashion" },

  // Home
  { subcategoryId: "furniture", value: "Furniture", categoryId: "home" },
  { subcategoryId: "decor", value: "Home Decor", categoryId: "home" },

  // Books
  { subcategoryId: "selfhelp", value: "Self Help", categoryId: "books" },
  { subcategoryId: "business", value: "Business", categoryId: "books" },

  // Fitness
  { subcategoryId: "gym", value: "Gym Equipment", categoryId: "fitness" },
  { subcategoryId: "yoga", value: "Yoga & Wellness", categoryId: "fitness" }
];


export const products = [
  // ================= ELECTRONICS =================
  // Audio (5)
  {
    id: 1,
    name: "Wireless Headphones Pro",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    rating: 4.8,
    badge: "Popular",
    bgColor: "bg-blue-200",
    categoryId: "electronics",
    subcategoryId: "audio"
  },
  {
    id: 2,
    name: "Bluetooth Speaker Max",
    image: "https://images.unsplash.com/photo-1585386959984-a41552231693?w=400&h=300&fit=crop",
    rating: 4.7,
    badge: null,
    bgColor: "bg-indigo-200",
    categoryId: "electronics",
    subcategoryId: "audio"
  },
  {
    id: 3,
    name: "Noise Cancelling Earbuds",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop",
    rating: 4.8,
    badge: "New",
    bgColor: "bg-green-200",
    categoryId: "electronics",
    subcategoryId: "audio"
  },
  {
    id: 4,
    name: "Soundbar 5.1",
    image: "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: null,
    bgColor: "bg-gray-200",
    categoryId: "electronics",
    subcategoryId: "audio"
  },
  {
    id: 5,
    name: "Studio Monitor Speakers",
    image: "https://images.unsplash.com/photo-1518443895471-9e3d8a1e5d0d?w=400&h=300&fit=crop",
    rating: 4.7,
    badge: null,
    bgColor: "bg-purple-200",
    categoryId: "electronics",
    subcategoryId: "audio"
  },

  // Computing (5)
  {
    id: 6,
    name: "Laptop Pro 15”",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    rating: 4.9,
    badge: "Popular",
    bgColor: "bg-yellow-200",
    categoryId: "electronics",
    subcategoryId: "computing"
  },
  {
    id: 7,
    name: "Mechanical Keyboard",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=300&fit=crop",
    rating: 4.8,
    badge: null,
    bgColor: "bg-purple-200",
    categoryId: "electronics",
    subcategoryId: "computing"
  },
  {
    id: 8,
    name: "Wireless Mouse Pro",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: null,
    bgColor: "bg-gray-200",
    categoryId: "electronics",
    subcategoryId: "computing"
  },
  {
    id: 9,
    name: "4K Monitor",
    image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=400&h=300&fit=crop",
    rating: 4.7,
    badge: null,
    bgColor: "bg-blue-100",
    categoryId: "electronics",
    subcategoryId: "computing"
  },
  {
    id: 10,
    name: "USB-C Docking Station",
    image: "https://images.unsplash.com/photo-1616469832301-ffaeadc68cf3?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: null,
    bgColor: "bg-gray-300",
    categoryId: "electronics",
    subcategoryId: "computing"
  },

  // ================= FASHION =================
  // Menswear (5)
  {
    id: 11,
    name: "Men’s Denim Jacket",
    image: "https://images.unsplash.com/photo-1520975922284-9d8f7e1c2f8b?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: "Trending",
    bgColor: "bg-indigo-200",
    categoryId: "fashion",
    subcategoryId: "menswear"
  },
  {
    id: 12,
    name: "Formal Shirt",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=300&fit=crop",
    rating: 4.7,
    badge: null,
    bgColor: "bg-blue-100",
    categoryId: "fashion",
    subcategoryId: "menswear"
  },
  {
    id: 13,
    name: "Casual T-Shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    rating: 4.5,
    badge: null,
    bgColor: "bg-gray-200",
    categoryId: "fashion",
    subcategoryId: "menswear"
  },
  {
    id: 14,
    name: "Slim Fit Jeans",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: null,
    bgColor: "bg-indigo-100",
    categoryId: "fashion",
    subcategoryId: "menswear"
  },
  {
    id: 15,
    name: "Running Sneakers",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    rating: 4.7,
    badge: "New",
    bgColor: "bg-gray-300",
    categoryId: "fashion",
    subcategoryId: "menswear"
  },

  // Womenswear (5)
  {
    id: 16,
    name: "Summer Dress",
    image: "https://images.unsplash.com/photo-1520974735194-6cfa2c9d5a94?w=400&h=300&fit=crop",
    rating: 4.8,
    badge: "Popular",
    bgColor: "bg-pink-200",
    categoryId: "fashion",
    subcategoryId: "womenswear"
  },
  {
    id: 17,
    name: "Leather Handbag",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop",
    rating: 4.9,
    badge: null,
    bgColor: "bg-yellow-100",
    categoryId: "fashion",
    subcategoryId: "womenswear"
  },
  {
    id: 18,
    name: "Floral Top",
    image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: null,
    bgColor: "bg-purple-100",
    categoryId: "fashion",
    subcategoryId: "womenswear"
  },
  {
    id: 19,
    name: "High-Waist Jeans",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=300&fit=crop",
    rating: 4.7,
    badge: null,
    bgColor: "bg-blue-200",
    categoryId: "fashion",
    subcategoryId: "womenswear"
  },
  {
    id: 20,
    name: "Heeled Sandals",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: null,
    bgColor: "bg-orange-100",
    categoryId: "fashion",
    subcategoryId: "womenswear"
  },

  // ================= HOME, BOOKS, FITNESS =================
  // (Pattern is consistent — you can safely scale this)
  // ================= HOME & LIVING =================
  // Furniture (5)
  {
    id: 21,
    name: "Modern Sofa",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    rating: 4.7,
    badge: "Popular",
    bgColor: "bg-gray-200",
    categoryId: "home",
    subcategoryId: "furniture"
  },
  {
    id: 22,
    name: "Dining Table Set",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
    rating: 4.8,
    badge: null,
    bgColor: "bg-amber-200",
    categoryId: "home",
    subcategoryId: "furniture"
  },
  {
    id: 23,
    name: "Office Chair",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: null,
    bgColor: "bg-gray-300",
    categoryId: "home",
    subcategoryId: "furniture"
  },
  {
    id: 24,
    name: "Queen Size Bed",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400&h=300&fit=crop",
    rating: 4.7,
    badge: null,
    bgColor: "bg-indigo-100",
    categoryId: "home",
    subcategoryId: "furniture"
  },
  {
    id: 25,
    name: "Wooden Coffee Table",
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: null,
    bgColor: "bg-yellow-200",
    categoryId: "home",
    subcategoryId: "furniture"
  },

  // Decor (5)
  {
    id: 26,
    name: "Wall Art Frame Set",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop",
    rating: 4.8,
    badge: "Popular",
    bgColor: "bg-blue-100",
    categoryId: "home",
    subcategoryId: "decor"
  },
  {
    id: 27,
    name: "Decorative Table Lamp",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop",
    rating: 4.5,
    badge: "New",
    bgColor: "bg-orange-200",
    categoryId: "home",
    subcategoryId: "decor"
  },
  {
    id: 28,
    name: "Indoor Plants Set",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&h=300&fit=crop",
    rating: 4.7,
    badge: null,
    bgColor: "bg-green-200",
    categoryId: "home",
    subcategoryId: "decor"
  },
  {
    id: 29,
    name: "Floor Rug",
    image: "https://images.unsplash.com/photo-1600585154207-1b1b8f1d3c07?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: null,
    bgColor: "bg-purple-100",
    categoryId: "home",
    subcategoryId: "decor"
  },
  {
    id: 30,
    name: "Wall Clock",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&h=300&fit=crop",
    rating: 4.5,
    badge: null,
    bgColor: "bg-gray-100",
    categoryId: "home",
    subcategoryId: "decor"
  },

  // ================= BOOKS =================
  // Self Help (5)
  {
    id: 31,
    name: "Atomic Habits",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
    rating: 4.9,
    badge: "Bestseller",
    bgColor: "bg-green-200",
    categoryId: "books",
    subcategoryId: "selfhelp"
  },
  {
    id: 32,
    name: "Deep Work",
    image: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400&h=300&fit=crop",
    rating: 4.7,
    badge: null,
    bgColor: "bg-gray-200",
    categoryId: "books",
    subcategoryId: "selfhelp"
  },
  {
    id: 33,
    name: "The Power of Now",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: null,
    bgColor: "bg-blue-100",
    categoryId: "books",
    subcategoryId: "selfhelp"
  },
  {
    id: 34,
    name: "Think Like a Monk",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: null,
    bgColor: "bg-purple-100",
    categoryId: "books",
    subcategoryId: "selfhelp"
  },
  {
    id: 35,
    name: "Mindset",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=300&fit=crop",
    rating: 4.7,
    badge: null,
    bgColor: "bg-yellow-100",
    categoryId: "books",
    subcategoryId: "selfhelp"
  },

  // Business (5)
  {
    id: 36,
    name: "Rich Dad Poor Dad",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: "Popular",
    bgColor: "bg-yellow-200",
    categoryId: "books",
    subcategoryId: "business"
  },
  {
    id: 37,
    name: "Zero to One",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=300&fit=crop",
    rating: 4.7,
    badge: null,
    bgColor: "bg-gray-200",
    categoryId: "books",
    subcategoryId: "business"
  },
  {
    id: 38,
    name: "The Lean Startup",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: null,
    bgColor: "bg-green-100",
    categoryId: "books",
    subcategoryId: "business"
  },
  {
    id: 39,
    name: "Start With Why",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop",
    rating: 4.7,
    badge: null,
    bgColor: "bg-blue-100",
    categoryId: "books",
    subcategoryId: "business"
  },
  {
    id: 40,
    name: "Good to Great",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop",
    rating: 4.8,
    badge: null,
    bgColor: "bg-indigo-100",
    categoryId: "books",
    subcategoryId: "business"
  },

  // ================= FITNESS =================
  // Gym (5)
  {
    id: 41,
    name: "Adjustable Dumbbells",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07d?w=400&h=300&fit=crop",
    rating: 4.8,
    badge: "Popular",
    bgColor: "bg-gray-300",
    categoryId: "fitness",
    subcategoryId: "gym"
  },
  {
    id: 42,
    name: "Bench Press Set",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop",
    rating: 4.7,
    badge: null,
    bgColor: "bg-gray-200",
    categoryId: "fitness",
    subcategoryId: "gym"
  },
  {
    id: 43,
    name: "Kettlebell Set",
    image: "https://images.unsplash.com/photo-1599058918144-1ffabb6ab9a0?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: null,
    bgColor: "bg-green-200",
    categoryId: "fitness",
    subcategoryId: "gym"
  },
  {
    id: 44,
    name: "Pull-Up Bar",
    image: "https://images.unsplash.com/photo-1599058917767-d8f8d3c0b1d1?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: null,
    bgColor: "bg-blue-200",
    categoryId: "fitness",
    subcategoryId: "gym"
  },
  {
    id: 45,
    name: "Resistance Bands",
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: null,
    bgColor: "bg-green-200",
    categoryId: "fitness",
    subcategoryId: "gym"
  },

  // Yoga & Wellness (5)
  {
    id: 46,
    name: "Yoga Mat",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=300&fit=crop",
    rating: 4.7,
    badge: "New",
    bgColor: "bg-purple-200",
    categoryId: "fitness",
    subcategoryId: "yoga"
  },
  {
    id: 47,
    name: "Meditation Cushion",
    image: "https://images.unsplash.com/photo-1611088489935-0cb964de46c5?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: null,
    bgColor: "bg-orange-200",
    categoryId: "fitness",
    subcategoryId: "yoga"
  },
  {
    id: 48,
    name: "Foam Roller",
    image: "https://images.unsplash.com/photo-1605296867310-9a7d6c3f1b15?w=400&h=300&fit=crop",
    rating: 4.6,
    badge: null,
    bgColor: "bg-blue-100",
    categoryId: "fitness",
    subcategoryId: "yoga"
  },
  {
    id: 49,
    name: "Stretching Strap",
    image: "https://images.unsplash.com/photo-1605296867365-3b66c6c4c2c2?w=400&h=300&fit=crop",
    rating: 4.5,
    badge: null,
    bgColor: "bg-gray-200",
    categoryId: "fitness",
    subcategoryId: "yoga"
  },
  {
    id: 50,
    name: "Aromatherapy Candle",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop",
    rating: 4.7,
    badge: null,
    bgColor: "bg-pink-200",
    categoryId: "fitness",
    subcategoryId: "yoga"
  }


];
