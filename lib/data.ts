import { Branch, FAQ, MenuItem, Offer, Testimonial } from "./types";

const img = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=1200&auto=format&fit=crop`;

export const menuItems: MenuItem[] = [
  // ---------------- PIZZA (10) ----------------
  {
    slug: "classic-margherita",
    name: "Classic Margherita",
    description:
      "San Marzano tomato base, fresh mozzarella, basil and a drizzle of olive oil on our signature hand-stretched crust.",
    price: 279,
    category: "Pizza",
    veg: true,
    popular: true,
    image: img("photo-1513104890138-7c749659a591"),
    ingredients: [
      "Tomato base",
      "Fresh mozzarella",
      "Basil",
      "Olive oil",
      "Hand-stretched dough",
    ],
    dietary: ["Vegetarian", "No egg"],
    calories: "720 kcal (medium)",
  },
  {
    slug: "smoked-tandoori-paneer",
    name: "Smoked Tandoori Paneer",
    description:
      "Char-grilled paneer marinated in a smoky tandoori masala, onions, peppers and mint drizzle.",
    price: 329,
    category: "Pizza",
    veg: true,
    popular: true,
    spicy: true,
    image: img("photo-1541745537411-b8046dc6d66c"),
    ingredients: [
      "Tandoori paneer",
      "Bell peppers",
      "Red onion",
      "Mint drizzle",
      "Mozzarella",
    ],
    dietary: ["Vegetarian"],
    calories: "780 kcal (medium)",
  },
  {
    slug: "firecracker-chicken",
    name: "Firecracker Chicken",
    description:
      "Fiery chicken tikka, jalapeños and a three-pepper blend finished with a spicy schezwan drizzle.",
    price: 379,
    category: "Pizza",
    veg: false,
    popular: true,
    spicy: true,
    image: img("photo-1594007654729-407eedc4be65"),
    ingredients: [
      "Chicken tikka",
      "Jalapeños",
      "Schezwan drizzle",
      "Three-pepper blend",
      "Mozzarella",
    ],
    dietary: ["High protein"],
    calories: "840 kcal (medium)",
  },
  {
    slug: "truffle-mushroom-melt",
    name: "Truffle Mushroom Melt",
    description:
      "Wild mushrooms, truffle oil, caramelised onion and a four-cheese blend for a rich, earthy bite.",
    price: 399,
    category: "Pizza",
    veg: true,
    popular: true,
    image: img("photo-1548369937-47519962c11a"),
    ingredients: [
      "Wild mushroom",
      "Truffle oil",
      "Caramelised onion",
      "Four-cheese blend",
    ],
    dietary: ["Vegetarian"],
    calories: "760 kcal (medium)",
  },
  {
    slug: "spicy-peri-peri-paneer",
    name: "Spicy Peri Peri Paneer",
    description:
      "Peri peri marinated paneer, roasted corn and onion with a tangy chilli drizzle.",
    price: 349,
    category: "Pizza",
    veg: true,
    spicy: true,
    image: img("photo-1601924582970-9238bcb495d9"),
    ingredients: ["Peri peri paneer", "Roasted corn", "Onion", "Chilli drizzle"],
    dietary: ["Vegetarian"],
    calories: "790 kcal (medium)",
  },
  {
    slug: "bbq-chicken-supreme",
    name: "BBQ Chicken Supreme",
    description:
      "Smoky BBQ chicken, red onion and mozzarella finished with a house barbecue glaze.",
    price: 389,
    category: "Pizza",
    veg: false,
    image: img("photo-1590947132387-155cc02f3212"),
    ingredients: ["BBQ chicken", "Red onion", "House BBQ glaze", "Mozzarella"],
    dietary: ["High protein"],
    calories: "830 kcal (medium)",
  },
  {
    slug: "four-cheese-riot",
    name: "Four Cheese Riot",
    description:
      "Mozzarella, cheddar, parmesan and gouda layered for the ultimate cheese-lover's pizza.",
    price: 429,
    category: "Pizza",
    veg: true,
    popular: true,
    image: img("photo-1600628421066-f6bda6a7b976"),
    ingredients: ["Mozzarella", "Cheddar", "Parmesan", "Gouda"],
    dietary: ["Vegetarian"],
    calories: "860 kcal (medium)",
  },
  {
    slug: "garden-harvest",
    name: "Garden Harvest",
    description:
      "A vibrant medley of zucchini, bell peppers, olives, mushroom and cherry tomato.",
    price: 319,
    category: "Pizza",
    veg: true,
    image: img("photo-1520201163981-8cc95007dd2a"),
    ingredients: [
      "Zucchini",
      "Bell peppers",
      "Black olives",
      "Mushroom",
      "Cherry tomato",
    ],
    dietary: ["Vegetarian", "Vegan option"],
    calories: "680 kcal (medium)",
  },
  {
    slug: "chilli-garlic-chicken",
    name: "Chilli Garlic Chicken",
    description:
      "Roasted garlic, chilli flakes and juicy chicken chunks over a bold tomato base.",
    price: 379,
    category: "Pizza",
    veg: false,
    spicy: true,
    image: img("photo-1594179047519-f347310d3322"),
    ingredients: [
      "Chicken chunks",
      "Roasted garlic",
      "Chilli flakes",
      "Tomato base",
    ],
    dietary: ["High protein"],
    calories: "810 kcal (medium)",
  },
  {
    slug: "the-crustrush-special",
    name: "The CRUSTRUSH Special",
    description:
      "Our signature loaded pie — pepperoni-style chicken, paneer, peppers, olives and triple cheese.",
    price: 449,
    category: "Pizza",
    veg: false,
    popular: true,
    image: img("photo-1571066811602-716837d681de"),
    ingredients: [
      "Chicken pepperoni-style",
      "Paneer",
      "Peppers",
      "Olives",
      "Triple cheese",
    ],
    dietary: ["Signature", "High protein"],
    calories: "920 kcal (medium)",
  },

  // ---------------- BURGERS (5) ----------------
  {
    slug: "smash-house-burger",
    name: "Smash House Burger",
    description:
      "Double smashed patty, house sauce, cheddar and pickles in a toasted brioche bun.",
    price: 249,
    category: "Burgers",
    veg: false,
    popular: true,
    image: img("photo-1568901346375-23c9450c58cd"),
    ingredients: [
      "Double smashed patty",
      "Cheddar",
      "House sauce",
      "Pickles",
      "Brioche bun",
    ],
    dietary: ["High protein"],
    calories: "690 kcal",
  },
  {
    slug: "paneer-tikka-burger",
    name: "Paneer Tikka Burger",
    description:
      "Char-grilled tikka paneer patty with mint mayo, onion and crisp lettuce.",
    price: 219,
    category: "Burgers",
    veg: true,
    image: img("photo-1553979459-d2229ba7433b"),
    ingredients: ["Tikka paneer patty", "Mint mayo", "Onion", "Lettuce"],
    dietary: ["Vegetarian"],
    calories: "540 kcal",
  },
  {
    slug: "firecracker-crispy-chicken",
    name: "Firecracker Crispy Chicken",
    description:
      "Crunchy fried chicken fillet, spicy slaw and sriracha mayo.",
    price: 269,
    category: "Burgers",
    veg: false,
    spicy: true,
    image: img("photo-1571091718767-18b5b1457add"),
    ingredients: ["Crispy chicken fillet", "Spicy slaw", "Sriracha mayo"],
    dietary: ["High protein"],
    calories: "710 kcal",
  },
  {
    slug: "double-cheese-veg-stack",
    name: "Double Cheese Veg Stack",
    description:
      "Two crisp veggie patties layered with double cheddar and burger sauce.",
    price: 229,
    category: "Burgers",
    veg: true,
    image: img("photo-1550547660-d9450f859349"),
    ingredients: ["Veggie patty x2", "Cheddar", "Burger sauce", "Lettuce"],
    dietary: ["Vegetarian"],
    calories: "650 kcal",
  },
  {
    slug: "bbq-pulled-chicken-burger",
    name: "BBQ Pulled Chicken Burger",
    description:
      "Slow-cooked pulled chicken tossed in smoky BBQ sauce with crunchy onions.",
    price: 259,
    category: "Burgers",
    veg: false,
    image: img("photo-1586190848861-99aa4a171e90"),
    ingredients: ["Pulled chicken", "BBQ sauce", "Crispy onions"],
    dietary: ["High protein"],
    calories: "670 kcal",
  },

  // ---------------- SIDES (5) ----------------
  {
    slug: "loaded-cheese-fries",
    name: "Loaded Cheese Fries",
    description:
      "Crispy fries piled with molten cheese sauce, jalapeños and herbs.",
    price: 179,
    category: "Sides",
    veg: true,
    popular: true,
    image: img("photo-1585109649139-366815a0d713"),
    ingredients: ["Fries", "Cheese sauce", "Jalapeños", "Herbs"],
    dietary: ["Vegetarian"],
    calories: "480 kcal",
  },
  {
    slug: "garlic-cheese-bread",
    name: "Garlic Cheese Bread",
    description:
      "Toasted dough sticks loaded with garlic butter and melted mozzarella.",
    price: 149,
    category: "Sides",
    veg: true,
    popular: true,
    image: img("photo-1541592106381-b31e9677c0e5"),
    ingredients: ["Dough sticks", "Garlic butter", "Mozzarella"],
    dietary: ["Vegetarian"],
    calories: "410 kcal",
  },
  {
    slug: "peri-peri-chicken-wings",
    name: "Peri Peri Chicken Wings",
    description:
      "Oven-roasted wings tossed in a fiery peri peri glaze.",
    price: 229,
    category: "Sides",
    veg: false,
    spicy: true,
    image: img("photo-1548340748-6d2b7d7da280"),
    ingredients: ["Chicken wings", "Peri peri glaze"],
    dietary: ["High protein"],
    calories: "520 kcal",
  },
{
  slug: "crunchy-corn-nuggets",
  name: "Crunchy Corn Nuggets",
  description:
    "Golden fried corn and cheese nuggets served with tangy dip.",
  price: 159,
  category: "Sides",
  veg: true,
  image:
    "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/food_pics_v2/medium/corn_nuggets.jpg",
  ingredients: ["Sweet corn", "Cheese", "Bread crumb coating"],
  dietary: ["Vegetarian"],
  calories: "390 kcal",
},
  {
    slug: "paneer-popcorn-bites",
    name: "Paneer Popcorn Bites",
    description:
      "Bite-sized crispy paneer poppers tossed in tandoori spice.",
    price: 189,
    category: "Sides",
    veg: true,
    spicy: true,
    image: img("photo-1639024471283-03518883512d"),
    ingredients: ["Paneer", "Tandoori spice", "Crispy coating"],
    dietary: ["Vegetarian"],
    calories: "430 kcal",
  },

  // ---------------- DESSERTS (4) ----------------
  {
    slug: "molten-choco-lava",
    name: "Molten Choco Lava",
    description:
      "Warm chocolate cake with a gooey molten centre, served with vanilla drizzle.",
    price: 149,
    category: "Desserts",
    veg: true,
    popular: true,
    image: img("photo-1624353365286-3f8d62daad51"),
    ingredients: ["Dark chocolate", "Cake batter", "Vanilla drizzle"],
    dietary: ["Vegetarian"],
    calories: "410 kcal",
  },
  {
    slug: "cinnamon-sugar-donuts",
    name: "Cinnamon Sugar Donuts",
    description:
      "Warm mini donuts tossed in cinnamon sugar with a chocolate dip.",
    price: 129,
    category: "Desserts",
    veg: true,
    image: img("photo-1551024506-0bccd828d307"),
    ingredients: ["Mini donuts", "Cinnamon sugar", "Chocolate dip"],
    dietary: ["Vegetarian"],
    calories: "380 kcal",
  },
  {
    slug: "nutty-brownie-tart",
    name: "Nutty Brownie Tart",
    description:
      "Fudgy brownie tart loaded with roasted nuts and chocolate ganache.",
    price: 159,
    category: "Desserts",
    veg: true,
    image: img("photo-1587314168485-3236d6710814"),
    ingredients: ["Brownie", "Roasted nuts", "Chocolate ganache"],
    dietary: ["Vegetarian", "Contains nuts"],
    calories: "440 kcal",
  },
  {
    slug: "classic-tiramisu-cup",
    name: "Classic Tiramisu Cup",
    description:
      "Layered coffee-soaked sponge and mascarpone cream, dusted with cocoa.",
    price: 169,
    category: "Desserts",
    veg: true,
    image: img("photo-1541783245831-57d6fb0926d3"),
    ingredients: ["Sponge", "Mascarpone cream", "Cocoa dust", "Coffee"],
    dietary: ["Vegetarian"],
    calories: "390 kcal",
  },

  // ---------------- BEVERAGES (6) ----------------
  {
    slug: "classic-cola",
    name: "Classic Cola",
    description: "Chilled classic cola served over ice.",
    price: 79,
    category: "Beverages",
    veg: true,
    image: img("photo-1622483767028-3f66f32aef97"),
    ingredients: ["Carbonated cola"],
    dietary: ["Vegetarian"],
    calories: "140 kcal",
  },
  {
    slug: "fresh-lemon-mint-cooler",
    name: "Fresh Lemon Mint Cooler",
    description:
      "Zesty lemon juice muddled with fresh mint and soda.",
    price: 99,
    category: "Beverages",
    veg: true,
    popular: true,
    image: img("photo-1544145945-f90425340c7e"),
    ingredients: ["Lemon juice", "Mint", "Soda"],
    dietary: ["Vegetarian", "Vegan"],
    calories: "70 kcal",
  },
  {
    slug: "iced-peach-tea",
    name: "Iced Peach Tea",
    description:
      "House-brewed iced tea infused with real peach.",
    price: 109,
    category: "Beverages",
    veg: true,
    image: img("photo-1581636625402-29b2a704ef13"),
    ingredients: ["Iced tea", "Peach infusion"],
    dietary: ["Vegetarian", "Vegan"],
    calories: "90 kcal",
  },
  {
    slug: "choco-milkshake",
    name: "Choco Milkshake",
    description:
      "Thick and creamy chocolate milkshake topped with shavings.",
    price: 139,
    category: "Beverages",
    veg: true,
    popular: true,
    image: img("photo-1546173159-315724a31696"),
    ingredients: ["Milk", "Chocolate", "Ice cream"],
    dietary: ["Vegetarian"],
    calories: "320 kcal",
  },
  {
    slug: "mango-tango-smoothie",
    name: "Mango Tango Smoothie",
    description:
      "Blended Alphonso mango with yogurt and a hint of citrus.",
    price: 149,
    category: "Beverages",
    veg: true,
    image: img("photo-1595981267035-7b04ca84a82d"),
    ingredients: ["Mango", "Yogurt", "Citrus"],
    dietary: ["Vegetarian"],
    calories: "260 kcal",
  },
  {
    slug: "sparkling-orange-fizz",
    name: "Sparkling Orange Fizz",
    description:
      "Bright orange soda with a citrus twist, served ice-cold.",
    price: 89,
    category: "Beverages",
    veg: true,
    image: img("photo-1553530666-ba11a7da3888"),
    ingredients: ["Orange soda", "Citrus twist"],
    dietary: ["Vegetarian"],
    calories: "150 kcal",
  },
];

export const offers: Offer[] = [
  {
    id: "weekend-feast",
    title: "Weekend Feast",
    price: 799,
    originalPrice: 1096,
    description:
      "The ultimate weekend spread for two — pizzas, garlic bread and drinks to share.",
    validity: "Valid Friday to Sunday",
    includes: ["2 Medium Pizzas (any)", "1 Garlic Cheese Bread", "2 Soft Drinks"],
    image: img("photo-1590947132387-155cc02f3212"),
    code: "WEEKEND799",
  },
  {
    id: "student-combo",
    title: "Student Combo",
    price: 299,
    originalPrice: 398,
    description:
      "Quick, affordable and filling — built for busy campus schedules. Valid with student ID.",
    validity: "Valid Mon–Fri, all day",
    includes: ["1 Regular Pizza", "1 Regular Drink"],
    image: img("photo-1513104890138-7c749659a591"),
    code: "STUDENT299",
  },
  {
    id: "family-night",
    title: "Family Night",
    price: 999,
    originalPrice: 1348,
    description:
      "A generous spread made for family movie nights at home.",
    validity: "Valid every day after 6 PM",
    includes: ["3 Medium Pizzas", "2 Sides", "1 Dessert", "4 Drinks"],
    image: img("photo-1600628421066-f6bda6a7b976"),
    code: "FAMILY999",
  },
  {
    id: "lunch-express",
    title: "Lunch Express",
    price: 249,
    originalPrice: 328,
    description:
      "Fast, fresh lunch delivered to your desk in 30 minutes or less.",
    validity: "Valid 11 AM – 3 PM daily",
    includes: ["1 Personal Pizza or Burger", "1 Side", "1 Drink"],
    image: img("photo-1568901346375-23c9450c58cd"),
    code: "LUNCH249",
  },
  {
    id: "late-night-cravings",
    title: "Late Night Cravings",
    price: 399,
    originalPrice: 528,
    description:
      "Because cravings don't check the clock. Available on late-night hours.",
    validity: "Valid 9 PM – close",
    includes: ["1 Medium Pizza", "1 Side", "1 Dessert"],
    image: img("photo-1624353365286-3f8d62daad51"),
    code: "LATENIGHT399",
  },
];

export const branches: Branch[] = [
  {
    id: "sector-17",
    name: "CRUSTRUSH Sector 17",
    addressLines: ["SCO 42, Madhya Marg", "Sector 17-C"],
    locality: "Sector 17-C",
    city: "Chandigarh",
    state: "Chandigarh",
    postalCode: "160017",
    country: "India",
    phone: "+91 xxxxxx xxxxx",
    hours:
      "Mon–Thu & Sun: 11 AM – 11 PM · Fri–Sat: 11 AM – 12 AM",
    mapQuery: "Sector 17-C, Chandigarh, 160017",
  },
  {
    id: "sector-35",
    name: "CRUSTRUSH Sector 35",
    addressLines: ["SCO 118, Jan Marg", "Sector 35-C"],
    locality: "Sector 35-C",
    city: "Chandigarh",
    state: "Chandigarh",
    postalCode: "160022",
    country: "India",
    phone: "+91 xxxxxx xxxxx",
    hours:
      "Mon–Thu & Sun: 11 AM – 11 PM · Fri–Sat: 11 AM – 12 AM",
    mapQuery: "Sector 35-C, Chandigarh, 160022",
  },
  {
    id: "mohali",
    name: "CRUSTRUSH Mohali",
    addressLines: [
      "SCO 74, Phase 5",
      "Sector 59, Sahibzada Ajit Singh Nagar",
    ],
    locality: "Sector 59",
    city: "Sahibzada Ajit Singh Nagar",
    state: "Punjab",
    postalCode: "160059",
    country: "India",
    phone: "+91 xxxxxx xxxxx",
    hours:
      "Mon–Thu & Sun: 11 AM – 11 PM · Fri–Sat: 11 AM – 12 AM",
    mapQuery: "Phase 5, Sector 59, Mohali, Punjab, 160059",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Aarav Mehta",
    role: "Verified Demo Review",
    quote:
      "Honestly one of the best pizzas I've had in Chandigarh. The crust is unreal.",
    rating: 5,
  },
  {
    name: "Riya Sharma",
    role: "Verified Demo Review",
    quote:
      "The crust and toppings are incredible — everything tastes genuinely handcrafted.",
    rating: 5,
  },
  {
    name: "Karan Malhotra",
    role: "Verified Demo Review",
    quote:
      "This place is now our weekend tradition. Delivery is always fast and hot.",
    rating: 5,
  },
  {
    name: "Simran Bedi",
    role: "Verified Demo Review",
    quote:
      "Loved the Firecracker Chicken pizza — perfect spice level and generous toppings.",
    rating: 4,
  },
];

export const faqs: FAQ[] = [
  {
    question: "Do you offer home delivery?",
    answer:
      "Yes, CRUSTRUSH delivers across Chandigarh, Sector 35 and Mohali. Delivery is free on orders above ₹499.",
  },
  {
    question: "What are your delivery timings?",
    answer:
      "We deliver every day from 11:00 AM until close (11 PM on weekdays and Sunday, midnight on Friday and Saturday).",
  },
  {
    question: "Do you have vegetarian options?",
    answer:
      "Absolutely — over half our menu is 100% vegetarian, clearly marked with a green indicator across the menu.",
  },
  {
    question: "Can I reserve a table?",
    answer:
      "Yes, use our Reservation page to book a table at any branch in under a minute — no account required.",
  },
  {
    question: "Do you accept party orders?",
    answer:
      "We cater birthdays, get-togethers and celebrations of any size. Reach out via the Contact page or call your nearest branch.",
  },
  {
    question: "Do you offer corporate catering?",
    answer:
      "Yes, we offer corporate meal plans and bulk office orders with flexible billing. Contact us for a custom quote.",
  },
];

export const categories: { name: string; slug: string; image: string }[] = [
  {
    name: "Pizza",
    slug: "Pizza",
    image: img("photo-1513104890138-7c749659a591"),
  },
  {
    name: "Burgers",
    slug: "Burgers",
    image: img("photo-1568901346375-23c9450c58cd"),
  },
  {
    name: "Sides",
    slug: "Sides",
    image: img("photo-1585109649139-366815a0d713"),
  },
  {
    name: "Desserts",
    slug: "Desserts",
    image: img("photo-1624353365286-3f8d62daad51"),
  },
  {
    name: "Drinks",
    slug: "Beverages",
    image: img("photo-1622483767028-3f66f32aef97"),
  },
];