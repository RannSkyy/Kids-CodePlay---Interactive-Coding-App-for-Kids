export type AppScreenId = 'welcome' | 'home' | 'game' | 'progress' | 'profile' | 'reward';

export interface CommandBlock {
  id: string;
  type: 'forward' | 'turn_right' | 'turn_left' | 'repeat';
  label: string;
  color: string;
  icon: string;
}

export interface GridPosition {
  x: number;
  y: number;
  direction: 'up' | 'right' | 'down' | 'left';
}

export interface UserStats {
  stars: number;
  coins: number;
  completedStages: number;
  firstTry: number;
  helpsMade: number;
  hintsGiven: number;
  areasCompleted: number;
  badges: number;
}

export interface ContactFormData {
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  interest: 'trial' | 'school' | 'pricing' | 'support' | 'feedback';
  message: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnually: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  childInfo: string;
  rating: number;
  comment: string;
  badge: string;
}
