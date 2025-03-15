import { Roboto } from 'next/font/google';

// Configure Roboto font with desired weights/styles
export const roboto = Roboto({
  subsets: ['latin'], // Preload for Latin characters
  weight: ['400', '700'], // Normal (400) and Bold (700)
  style: ['normal', 'italic'], // Include italic variants (optional)
  display: 'swap', // Ensure text remains visible during font load
  variable: '--font-roboto', // Optional: Define CSS variable
});