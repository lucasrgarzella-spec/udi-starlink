export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  image: string;
  category: 'hardware' | 'service' | 'accessory';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HOME = 'home',
  FEATURES = 'features',
  PRODUCTS = 'products',
  CONTACT = 'contact'
}