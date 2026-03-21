import { Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

/* ─── Mini App Screen: Step 1 ─── */
const ScreenEnterAmount = () => (
  <div className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border/60 w-full">
    {/* Status bar */}
    <div className="flex justify-between items-center px-4 py-2 bg-muted/60">
      <span className="text-[9px] font-semibold text-foreground/50">9:41</span>
      <div className="flex gap-1 items-center">
        <div className="w-[6px] h-[6px] rounded-full bg-satsoko-green" />
        <span className="text-[9px] text-foreground/40">Live rate</span>
      </div>
    </div>
    {/* Content */}
    <div className="px-4 py-4 space-y-3">
      <p className="text-[10px] text-muted-foreground font-medium">Amount (KES)</p>
      <div className="border-2 border-primary rounded-xl px-3 py-2.5 flex items-center justify-between">
        <span className="text-lg font-extrabold text-foreground">1,000</span>
        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg">KES</span>
      </div>
      <div className="bg-muted rounded-xl px-3 py-2.5 flex items-center justify-between">
        <span className="text-[10px] text-muted-foreground">You receive</span>
        <div className="flex items-center gap-1">
          <Zap className="w-3 h-3 text-primary" />
          <span className="text-sm font-bold text-foreground">7,845 sats</span>
        </div>
      </div>
      <div className="text-center">
        <span className="text-[9px] text-muted-foreground">1 BTC ≈ <span className="text-satsoko-green font-semibold">$96,432</span></span>
      </div>
    </div>
  </div>
);

/* ─── Mini App Screen: Step 2 ─── */
const ScreenLightningAddress = () => (
  <div className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border/60 w-full">
    {/* Status bar */}
    <div className="flex justify-between items-center px-4 py-2 bg-muted/60">
      <span className="text-[9px] font-semibold text-foreground/50">9:41</span>
      <span className="text-[9px] text-foreground/40">⚡ Lightning</span>
    </div>
    {/* Content */}
    <div className="px-4 py-4 space-y-3">
      <p className="text-[10px] text-muted-foreground font-medium">Lightning wallet address</p>
      <div className="border border-border rounded-xl px-3 py-2.5">
        <span className="text-[11px] text-foreground font-medium">satoshi@blink.sv</span>
      </div>
      {/* Valid badge */}
      <div className="flex items-center gap-1.5 bg-satsoko-green/10 border border-satsoko-green/20 rounded-xl px-3 py-2">
        <div className="w-4 h-4 rounded-full bg-satsoko-green/20 flex items-center justify-center">
          <span className="text-[8px] text-satsoko-green font-bold">✓</span>
        </div>
        <span className="text-[10px] text-satsoko-green font-semibold">Valid Lightning address</span>
      </div>
      <div className="bg-muted rounded-xl px-3 py-2.5 flex items-center justify-between">
        <span className="text-[10px] text-muted-foreground">Sending</span>
        <span className="text-[10px] font-bold text-foreground">7,845 sats</span>
      </div>
    </div>
  </div>
);

/* ─── Mini App Screen: Step 3 ─── */
const ScreenMpesa = () => (
  <div className="bg-background rounded-2xl overflow-hidden shadow-lg border border-border/60 w-full">
    {/* Status bar */}
    <div className="flex justify-between items-center px-4 py-2 bg-muted/60">
      <span className="text-[9px] font-semibold text-foreground/50">9:41</span>
      <span className="text-[9px] text-foreground/40">📱 Safaricom</span>
    </div>
    {/* Content */}
    <div className="px-4 py-4 space-y-3">
      {/* Success state */}
      <div className="flex flex-col items-center gap-2 py-2">
        <div className="w-12 h-12 rounded-full bg-satsoko-green/15 border-2 border-satsoko-green/30 flex items-center justify-center">
          <span className="text-lg">⚡</span>
        </div>
        <p className="text-xs font-bold text-foreground">Sats received!</p>
        <p className="text-[9px] text-muted-foreground">STK push confirmed</p>
      </div>
      <div className="bg-satsoko-green/8 border border-satsoko-green/20 rounded-xl px-3 py-2.5 flex items-center justify-between">
        <span className="text-[10px] text-satsoko-green font-semibold">+7,845 sats</span>
        <span className="text-[9px] text-muted-foreground">~2s ago</span>
      </div>
      <div className="bg-muted rounded-xl px-3 py-2 text-center">
        <span className="text-[9px] text-muted-foreground">Wallet: <span className="text-foreground font-medium">satoshi@blink.sv</span></span>
      </div>
    </div>
  </div>
);

const steps = [
  {
    number: "01",
    title: "Enter amount",
    tagline: "Type how much KES you want to spend — see sats instantly.",
    Screen: ScreenEnterAmount,
  },
  {
    number: "02",
    title: "Add Lightning address",
    tagline: "Paste your wallet address. Bitcoin goes straight there.",
    Screen: ScreenLightningAddress,
  },
  {
    number: "03",
    title: "Pay via M-Pesa",
    tagline: "Confirm the STK push. Sats land in your wallet in seconds.",
    Screen: ScreenMpesa,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-muted py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tight text-foreground mt-2">
            Buy Bitcoin in <span className="text-primary">3 steps</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto text-sm">
            No exchange accounts. No setup. Just KES in, sats out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ number, title, tagline, Screen }, i) => (
            <ScrollReveal
              key={number}
              delay={i * 130}
              className="bg-background rounded-3xl p-6 flex flex-col gap-5"
            >
              {/* Step header */}
              <div className="flex items-center gap-3">
                <span className="text-4xl font-extrabold text-primary/20 leading-none select-none tabular-nums">
                  {number}
                </span>
                <div>
                  <h3 className="font-bold text-foreground text-base leading-tight">{title}</h3>
                  <p className="text-muted-foreground text-xs mt-0.5 leading-snug">{tagline}</p>
                </div>
              </div>

              {/* App screen illustration */}
              <div className="relative">
                {/* Subtle glow behind screen */}
                <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl" />
                <Screen />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
