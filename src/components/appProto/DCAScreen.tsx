import { useState } from "react";
import { RefreshCw, Bell, Zap, Check, ChevronRight } from "lucide-react";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const TIMES = ["08:00", "09:00", "12:00", "15:00", "18:00", "20:00"];

const REMINDERS = [
  { id: 1, amount: 500, freq: "Weekly", day: "Mon", time: "09:00", method: "mpesa", active: true },
  { id: 2, amount: 1000, freq: "Monthly", day: "1st", time: "08:00", method: "mpesa", active: false },
];

const DCAScreen = () => {
  const [reminders, setReminders] = useState(REMINDERS);
  const [showForm, setShowForm] = useState(false);

  // New reminder state
  const [amount, setAmount] = useState("500");
  const [freq, setFreq] = useState<"Daily" | "Weekly" | "Monthly">("Weekly");
  const [day, setDay] = useState("Mon");
  const [time, setTime] = useState("09:00");
  const [method, setMethod] = useState<"mpesa" | "airtel">("mpesa");
  const [saved, setSaved] = useState(false);

  const toggle = (id: number) =>
    setReminders((r) =>
      r.map((rem) => (rem.id === id ? { ...rem, active: !rem.active } : rem))
    );

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => {
      setReminders((r) => [
        ...r,
        {
          id: Date.now(),
          amount: parseInt(amount),
          freq,
          day: freq === "Daily" ? "Every day" : day,
          time,
          method,
          active: true,
        },
      ]);
      setShowForm(false);
      setSaved(false);
    }, 900);
  };

  const methodColor = (m: string) => m === "mpesa" ? "hsl(33 93% 54%)" : "hsl(36 25% 22%)";

  return (
    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-extrabold text-foreground">Recurring buys</h2>
          <p className="text-[11px] text-foreground/40 mt-0.5">
            Dollar-Cost Average- stack sats on autopilot!
          </p>
        </div>
        <button
          onClick={() => { setShowForm(!showForm); setSaved(false); }}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl font-bold text-xs transition-all"
          style={{ background: "hsl(33 93% 54%)", color: "white" }}
        >
          + New
        </button>
      </div>

      {/* Tip banner */}
      <div
        className="rounded-2xl p-3.5 flex gap-3"
        style={{ background: "hsl(36 25% 22%)" }}
      >
        <Zap className="w-4 h-4 text-primary shrink-0 mt-0.5" />
        <div>
          <p className="text-[11px] font-bold text-white">Stack sats automatically</p>
          <p className="text-[10px] text-white/50 mt-0.5 leading-relaxed">
            Set a reminder and Satsoko will notify you at your chosen time. Tap to buy — M-Pesa STK push sent instantly.
          </p>
        </div>
      </div>

      {/* New reminder form */}
      {showForm && (
        <div
          className="rounded-2xl border p-4 space-y-4"
          style={{ borderColor: "hsl(33 93% 54% / 0.25)", background: "hsl(33 93% 54% / 0.04)" }}
        >
          <p className="text-sm font-extrabold text-foreground">New reminder</p>

          {/* Amount */}
          <div>
            <label className="text-[10px] font-semibold text-foreground/45 uppercase tracking-wider">
              Amount (KES)
            </label>
            <div
              className="mt-1 flex items-center border rounded-xl px-3 py-2.5"
              style={{ borderColor: "hsl(36 30% 88%)", background: "hsl(36 55% 98%)" }}
            >
              <span className="text-sm font-bold text-foreground/30 mr-2">KES</span>
              <input
                type="number"
                className="flex-1 bg-transparent text-base font-extrabold text-foreground outline-none"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                min={100}
              />
            </div>
            {parseInt(amount) >= 100 && (
              <p className="text-[10px] text-foreground/40 mt-1">
                ≈ {Math.round((parseInt(amount) / 12536160) * 1e8).toLocaleString()} sats at today's rate
              </p>
            )}
          </div>

          {/* Frequency */}
          <div>
            <label className="text-[10px] font-semibold text-foreground/45 uppercase tracking-wider">
              Frequency
            </label>
            <div className="mt-1 flex gap-2">
              {(["Daily", "Weekly", "Monthly"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFreq(f)}
                  className="flex-1 py-2 rounded-xl border text-xs font-bold transition-all"
                  style={{
                    borderColor: freq === f ? "hsl(33 93% 54%)" : "hsl(36 30% 88%)",
                    background: freq === f ? "hsl(33 93% 54% / 0.1)" : "hsl(36 55% 98%)",
                    color: freq === f ? "hsl(33 93% 54%)" : "hsl(36 20% 12% / 0.5)",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Day picker (weekly only) */}
          {freq === "Weekly" && (
            <div>
              <label className="text-[10px] font-semibold text-foreground/45 uppercase tracking-wider">
                Day
              </label>
              <div className="mt-1 flex gap-1">
                {DAYS.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDay(d)}
                    className="flex-1 py-2 rounded-lg text-[10px] font-bold transition-all"
                    style={{
                      background: day === d ? "hsl(33 93% 54%)" : "hsl(36 45% 93%)",
                      color: day === d ? "white" : "hsl(36 20% 12% / 0.5)",
                    }}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Time */}
          <div>
            <label className="text-[10px] font-semibold text-foreground/45 uppercase tracking-wider">
              Reminder time
            </label>
            <div className="mt-1 grid grid-cols-3 gap-1.5">
              {TIMES.map((t) => (
                <button
                  key={t}
                  onClick={() => setTime(t)}
                  className="py-2 rounded-xl text-xs font-bold border transition-all"
                  style={{
                    borderColor: time === t ? "hsl(33 93% 54%)" : "hsl(36 30% 88%)",
                    background: time === t ? "hsl(33 93% 54% / 0.1)" : "hsl(36 55% 98%)",
                    color: time === t ? "hsl(33 93% 54%)" : "hsl(36 20% 12% / 0.5)",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Payment method */}
          <div>
            <label className="text-[10px] font-semibold text-foreground/45 uppercase tracking-wider">
              Pay with
            </label>
            <div className="mt-1 grid grid-cols-2 gap-2">
              {([
                { id: "mpesa" as const, label: "M-Pesa", color: "hsl(33 93% 54%)", bg: "hsl(33 93% 54% / 0.08)" },
                { id: "airtel" as const, label: "Airtel Money", color: "hsl(36 25% 22%)", bg: "hsl(36 25% 22% / 0.08)" },
              ]).map(({ id, label, color, bg }) => (
                <button
                  key={id}
                  onClick={() => setMethod(id)}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl border-2 font-bold text-xs transition-all"
                  style={{
                    borderColor: method === id ? color : "hsl(36 30% 88%)",
                    background: method === id ? bg : "hsl(36 55% 98%)",
                    color: method === id ? color : "hsl(36 20% 12% / 0.5)",
                  }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: color }} />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleSave}
            disabled={parseInt(amount) < 100}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all disabled:opacity-40"
            style={{ background: "hsl(33 93% 54%)", color: "white" }}
          >
            {saved ? (
              <><Check className="w-4 h-4" /> Saved!</>
            ) : (
              <>Save reminder <Bell className="w-4 h-4" /></>
            )}
          </button>
        </div>
      )}

      {/* Existing reminders */}
      {reminders.length > 0 && (
        <div className="space-y-2">
          <p className="text-[11px] font-semibold text-foreground/40 uppercase tracking-wider">
            Your reminders
          </p>
          {reminders.map((rem) => (
            <div
              key={rem.id}
              className="rounded-2xl border p-4 flex items-center gap-3 transition-all"
              style={{
                borderColor: rem.active ? "hsl(33 93% 54% / 0.2)" : "hsl(36 30% 88%)",
                background: rem.active ? "hsl(33 93% 54% / 0.04)" : "hsl(36 45% 93% / 0.4)",
                opacity: rem.active ? 1 : 0.55,
              }}
            >
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0"
                style={{ background: rem.active ? "hsl(33 93% 54% / 0.12)" : "hsl(36 30% 88%)" }}
              >
                <RefreshCw className={`w-4 h-4 ${rem.active ? "text-primary" : "text-foreground/30"}`} />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-extrabold text-foreground">
                  KES {rem.amount.toLocaleString()}
                  <span className="font-normal text-foreground/40 ml-1.5">
                    {rem.freq} · {rem.day} · {rem.time}
                  </span>
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: methodColor(rem.method) }}
                  />
                  <span
                    className="text-[10px] font-semibold"
                    style={{ color: methodColor(rem.method) }}
                  >
                    {rem.method === "mpesa" ? "M-Pesa" : "Airtel Money"}
                  </span>
                </div>
              </div>

              {/* Toggle */}
              <button
                onClick={() => toggle(rem.id)}
                className="w-11 h-6 rounded-full relative transition-all duration-300 shrink-0"
                style={{
                  background: rem.active ? "hsl(33 93% 54%)" : "hsl(36 30% 80%)",
                }}
              >
                <span
                  className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-all duration-300"
                  style={{ left: rem.active ? "calc(100% - 22px)" : "2px" }}
                />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* How it works note */}
      <div
        className="rounded-2xl p-3.5 border"
        style={{ borderColor: "hsl(36 30% 88%)", background: "hsl(36 55% 98%)" }}
      >
        <p className="text-[10px] font-semibold text-foreground/40 uppercase tracking-wider mb-2">
          How reminders work
        </p>
        {[
          "You receive a push notification at your set time",
          "Tap the notification to open Satsoko pre-filled",
          "Confirm the M-Pesa STK push",
          "Sats land in your wallet instantly ⚡",
        ].map((step, i) => (
          <div key={i} className="flex items-start gap-2 mb-1.5">
            <span className="text-[10px] font-extrabold text-primary shrink-0">
              {i + 1}.
            </span>
            <p className="text-[10px] text-foreground/50 leading-relaxed">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DCAScreen;
