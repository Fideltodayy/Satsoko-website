import Navbar from "@/components/Navbar";
import PhoneMockup from "@/components/PhoneMockup";
import CTAButtons from "@/components/CTAButtons";
import HowItWorks from "@/components/HowItWorks";
import AppFeatures from "@/components/AppFeatures";
import WalletRecommendations from "@/components/WalletRecommendations";
import WhatIsBitcoin from "@/components/WhatIsBitcoin";
import HowToUseBitcoin from "@/components/HowToUseBitcoin";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-20 text-center">
        {/* Headline */}
        <h1 className="hero-animate hero-delay-0 text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-4">
          Buy <span className="text-primary">bitcoin</span> instantly
          <br className="hidden sm:block" /> with KES via mobile money
        </h1>

        {/* Subtitle */}
        <p className="hero-animate hero-delay-1 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10">
          Instantly to your bitcoin wallet via the Satsoko App
        </p>

        {/* CTA Buttons */}
        <div className="hero-animate hero-delay-2 mb-16 md:mb-24">
          <CTAButtons />
        </div>

        {/* Phone Mockup */}
        <div className="hero-animate hero-delay-3">
          <PhoneMockup />
        </div>
      </main>

      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>

      {/* <ScrollReveal>
        <AppFeatures />
      </ScrollReveal> */}

      <ScrollReveal>
        <WalletRecommendations />
      </ScrollReveal>

      <ScrollReveal>
        <WhatIsBitcoin />
      </ScrollReveal>

      <ScrollReveal>
        <HowToUseBitcoin />
      </ScrollReveal>

      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      <Footer />
    </div>
  );
};

export default Index;
