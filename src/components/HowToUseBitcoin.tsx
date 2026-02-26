import { PiggyBank, Send, ShoppingBag, Repeat, Users, Zap } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const useCases = [
  {
    Icon: PiggyBank,
    title: "Save & Preserve Value",
    description:
      "Store wealth in an asset that can't be inflated away. Bitcoin has outperformed every major asset class over the past decade.",
  },
  {
    Icon: Send,
    title: "Send Money Globally",
    description:
      "Send sats to family abroad instantly with near-zero fees — no Western Union, no waiting days, no forms.",
  },
  {
    Icon: ShoppingBag,
    title: "Pay for Goods & Services",
    description:
      "Thousands of merchants worldwide accept Bitcoin via Lightning. Fast, cheap, and final.",
  },
  {
    Icon: Repeat,
    title: "Stack Sats Regularly",
    description:
      "Buy a little every week or month. Dollar-cost averaging into Bitcoin is one of the simplest long-term strategies.",
  },
  {
    Icon: Users,
    title: "Support Creators",
    description:
      "Tip writers, podcasters, and artists directly via Lightning — instant micro-payments with no platform taking a cut.",
  },
  {
    Icon: Zap,
    title: "Lightning-Fast Payments",
    description:
      "Use the Lightning Network for payments that settle in milliseconds — cheaper and faster than any bank transfer.",
  },
];

const HowToUseBitcoin = () => {
  return (
    <section id="use-cases" className="bg-background py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Use Cases
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mt-2">
            How can I use my Bitcoin?
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Bitcoin is more than a savings tool — it's a foundation for
            financial freedom.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map(({ Icon, title, description }, i) => (
            <ScrollReveal
              key={title}
              delay={i * 100}
              className="bg-muted rounded-3xl p-6 flex flex-col gap-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  {description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToUseBitcoin;
