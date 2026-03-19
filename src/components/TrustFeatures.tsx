import { ShieldCheck, UserX, Zap, ArrowRightLeft } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const usps = [
  {
    Icon: ShieldCheck,
    title: "Non-Custodial",
    headline: "Your bitcoin, your keys",
    description:
      "We never hold your Bitcoin — not even for a second. Sats go straight from your M-Pesa to your own Lightning wallet. You remain in full control at all times.",
    accent: true,
  },
  {
    Icon: UserX,
    title: "No KYC. No Sign-Up.",
    headline: "Privacy by default",
    description:
      "No ID, no selfie, no account creation. Just enter an amount, your Lightning address, and your M-Pesa number. That's the entire process.",
    accent: false,
  },
  {
    Icon: Zap,
    title: "Lightning Fast",
    headline: "Under 2 minutes, always",
    description:
      "Powered by the Bitcoin Lightning Network — the fastest payment rail on earth. Confirm the STK push and sats land in your wallet in seconds.",
    accent: false,
  },
  {
    Icon: ArrowRightLeft,
    title: "No Middleman",
    headline: "Straight from M-Pesa to Lightning",
    description:
      "No exchange account. No deposit. No withdrawal. Satsoko is a pure bridge — KES in, sats out. The money goes directly to you.",
    accent: false,
  },
];

const TrustFeatures = () => {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Why Satsoko
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight text-white mt-2">
            Built on <span className="text-primary">trust</span>, not promises
          </h2>
          <p className="text-white/60 mt-3 max-w-lg mx-auto leading-relaxed">
            We don't hold your funds. We don't need your ID. We just bridge KES to bitcoin — fast and direct.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {usps.map(({ Icon, title, headline, description, accent }, i) => (
            <ScrollReveal key={title} delay={i * 100}>
              <div
                className={`rounded-3xl p-7 h-full flex flex-col gap-4 border transition-all duration-300 hover:-translate-y-1 ${
                  accent
                    ? "bg-primary border-primary/0 text-primary-foreground"
                    : "bg-white/5 border-white/10 text-white"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                    accent ? "bg-white/20" : "bg-primary/15"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${accent ? "text-white" : "text-primary"}`} />
                </div>
                <div>
                  <span
                    className={`text-xs font-bold uppercase tracking-widest ${
                      accent ? "text-white/70" : "text-primary/80"
                    }`}
                  >
                    {title}
                  </span>
                  <h3
                    className={`font-bold text-lg mt-1 ${
                      accent ? "text-white" : "text-white"
                    }`}
                  >
                    {headline}
                  </h3>
                  <p
                    className={`text-sm mt-2 leading-relaxed ${
                      accent ? "text-white/80" : "text-white/55"
                    }`}
                  >
                    {description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom trust bar */}
        <div className="mt-14 flex flex-wrap justify-center gap-x-10 gap-y-3 text-white/40 text-sm font-medium">
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
