export type Category = "Pizza" | "Burgers" | "Sides" | "Desserts" | "Beverages";

export interface MenuItem {
  slug: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  veg: boolean;
  popular?: boolean;
  spicy?: boolean;
  image: string;
  ingredients: string[];
  dietary: string[];
  calories?: string;
}

export interface Offer {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  description: string;
  validity: string;
  includes: string[];
  image: string;
  code: string;
}

export interface Branch {
  id: string;
  name: string;
  addressLines: string[];
  locality: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  hours: string;
  mapQuery: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}
