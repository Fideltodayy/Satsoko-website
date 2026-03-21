import { ShieldCheck, UserX, Zap, ArrowRightLeft } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const usps = [
  {
    Icon: ShieldCheck,
    label: "Non-custodial",
    sub: "Your keys, your bitcoin",
    accent: true,
  },
  {
    Icon: UserX,
    label: "No KYC",
    sub: "No sign-up ever",
    accent: false,
  },
  {
    Icon: Zap,
    label: "Lightning fast",
    sub: "Under 2 minutes",
    accent: false,
  },
  {
    Icon: ArrowRightLeft,
    label: "No middleman",
    sub: "KES in, sats out",
    accent: false,
  },
];

const TrustFeatures = () => {
  return (
    <section className="bg-secondary py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Headline */}
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Why Satsoko
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight text-white mt-2">
            Built on <span className="text-primary">trust</span>, not promises
          </h2>
        </div>

        {/* Feature strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {usps.map(({ Icon, label, sub, accent }, i) => (
            <ScrollReveal key={label} delay={i * 80}>
              <div
                className={`flex flex-col items-center justify-center gap-3 px-6 py-10 text-center transition-colors duration-300 hover:bg-white/5 ${
                  accent ? "bg-primary/15" : ""
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    accent ? "bg-primary/25" : "bg-white/8"
                  }`}
                >
                  <Icon className={`w-6 h-6 ${accent ? "text-primary" : "text-white/70"}`} />
                </div>
                <div>
                  <p className="font-bold text-white text-base">{label}</p>
                  <p className="text-white/45 text-xs mt-0.5">{sub}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2.5 text-white/30 text-xs font-medium">
          <span>⚡ Lightning Network</span>
          <span>🔑 Non-custodial</span>
          <span>🇰🇪 Built in Kenya</span>
          <span>₿ Bitcoin only</span>
          <span>🔒 No data stored</span>
        </div>

      </div>
    </section>
  );
};

export default TrustFeatures;
