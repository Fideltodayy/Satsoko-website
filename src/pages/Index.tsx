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
import TrustFeatures from "@/components/TrustFeatures";

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 hero-gradient-bg" />

        {/* Decorative orange orbs */}
        <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] orange-pulse pointer-events-none" />
        <div className="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-primary/8 blur-[100px] orange-pulse pointer-events-none" style={{ animationDelay: '3s' }} />

        {/* Background video slot — drop your .mp4 here for a lively hero */}
        {/*
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          autoPlay muted loop playsInline
        >
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>
        */}

        <div className="relative max-w-6xl mx-auto px-6 pt-16 md:pt-24 pb-16 lg:pb-0 lg:min-h-[90vh] flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-20">
          {/* Text side */}
          <div className="hero-animate hero-delay-0 flex-1 text-center lg:text-left">
            <div className="hero-animate hero-delay-0 inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-semibold tracking-wide">Non-custodial · No KYC · Lightning fast</span>
            </div>

            <h1 className="hero-animate hero-delay-0 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-foreground leading-[1.08] mb-5">
              Buy <span className="text-primary">bitcoin</span> instantly
              <br /> with KES via <span className="text-primary">M-Pesa</span>
            </h1>

            <p className="hero-animate hero-delay-1 text-lg md:text-xl text-muted-foreground max-w-xl lg:mx-0 mx-auto mb-8 leading-relaxed">
              Sats land in your Lightning wallet in seconds. No sign-up. No middleman. <strong className="text-foreground font-semibold">We never hold your funds.</strong>
            </p>

            <div className="hero-animate hero-delay-2 mb-10 lg:mb-0">
              <CTAButtons />
            </div>
          </div>

          {/* Phone side */}
          <div className="hero-animate hero-delay-3 flex-1 flex items-center justify-center pb-16 lg:pb-24 mt-10 lg:mt-0">
            <PhoneMockup />
          </div>
        </div>
      </section>

      <ScrollReveal>
        <TrustFeatures />
      </ScrollReveal>

      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>

      <ScrollReveal>
        <AppFeatures />
      </ScrollReveal>

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
