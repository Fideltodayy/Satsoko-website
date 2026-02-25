import { Shield, Globe, Lock, TrendingUp } from "lucide-react";

const facts = [
  {
    Icon: Shield,
    label: "21 Million",
    sub: "Fixed supply, forever",
  },
  {
    Icon: Globe,
    label: "Borderless",
    sub: "Send anywhere on earth",
  },
  {
    Icon: Lock,
    label: "Decentralized",
    sub: "No bank controls it",
  },
  {
    Icon: TrendingUp,
    label: "Since 2009",
    sub: "The original cryptocurrency",
  },
];

const WhatIsBitcoin = () => {
  return (
    <section className="bg-muted py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            Bitcoin 101
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mt-2">
            What is Bitcoin?
          </h2>
        </div>

        <div className="max-w-2xl mx-auto text-center mb-14 space-y-4">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Bitcoin is digital money that no government, bank, or company
            controls. It runs on a global network of computers — making it
            borderless, censorship-resistant, and available to anyone with a
            phone.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Unlike the Kenyan Shilling, which can be printed endlessly and lose
            value over time, Bitcoin has a{" "}
            <span className="text-foreground font-semibold">
              fixed supply of 21 million coins
            </span>
            . This scarcity is what gives it lasting value — and why people
            across the world are saving in it.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {facts.map(({ Icon, label, sub }) => (
            <div
              key={label}
              className="bg-background rounded-3xl p-5 text-center flex flex-col items-center gap-3"
            >
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">{label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsBitcoin;
