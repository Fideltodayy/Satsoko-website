import { Banknote, Zap, Smartphone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    number: "01",
    Icon: Banknote,
    title: "Enter Amount",
    description:
      "Type how much KES you want to spend. See exactly how many sats you'll receive at the live market rate — no surprises.",
  },
  {
    number: "02",
    Icon: Zap,
    title: "Add Lightning Address",
    description:
      "Paste your Lightning wallet address or scan a QR code. Bitcoin goes straight to your wallet — no middleman, no exchange account.",
  },
  {
    number: "03",
    Icon: Smartphone,
    title: "Pay via M-Pesa & Receive",
    description:
      "Enter your Safaricom number and confirm the STK push. Sats land in your wallet in seconds.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-muted py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mt-2">
            Buy Bitcoin in <span className="text-primary">3 steps</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            No complicated setup. No exchange accounts. Just KES in, sats out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map(({ number, Icon, title, description }, i) => (
            <ScrollReveal
              key={number}
              delay={i * 120}
              className="bg-background rounded-3xl p-7 flex flex-col gap-4"
            >
              <span className="text-6xl font-extrabold text-primary/15 leading-none select-none">
                {number}
              </span>
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg">{title}</h3>
                <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed">
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

export default HowItWorks;
