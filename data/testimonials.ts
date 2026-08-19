export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company?: string;
}

// Intentionally empty: no verified testimonials have been supplied.
// Do not populate this with invented names, companies, or quotes.
// The Testimonials section only renders on the site when this array is
// non-empty (see components/TestimonialsSection.tsx) — so leaving it
// empty simply omits the section rather than showing fake placeholders.
export const testimonials: Testimonial[] = [];
