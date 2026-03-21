import { useState } from "react";
import { Zap, TrendingUp, Mail, ChevronRight } from "lucide-react";

/* ── Mock transaction data ───────────────────────────────────── */
const MOCK_TXS = [
  { id: 1, date: "Today, 09:41", kes: 1000, sats: 7845, method: "mpesa", address: "satoshi@blink.sv" },
  { id: 2, date: "Yesterday, 14:22", kes: 500, sats: 3921, method: "mpesa", address: "satoshi@blink.sv" },
  { id: 3, date: "Mon, 11:05", kes: 2000, sats: 15680, method: "airtel", address: "user@phoenix.wallet" },
  { id: 4, date: "Sun, 08:30", kes: 750, sats: 5882, method: "mpesa", address: "satoshi@blink.sv" },
  { id: 5, date: "Sat, 16:47", kes: 1500, sats: 11763, method: "mpesa", address: "satoshi@blink.sv" },
  { id: 6, date: "Fri, 10:00", kes: 500, sats: 3921, method: "mpesa", address: "satoshi@blink.sv" },
  { id: 7, date: "Thu, 19:14", kes: 3000, sats: 23526, method: "airtel", address: "user@phoenix.wallet" },
  { id: 8, date: "Wed, 12:33", kes: 1000, sats: 7845, method: "mpesa", address: "satoshi@blink.sv" },
  { id: 9, date: "Tue, 08:00", kes: 2000, sats: 15680, method: "mpesa", address: "satoshi@blink.sv" },
  { id: 10, date: "Mon, 17:50", kes: 500, sats: 3921, method: "mpesa", address: "satoshi@blink.sv" },
  { id: 11, date: "28 Feb, 09:10", kes: 1000, sats: 7845, method: "airtel", address: "user@phoenix.wallet" },
  { id: 12, date: "27 Feb, 14:00", kes: 1500, sats: 11763, method: "mpesa", address: "satoshi@blink.sv" },
  { id: 13, date: "26 Feb, 10:30", kes: 750, sats: 5882, method: "mpesa", address: "satoshi@blink.sv" },
  { id: 14, date: "25 Feb, 08:15", kes: 2000, sats: 15680, method: "mpesa", address: "satoshi@blink.sv" },
  { id: 15, date: "24 Feb, 11:00", kes: 500, sats: 3921, method: "airtel", address: "user@phoenix.wallet" },
];

const totalSats = MOCK_TXS.reduce((s, t) => s + t.sats, 0);
const totalKes = MOCK_TXS.reduce((s, t) => s + t.kes, 0);
const avgKesPerTx = Math.round(totalKes / MOCK_TXS.length);
const BTC_PRICE_KES = 12536160;
const totalBtcValue = ((totalSats / 1e8) * BTC_PRICE_KES).toFixed(0);

/* ── Mini bar chart data (weekly sats, last 7 weeks) ─────────── */
const CHART = [28000, 31000, 27000, 38000, 41000, 35000, totalSats];
const maxBar = Math.max(...CHART);

/* ── Main HistoryScreen ──────────────────────────────────────── */
const HistoryScreen = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-base font-extrabold text-foreground">Activity</h2>
        <p className="text-[11px] text-foreground/40 mt-0.5">Last 15 transactions</p>
      </div>

      {/* Stats summary */}
      <div
        className="rounded-2xl p-4 space-y-3"
        style={{ background: "hsl(36 25% 22%)" }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider">
              Total sats stacked
            </p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-xl font-extrabold text-white">
                {totalSats.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-white/40 font-medium uppercase tracking-wider">
              Value today
            </p>
            <p className="text-sm font-bold text-satsoko-green mt-0.5">
              KES {Number(totalBtcValue).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Mini chart */}
        <div>
          <p className="text-[9px] text-white/30 mb-1.5">Sats per week (last 7 weeks)</p>
          <div className="flex items-end gap-1 h-10">
            {CHART.map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                <div
                  className="w-full rounded-sm transition-all"
                  style={{
                    height: `${(v / maxBar) * 36}px`,
                    background:
                      i === CHART.length - 1
                        ? "hsl(33 93% 54%)"
                        : "hsl(33 93% 54% / 0.35)",
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[8px] text-white/20 mt-1">
            <span>7w ago</span>
            <span className="text-primary/60">This week</span>
          </div>
        </div>

        {/* Secondary stats */}
        <div className="grid grid-cols-3 gap-2 pt-1 border-t border-white/10">
          {[
            { label: "Transactions", value: MOCK_TXS.length },
            { label: "Total KES", value: `${(totalKes / 1000).toFixed(1)}k` },
            { label: "Avg buy", value: `KES ${avgKesPerTx}` },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-sm font-extrabold text-white">{value}</p>
              <p className="text-[9px] text-white/35 mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction list */}
      <div
        className="rounded-2xl overflow-hidden border"
        style={{ borderColor: "hsl(36 30% 88%)" }}
      >
        {MOCK_TXS.map((tx, i) => (
          <div
            key={tx.id}
            className="flex items-center gap-3 px-4 py-3 border-b last:border-0"
            style={{
              borderColor: "hsl(36 30% 88%)",
              background: i % 2 === 0 ? "white" : "hsl(36 55% 98%)",
            }}
          >
            {/* Icon */}
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "hsl(33 93% 54% / 0.12)" }}
            >
              <Zap className="w-3.5 h-3.5 text-primary" />
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-foreground truncate">
                {tx.address}
              </p>
              <p className="text-[10px] text-foreground/40">{tx.date}</p>
            </div>

            {/* Amounts */}
            <div className="text-right shrink-0">
              <div className="flex items-center gap-0.5 justify-end">
                <Zap className="w-2.5 h-2.5 text-primary" />
                <span className="text-[11px] font-extrabold text-foreground">
                  +{tx.sats.toLocaleString()}
                </span>
              </div>
              <p className="text-[10px] text-foreground/40">
                KES {tx.kes.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Full history request */}
      <div
        className="rounded-2xl p-4 border"
        style={{
          borderColor: "hsl(33 93% 54% / 0.2)",
          background: "hsl(33 93% 54% / 0.05)",
        }}
      >
        <div className="flex items-start gap-2.5 mb-3">
          <TrendingUp className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-[12px] font-bold text-foreground">Need your full history?</p>
            <p className="text-[10px] text-foreground/50 mt-0.5">
              Enter your email and we'll send a complete CSV export of all your transactions.
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-2">
            <p className="text-[12px] font-bold text-satsoko-green">✓ Request sent!</p>
            <p className="text-[10px] text-foreground/40 mt-0.5">Check your inbox shortly.</p>
          </div>
        ) : (
          <div className="flex gap-2">
            <div
              className="flex-1 flex items-center gap-2 border rounded-xl px-3 py-2.5"
              style={{ borderColor: "hsl(36 30% 88%)", background: "white" }}
            >
              <Mail className="w-3.5 h-3.5 text-foreground/30 shrink-0" />
              <input
                type="email"
                className="flex-1 bg-transparent text-xs font-medium text-foreground outline-none placeholder:text-foreground/30"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              onClick={() => email.includes("@") && setSubmitted(true)}
              disabled={!email.includes("@")}
              className="flex items-center gap-1 px-4 py-2.5 rounded-xl font-bold text-xs disabled:opacity-40 transition-all"
              style={{ background: "hsl(33 93% 54%)", color: "white" }}
            >
              Send <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryScreen;
