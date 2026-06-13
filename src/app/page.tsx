  import {
  HeroSection,
  MarqueeSection,
  StatementSection,
  CustomIntelligenceSection,
  LLMSection,
  WebSection,
  WhyPartnerSection,
  ContactSection,
  FooterSection,
} from '@/components/sections';

export default function Home() {
  return (
    <main className="w-full bg-black">
      <HeroSection />
      <MarqueeSection />
      <StatementSection />
      <CustomIntelligenceSection />
      <LLMSection />
      <WebSection />
      <WhyPartnerSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
