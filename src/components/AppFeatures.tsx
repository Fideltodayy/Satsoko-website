import { History, CalendarClock, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    id: "purchase-history",
    icon: History,
    title: "Purchase History",
    subtitle: "Track every buy, anonymously",
    description:
      "View all your previous purchases right in the app. No account needed — your history stays on your device, completely private.",
  },
  {
    id: "recurring-purchases",
    icon: CalendarClock,
    title: "Recurring Purchases",
    subtitle: "Automate your sat stacking",
    description:
      "Set up a schedule and dollar-cost average into bitcoin automatically. Small, regular buys — the simplest long-term strategy.",
  },
  {
    id: "lightning-invoices",
    icon: Zap,
    title: "Lightning Invoices",
    subtitle: "Beyond Lightning addresses",
    description:
      "The app supports bolt11 Lightning invoices alongside Lightning addresses, unlocking compatibility with more self-custodial wallets like Phoenix and Zeus.",
  },
];

/* ------------------------------------------------------------------ */
/*  Mini phone mockup (scaled-down version of the hero PhoneMockup)   */
/* ------------------------------------------------------------------ */

const MiniPhoneMockup = ({ featureId }: { featureId: string }) => (
  <div className="relative w-[220px]" aria-hidden="true">
    {/* Outer bezel */}
    <div
      className="relative rounded-[42px] p-[2.5px]"
      style={{
        background:
          "linear-gradient(145deg, hsl(220 15% 25%), hsl(220 10% 12%))",
        boxShadow:
          "0 30px 60px -15px rgba(0,0,0,0.35), 0 15px 30px -8px rgba(0,0,0,0.2), inset 0 1px 0 0 rgba(255,255,255,0.08)",
      }}
    >
      {/* Inner bezel */}
      <div
        className="rounded-[40px] p-[8px]"
        style={{
          background:
            "linear-gradient(180deg, hsl(220 12% 16%), hsl(220 15% 10%))",
        }}
      >
        {/* Screen */}
        <div className="bg-background rounded-[32px] overflow-hidden relative">
          {/* Dynamic Island */}
          <div className="flex justify-center pt-2.5 pb-0.5">
            <div
              className="w-[72px] h-[20px] rounded-full"
              style={{ background: "hsl(220 15% 10%)" }}
            />
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between px-5 py-1">
            <span className="text-[9px] font-semibold text-foreground">
              9:41
            </span>
            <div className="w-[16px] h-[8px] border border-foreground/40 rounded-[2px] relative">
              <div className="absolute inset-[1.5px] right-[2px] bg-satsoko-green rounded-[1px]" />
            </div>
          </div>

          {/* Feature-specific content */}
          <div className="px-4 pb-5 pt-2">
            {featureId === "purchase-history" && <PurchaseHistoryScreen />}
            {featureId === "recurring-purchases" && <RecurringPurchasesScreen />}
            {featureId === "lightning-invoices" && <LightningInvoicesScreen />}
          </div>

          {/* Home indicator */}
          <div className="flex justify-center pb-1.5">
            <div className="w-[90px] h-[3px] rounded-full bg-foreground/15" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Screen content for each feature                                    */
/* ------------------------------------------------------------------ */

const PurchaseHistoryScreen = () => {
  const purchases = [
    { date: "Today", amount: "1,000", sats: "7,845" },
    { date: "Mon", amount: "500", sats: "3,920" },
    { date: "Fri", amount: "2,000", sats: "15,640" },
    { date: "Wed", amount: "750", sats: "5,870" },
  ];

  return (
    <div className="space-y-2.5">
      <p className="text-[11px] font-bold text-foreground text-center">
        Purchase History
      </p>
      <div className="space-y-1.5">
        {purchases.map((p, i) => (
          <div
            key={i}
            className="bg-muted rounded-xl px-3 py-2 flex items-center justify-between"
          >
            <div>
              <p className="text-[9px] text-muted-foreground">{p.date}</p>
              <p className="text-[10px] font-semibold text-foreground">
                KES {p.amount}
              </p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-0.5 justify-end">
                <Zap className="w-2.5 h-2.5 text-primary" />
                <span className="text-[10px] font-bold text-foreground">
                  {p.sats}
                </span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-satsoko-green ml-auto mt-0.5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RecurringPurchasesScreen = () => {
  const bars = [35, 45, 40, 55, 50, 60, 52];

  return (
    <div className="space-y-2.5">
      <p className="text-[11px] font-bold text-foreground text-center">
        Recurring Buy
      </p>

      {/* Frequency selector */}
      <div className="flex gap-1.5">
        {["Daily", "Weekly", "Monthly"].map((freq, i) => (
          <div
            key={freq}
            className={`flex-1 text-center py-1.5 rounded-lg text-[8px] font-semibold ${
              i === 1
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {freq}
          </div>
        ))}
      </div>

      {/* Amount */}
      <div className="bg-muted rounded-xl px-3 py-2 text-center">
        <p className="text-[8px] text-muted-foreground">Every Friday</p>
        <p className="text-[14px] font-extrabold text-foreground">KES 500</p>
      </div>

      {/* Mini stacking chart */}
      <div className="bg-muted rounded-xl px-3 py-2.5">
        <p className="text-[8px] text-muted-foreground mb-1.5">Sats stacked</p>
        <div className="flex items-end gap-1 h-[32px]">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-primary/70"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Total */}
      <div className="text-center">
        <p className="text-[8px] text-muted-foreground">Total stacked</p>
        <p className="text-[11px] font-bold text-satsoko-green">124,350 sats</p>
      </div>
    </div>
  );
};

const LightningInvoicesScreen = () => (
  <div className="space-y-2.5">
    <p className="text-[11px] font-bold text-foreground text-center">
      Send to Wallet
    </p>

    {/* Toggle: Address / Invoice */}
    <div className="flex bg-muted rounded-lg p-0.5">
      <div className="flex-1 text-center py-1.5 rounded-md text-[8px] font-semibold text-muted-foreground">
        Address
      </div>
      <div className="flex-1 text-center py-1.5 rounded-md bg-background text-[8px] font-semibold text-foreground shadow-sm">
        Invoice
      </div>
    </div>

    {/* Invoice input */}
    <div className="border border-border rounded-xl px-3 py-2">
      <p className="text-[8px] text-muted-foreground mb-0.5">
        Lightning invoice
      </p>
      <p className="text-[8px] font-mono text-foreground/70 break-all leading-tight">
        lnbc10u1pjk...q8dgz
      </p>
    </div>

    {/* Decoded info */}
    <div className="bg-muted rounded-xl px-3 py-2 space-y-1">
      <div className="flex justify-between">
        <span className="text-[8px] text-muted-foreground">Amount</span>
        <span className="text-[9px] font-bold text-foreground">7,845 sats</span>
      </div>
      <div className="flex justify-between">
        <span className="text-[8px] text-muted-foreground">Expires</span>
        <span className="text-[9px] font-semibold text-foreground">58 min</span>
      </div>
    </div>

    {/* Compatibility badge */}
    <div className="flex items-center gap-1.5 justify-center">
      <Zap className="w-3 h-3 text-primary" />
      <span className="text-[8px] text-primary font-semibold">
        Works with all LN wallets
      </span>
    </div>

    {/* Pay button */}
    <button className="w-full bg-primary text-primary-foreground text-[10px] font-bold py-2.5 rounded-xl">
      Proceed to payment
    </button>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */

const AppFeatures = () => {
  return (
    <section id="app-features" className="bg-background py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            App Exclusive
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mt-2">
            More power in the{" "}
            <span className="text-primary">app</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            The Satsoko app unlocks features you won't find on the web —
            designed for serious stackers.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.id} delay={i * 150}>
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-10 md:gap-16`}
              >
                {/* Text side */}
                <div className="flex-1 text-center md:text-left">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mx-auto md:mx-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-primary font-semibold text-sm mt-1">
                    {feature.subtitle}
                  </p>
                  <p className="text-muted-foreground mt-3 leading-relaxed max-w-sm mx-auto md:mx-0">
                    {feature.description}
                  </p>
                </div>

                {/* Mockup side */}
                <div className="flex-1 flex justify-center">
                  <MiniPhoneMockup featureId={feature.id} />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
