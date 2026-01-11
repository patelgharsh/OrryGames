import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  thumbnail_url: string;
  game_url: string;
  creator: string;
  rating: number;
  plays: string;
  featured_section: string;
  created_at: string;
  updated_at: string;
}
