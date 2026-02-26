import { Zap, MessageCircle } from "lucide-react";

const PhoneMockup = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute w-[340px] h-[500px] bg-primary/8 blur-[100px] rounded-full" />

      {/* iPhone shell */}
      <div className="relative w-[290px] md:w-[320px]">
        {/* Outer bezel */}
        <div
          className="relative rounded-[50px] p-[3px]"
          style={{
            background:
              "linear-gradient(145deg, hsl(220 15% 25%), hsl(220 10% 12%))",
            boxShadow:
              "0 40px 80px -20px rgba(0,0,0,0.45), 0 20px 40px -10px rgba(0,0,0,0.3), inset 0 1px 0 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Inner bezel */}
          <div
            className="rounded-[48px] p-[10px]"
            style={{
              background:
                "linear-gradient(180deg, hsl(220 12% 16%), hsl(220 15% 10%))",
            }}
          >
            {/* Screen */}
            <div className="bg-background rounded-[38px] overflow-hidden relative">
              {/* Dynamic Island */}
              <div className="flex justify-center pt-3 pb-1">
                <div
                  className="w-[100px] h-[28px] rounded-full"
                  style={{ background: "hsl(220 15% 10%)" }}
                />
              </div>

              {/* Status bar */}
              <div className="flex items-center justify-between px-7 py-1.5">
                <span className="text-[11px] font-semibold text-foreground">9:41</span>
                <div className="flex items-center gap-1.5">
                  <svg width="16" height="11" viewBox="0 0 16 11" fill="currentColor" className="text-foreground">
                    <rect x="0" y="4" width="3" height="7" rx="1" opacity="0.3"/>
                    <rect x="4.5" y="2.5" width="3" height="8.5" rx="1" opacity="0.5"/>
                    <rect x="9" y="1" width="3" height="10" rx="1" opacity="0.7"/>
                    <rect x="13.5" y="0" width="3" height="11" rx="1"/>
                  </svg>
                  <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor" className="text-foreground">
                    <path d="M7.5 3.5C9.1 3.5 10.5 4.1 11.6 5.1L12.8 3.9C11.4 2.5 9.5 1.7 7.5 1.7S3.6 2.5 2.2 3.9L3.4 5.1C4.5 4.1 5.9 3.5 7.5 3.5Z" opacity="0.5"/>
                    <path d="M7.5 6.3C8.5 6.3 9.4 6.7 10 7.3L11.2 6.1C10.2 5.1 8.9 4.5 7.5 4.5S4.8 5.1 3.8 6.1L5 7.3C5.6 6.7 6.5 6.3 7.5 6.3Z" opacity="0.7"/>
                    <circle cx="7.5" cy="9.5" r="1.5"/>
                  </svg>
                  <div className="w-[22px] h-[11px] border border-foreground/40 rounded-[3px] relative ml-0.5">
                    <div className="absolute inset-[2px] right-[3px] bg-satsoko-green rounded-[1.5px]" />
                    <div className="absolute -right-[3px] top-[3px] w-[1.5px] h-[5px] bg-foreground/40 rounded-r-full" />
                  </div>
                </div>
              </div>

              {/* App content */}
              <div className="px-5 pb-7 pt-3 space-y-3.5">
                {/* Logo */}
                <div className="flex items-center gap-1.5 justify-center">
                  <img
                    src="/icons/satsoko.png"
                    alt="Satsoko"
                    className="h-7 w-auto object-contain"
                  />
                </div>

                {/* Heading */}
                <p className="text-center text-[13px] font-semibold text-foreground leading-snug">
                  Buy <span className="text-primary">bitcoin</span> instantly<br />via M-Pesa
                </p>

                {/* BTC Price */}
                <div className="bg-muted rounded-2xl px-3.5 py-2.5 flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground">1 BTC ≈</span>
                  <span className="text-[12px] font-bold text-satsoko-green">$96,432.00</span>
                </div>

                {/* Amount input */}
                <div className="space-y-1.5">
                  <label className="text-[10px] text-muted-foreground font-medium pl-1">Amount</label>
                  <div className="border border-border rounded-2xl px-3.5 py-3 flex items-center justify-between">
                    <span className="text-[15px] font-semibold text-foreground">1,000</span>
                    <div className="flex items-center gap-1.5 bg-muted px-2.5 py-1.5 rounded-xl">
                      <span className="text-[12px]">🇰🇪</span>
                      <span className="text-[11px] font-bold text-foreground">KES</span>
                    </div>
                  </div>
                </div>

                {/* Satoshis */}
                <div className="bg-muted rounded-2xl px-3.5 py-2.5 flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground">You receive</span>
                  <div className="flex items-center gap-1">
                    <Zap className="w-3 h-3 text-primary" />
                    <span className="text-[12px] font-bold text-foreground">7,845 sats</span>
                  </div>
                </div>

                {/* Lightning address */}
                <div className="space-y-1.5">
                  <label className="text-[10px] text-muted-foreground font-medium pl-1">Lightning wallet address</label>
                  <div className="border border-border rounded-2xl px-3.5 py-3">
                    <span className="text-[11px] text-muted-foreground">ln1qw5...x8r4z</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-primary text-primary-foreground text-[13px] font-bold py-3.5 rounded-2xl mt-1">
                  Proceed to payment
                </button>

                {/* Social icons */}
                <div className="flex items-center justify-center gap-5 pt-2">
                  <MessageCircle className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors" />
                  <span className="text-muted-foreground text-sm font-bold hover:text-foreground transition-colors cursor-pointer">𝕏</span>
                </div>
              </div>

              {/* Home indicator */}
              <div className="flex justify-center pb-2">
                <div className="w-[120px] h-[4px] rounded-full bg-foreground/15" />
              </div>
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div
          className="absolute left-[-2px] top-[120px] w-[3px] h-[28px] rounded-l-sm"
          style={{ background: "hsl(220 12% 20%)" }}
        />
        <div
          className="absolute left-[-2px] top-[160px] w-[3px] h-[50px] rounded-l-sm"
          style={{ background: "hsl(220 12% 20%)" }}
        />
        <div
          className="absolute left-[-2px] top-[220px] w-[3px] h-[50px] rounded-l-sm"
          style={{ background: "hsl(220 12% 20%)" }}
        />
        <div
          className="absolute right-[-2px] top-[155px] w-[3px] h-[65px] rounded-r-sm"
          style={{ background: "hsl(220 12% 20%)" }}
        />
      </div>
    </div>
  );
};

export default PhoneMockup;
