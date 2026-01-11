/*
  # Create games table

  1. New Tables
    - `games`
      - `id` (uuid, primary key) - Unique identifier for each game
      - `title` (text) - Game title/name
      - `description` (text) - Full game description
      - `category` (text) - Game category (Action, Puzzle, Racing, etc.)
      - `thumbnail_url` (text) - URL to game thumbnail image
      - `game_url` (text) - URL to the game iframe source
      - `creator` (text) - Game creator/developer name
      - `rating` (numeric) - Game rating (0-5)
      - `plays` (text) - Number of plays (e.g., "2.3M")
      - `featured_section` (text) - Which section to feature in (weekly, hot, best, new)
      - `created_at` (timestamptz) - When the game was added
      - `updated_at` (timestamptz) - Last update timestamp

  2. Security
    - Enable RLS on `games` table
    - Add policy for anyone to read games (public access)
    - Add policy for authenticated users to insert/update games
*/

CREATE TABLE IF NOT EXISTS games (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  category text NOT NULL,
  thumbnail_url text DEFAULT '',
  game_url text NOT NULL,
  creator text DEFAULT '',
  rating numeric DEFAULT 4.5 CHECK (rating >= 0 AND rating <= 5),
  plays text DEFAULT '0',
  featured_section text DEFAULT 'new',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE games ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view games"
  ON games
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert games"
  ON games
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update games"
  ON games
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete games"
  ON games
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_games_category ON games(category);
CREATE INDEX IF NOT EXISTS idx_games_featured_section ON games(featured_section);
CREATE INDEX IF NOT EXISTS idx_games_created_at ON games(created_at DESC);
