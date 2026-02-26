import { ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const wallets = [
  {
    name: "Blink",
    type: "Custodial · Easiest",
    description:
      "Perfect for beginners. Create a wallet in 30 seconds with just a phone number. No technical setup needed.",
    icon: "/icons/blink.webp",
  },
  {
    name: "Phoenix",
    type: "Self-custodial · Recommended",
    description:
      "Hold your own keys. Seamless Lightning experience with automatic channel management and a beautiful UI.",
    icon: "/icons/phoenix.webp",
  },
  {
    name: "Wallet of Satoshi",
    type: "Custodial · Simple",
    description:
      "The world's simplest Lightning wallet. Send and receive Bitcoin instantly with zero configuration.",
    icon: "/icons/wallet-of-satoshi.webp",
  },
  {
    name: "Breez",
    type: "Self-custodial",
    description:
      "Non-custodial Lightning wallet with a clean interface, built-in podcast player, and Point of Sale mode.",
    icon: "/icons/breez.webp",
  },
  {
    name: "Machankura",
    type: "Non-custodial · No internet needed",
    description:
      "Access Bitcoin via USSD — no smartphone or internet required. Built for Africa, works on any phone.",
    icon: "/icons/machankura.svg",
  },
  {
    name: "Zeus",
    type: "Advanced · Self-custodial",
    description:
      "For power users who want full control, including the ability to connect their own Lightning node.",
    icon: "/icons/zeus.webp",
  },
];

const WalletRecommendations = () => {
  return (
    <section id="wallets" className="bg-background py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Lightning Wallets
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mt-2">
            Don't have a wallet yet?
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            You need a Lightning wallet to receive your sats. Here are our top
            picks — all fully compatible with Satsoko.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {wallets.map((wallet, i) => (
            <ScrollReveal key={wallet.name} delay={i * 100}>
              <a
                href="#"
                className="group bg-muted rounded-3xl p-6 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
              <img
                src={wallet.icon}
                alt={wallet.name}
                className="w-12 h-12 rounded-2xl object-contain"
              />
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-foreground">{wallet.name}</h3>
                  <ExternalLink className="w-3.5 h-3.5 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-[11px] text-primary font-semibold mt-0.5">
                  {wallet.type}
                </p>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {wallet.description}
              </p>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WalletRecommendations;
