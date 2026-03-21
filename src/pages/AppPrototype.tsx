import { useState } from "react";
import HomeScreen, { type TxData } from "@/components/appProto/HomeScreen";
import SuccessScreen from "@/components/appProto/SuccessScreen";
import HistoryScreen from "@/components/appProto/HistoryScreen";
import DCAScreen from "@/components/appProto/DCAScreen";
import BottomNav, { type Screen } from "@/components/appProto/BottomNav";

/* ── Status bar ──────────────────────────────────────────────── */
const StatusBar = () => (
  <div className="flex items-center justify-between px-5 py-2 shrink-0">
    <span className="text-[11px] font-semibold text-foreground">9:41</span>
    <div className="flex items-center gap-1.5">
      {/* Signal */}
      <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor" className="text-foreground">
        <rect x="0" y="5" width="2.5" height="5" rx="0.5" opacity="0.3" />
        <rect x="3.5" y="3" width="2.5" height="7" rx="0.5" opacity="0.5" />
        <rect x="7" y="1" width="2.5" height="9" rx="0.5" opacity="0.7" />
        <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" />
      </svg>
      {/* Wifi */}
      <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor" className="text-foreground">
        <path d="M7 8.5a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z" />
        <path d="M4.3 6.2a3.8 3.8 0 015.4 0" opacity="0.6" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" />
        <path d="M1.8 3.8a7 7 0 0110.4 0" opacity="0.35" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" />
      </svg>
      {/* Battery */}
      <div className="w-[22px] h-[11px] border border-foreground/40 rounded-[3px] relative">
        <div className="absolute inset-[2px] right-[3px] bg-satsoko-green rounded-[1.5px]" style={{ right: "5px" }} />
        <div className="absolute -right-[3px] top-[3px] w-[1.5px] h-[5px] bg-foreground/40 rounded-r-full" />
      </div>
    </div>
  </div>
);

/* ── Dynamic Island ──────────────────────────────────────────── */
const DynamicIsland = () => (
  <div className="flex justify-center pt-3 pb-1 shrink-0">
    <div className="w-[95px] h-[26px] rounded-full bg-black" />
  </div>
);

/* ── AppPrototype page ───────────────────────────────────────── */
const AppPrototype = () => {
  const [screen, setScreen] = useState<Screen>("home");
  const [successData, setSuccessData] = useState<TxData | null>(null);

  const handleSuccess = (data: TxData) => {
    setSuccessData(data);
  };

  const handleReset = () => {
    setSuccessData(null);
    setScreen("home");
  };

  const showSuccess = screen === "home" && successData !== null;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8"
      style={{
        background: "linear-gradient(135deg, hsl(36 65% 92%) 0%, hsl(33 60% 90%) 50%, hsl(36 55% 93%) 100%)",
      }}
    >
      {/* Label above phone */}
      <div className="mb-4 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-foreground/40 bg-white/50 backdrop-blur-sm border border-foreground/10 rounded-full px-4 py-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-satsoko-green animate-pulse" />
          Satsoko App — UI Prototype
        </div>
      </div>

      {/* Phone frame */}
      <div
        className="relative w-[375px] max-w-full"
        style={{
          filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.22)) drop-shadow(0 16px 32px rgba(0,0,0,0.14))",
        }}
      >
        {/* Outer bezel */}
        <div
          className="rounded-[52px] p-[3px]"
          style={{
            background: "linear-gradient(145deg, hsl(220 12% 22%), hsl(220 8% 10%))",
          }}
        >
          {/* Inner bezel */}
          <div
            className="rounded-[50px] p-[10px]"
            style={{
              background: "linear-gradient(180deg, hsl(220 10% 14%), hsl(220 12% 9%))",
            }}
          >
            {/* Screen */}
            <div
              className="rounded-[40px] overflow-hidden flex flex-col"
              style={{
                background: "hsl(36 65% 96%)",
                height: "780px",
              }}
            >
              <DynamicIsland />
              <StatusBar />

              {/* Screen content */}
              {showSuccess ? (
                <SuccessScreen tx={successData!} onReset={handleReset} />
              ) : (
                <>
                  {screen === "home" && (
                    <HomeScreen onSuccess={handleSuccess} />
                  )}
                  {screen === "history" && <HistoryScreen />}
                  {screen === "dca" && <DCAScreen />}

                  <BottomNav active={screen} onChange={setScreen} />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Side buttons */}
        {[
          { side: "left", top: "110px", h: "28px" },
          { side: "left", top: "155px", h: "54px" },
          { side: "left", top: "220px", h: "54px" },
          { side: "right", top: "150px", h: "68px" },
        ].map(({ side, top, h }, i) => (
          <div
            key={i}
            className={`absolute w-[3px] rounded-${side === "left" ? "l" : "r"}-sm`}
            style={{
              [side]: "-2px",
              top,
              height: h,
              background: "hsl(220 10% 18%)",
            }}
          />
        ))}
      </div>

      {/* Links below phone */}
      <div className="mt-6 flex items-center gap-6 text-xs font-medium text-foreground/40">
        <a href="/" className="hover:text-foreground transition-colors">← Back to website</a>
        <span>·</span>
        <span>Share this prototype</span>
      </div>
    </div>
  );
};

export default AppPrototype;
