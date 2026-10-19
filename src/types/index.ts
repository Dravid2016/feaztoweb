export interface FoodItem {
  id: string;
  name: string;
  region: string;
  originState: string;
  category: 'Breakfast' | 'Curry & Rice' | 'Bread & Gravy' | 'Snacks & Sweets';
  description: string;
  storyNote: string;
  image: string;
  tags: string[];
}

export interface KitchenStory {
  id: string;
  title: string;
  cookName: string;
  regionSpecialty: string;
  experienceYears: number;
  locationArea: string;
  signatureDish: string;
  quote: string;
  image?: string;
  story: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'About' | 'Discovery' | 'Kitchens' | 'App';
}
