'use client';

import PricingFAQ from '@/components/PricingFAQ';
import PricingHero from '@/components/PricingHero';

export default function PricingPage() {
  return (
    <section>
      <PricingHero />
      <PricingFAQ />
    </section>
  );
}