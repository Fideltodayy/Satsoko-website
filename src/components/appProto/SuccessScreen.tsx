import { useState, useEffect } from "react";
import { Zap, Download, Share2, RotateCcw } from "lucide-react";
import type { TxData } from "./HomeScreen";

/* ── Confetti particle ───────────────────────────────────────── */
const COLORS = ["#F7931A", "#FFD580", "#463b2a", "#4CAF50", "#fff", "#FFB347"];

const Confetti = () => {
  const pieces = Array.from({ length: 32 }, (_, i) => ({
    id: i,
    color: COLORS[i % COLORS.length],
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 1.2}s`,
    duration: `${1.6 + Math.random() * 1.2}s`,
    size: `${5 + Math.random() * 6}px`,
    rotate: `${Math.random() * 720}deg`,
    shape: Math.random() > 0.5 ? "circle" : "rect",
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute top-0 animate-confetti-fall"
          style={{
            left: p.left,
            width: p.size,
            height: p.shape === "circle" ? p.size : `${parseFloat(p.size) * 0.6}px`,
            background: p.color,
            borderRadius: p.shape === "circle" ? "50%" : "2px",
            animationDelay: p.delay,
            animationDuration: p.duration,
            animationFillMode: "both",
          }}
        />
      ))}
    </div>
  );
};

/* ── Receipt ─────────────────────────────────────────────────── */
const Receipt = ({ tx }: { tx: TxData }) => {
  const methodLabel = tx.method === "mpesa" ? "M-Pesa" : "Airtel Money";
  const txId = `SKO-${Date.now().toString(36).toUpperCase().slice(-8)}`;
  const dateStr = tx.timestamp.toLocaleString("en-KE", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div
      id="receipt"
      className="mx-4 rounded-3xl overflow-hidden border"
      style={{ borderColor: "hsl(36 30% 88%)", background: "white" }}
    >
      {/* Receipt header */}
      <div
        className="px-5 py-4 text-center"
        style={{ background: "hsl(33 93% 54%)" }}
      >
        <img
          src="/satsoko-logo.svg"
          alt="Satsoko"
          className="h-6 w-auto object-contain mx-auto mb-1 brightness-0 invert"
        />
        <p className="text-white/80 text-[10px] font-medium">Transaction Receipt</p>
      </div>

      {/* Sats received — big */}
      <div className="text-center py-4 border-b" style={{ borderColor: "hsl(36 30% 88%)" }}>
        <div className="flex items-center justify-center gap-1.5">
          <Zap className="w-5 h-5 text-primary" />
          <span className="text-2xl font-extrabold text-foreground">
            {tx.sats.toLocaleString()}
          </span>
        </div>
        <p className="text-[11px] text-foreground/40 mt-0.5 font-medium">satoshis received</p>
      </div>

      {/* Details */}
      {[
        { label: "Paid", value: `KES ${tx.kes.toLocaleString()}` },
        { label: "Via", value: methodLabel },
        { label: "To wallet", value: tx.address, truncate: true },
        { label: "Phone", value: tx.phone },
        { label: "Date", value: dateStr },
        { label: "TX ID", value: txId, mono: true },
      ].map(({ label, value, truncate, mono }, i) => (
        <div
          key={label}
          className="flex items-center justify-between px-5 py-2.5 text-xs border-b last:border-0"
          style={{
            borderColor: "hsl(36 30% 88%)",
            background: i % 2 === 0 ? "white" : "hsl(36 55% 98%)",
          }}
        >
          <span className="text-foreground/45 font-medium">{label}</span>
          <span
            className={`font-bold text-foreground ${truncate ? "truncate max-w-[140px]" : ""} ${mono ? "font-mono text-[10px]" : ""}`}
          >
            {value}
          </span>
        </div>
      ))}

      {/* Footer */}
      <div className="px-5 py-3 text-center">
        <p className="text-[10px] text-foreground/30">
          Powered by Satsoko · Built with ⚡ in Nairobi
        </p>
      </div>
    </div>
  );
};

/* ── Main SuccessScreen ──────────────────────────────────────── */
const SuccessScreen = ({
  tx,
  onReset,
}: {
  tx: TxData;
  onReset: () => void;
}) => {
  const [showReceipt, setShowReceipt] = useState(false);
  const [logoScale, setLogoScale] = useState(0);

  useEffect(() => {
    // Animate logo in
    const t = setTimeout(() => setLogoScale(1), 100);
    return () => clearTimeout(t);
  }, []);

  const handleDownload = () => {
    // In a real app this would use html2canvas / a PDF lib
    // For prototype: trigger browser print dialog scoped to receipt
    window.print();
  };

  return (
    <div className="flex-1 overflow-y-auto relative">
      <Confetti />

      <div className="relative px-4 pt-6 pb-4 flex flex-col items-center text-center gap-4">
        {/* Animated logo with glow ring */}
        <div className="relative flex items-center justify-center">
          {/* Pulsing glow rings */}
          <div
            className="absolute w-32 h-32 rounded-full animate-ping"
            style={{ background: "hsl(33 93% 54% / 0.12)", animationDuration: "2s" }}
          />
          <div
            className="absolute w-24 h-24 rounded-full animate-ping"
            style={{ background: "hsl(33 93% 54% / 0.18)", animationDuration: "2s", animationDelay: "0.3s" }}
          />

          {/* Logo container */}
          <div
            className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-all duration-700"
            style={{
              background: "linear-gradient(135deg, hsl(33 93% 58%), hsl(33 93% 46%))",
              transform: `scale(${logoScale})`,
              boxShadow: logoScale === 1
                ? "0 0 40px hsl(33 93% 54% / 0.5), 0 8px 32px rgba(0,0,0,0.15)"
                : "none",
            }}
          >
            <img
              src="/satsoko-logo.svg"
              alt="Satsoko"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <h2 className="text-2xl font-extrabold text-foreground tracking-tight">
            Sats stacked! 🎉
          </h2>
          <p className="text-foreground/50 text-sm mt-1">
            You just bought bitcoin in under 2 minutes
          </p>
        </div>

        {/* Sats amount highlight */}
        <div
          className="flex items-center gap-2 px-6 py-3 rounded-2xl"
          style={{ background: "hsl(33 93% 54% / 0.1)", border: "1px solid hsl(33 93% 54% / 0.2)" }}
        >
          <Zap className="w-5 h-5 text-primary" />
          <span className="text-2xl font-extrabold text-primary">
            +{tx.sats.toLocaleString()}
          </span>
          <span className="text-sm font-semibold text-foreground/50">sats</span>
        </div>

        <p className="text-[11px] text-foreground/40">
          KES {tx.kes.toLocaleString()} → {tx.address}
        </p>

        {/* Action buttons */}
        <div className="w-full flex gap-2.5 mt-1">
          <button
            onClick={() => setShowReceipt(!showReceipt)}
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl border font-bold text-sm transition-all hover:bg-foreground/5"
            style={{ borderColor: "hsl(36 30% 88%)", color: "hsl(36 20% 12%)" }}
          >
            <Download className="w-4 h-4" />
            Receipt
          </button>
          <button
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-2xl font-bold text-sm transition-all hover:opacity-90"
            style={{ background: "hsl(33 93% 54%)", color: "white" }}
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "I just stacked sats with Satsoko!",
                  text: `Just bought ${tx.sats.toLocaleString()} sats via M-Pesa using Satsoko. No KYC, no sign-up, sats in under 2 minutes! ⚡`,
                  url: "https://satsoko.com",
                });
              }
            }}
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>

        {/* Receipt */}
        {showReceipt && (
          <div className="w-full">
            <Receipt tx={tx} />
            <button
              onClick={handleDownload}
              className="w-full mt-3 flex items-center justify-center gap-2 py-3 rounded-2xl border font-bold text-sm"
              style={{ borderColor: "hsl(36 30% 88%)", color: "hsl(36 20% 12%)" }}
            >
              <Download className="w-4 h-4" />
              Download / Print receipt
            </button>
          </div>
        )}

        {/* Buy again */}
        <button
          onClick={onReset}
          className="flex items-center gap-2 text-sm font-semibold text-foreground/40 hover:text-foreground transition-colors mt-2"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Buy again
        </button>
      </div>
    </div>
  );
};

export default SuccessScreen;
