import { useState } from "react";
import { Zap, ChevronRight, Check, AlertCircle } from "lucide-react";

/* ── Constants ───────────────────────────────────────────────── */
const BTC_PRICE_USD = 96432;
const USD_TO_KES = 130;
const BTC_PRICE_KES = BTC_PRICE_USD * USD_TO_KES; // ~12,536,160

const satsFromKes = (kes: number) =>
  Math.round((kes / BTC_PRICE_KES) * 1e8);

const isLightningInvoice = (v: string) =>
  v.toLowerCase().startsWith("lnbc") ||
  v.toLowerCase().startsWith("lntb") ||
  v.toLowerCase().startsWith("lightning:");

const isLightningAddress = (v: string) =>
  /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);

const isLnurl = (v: string) =>
  v.trim().toLowerCase().startsWith("lnurl1");

/* ── Step indicator ───────────────────────────────────────────── */
const StepBadge = ({
  num,
  active,
  done,
}: {
  num: number;
  active: boolean;
  done: boolean;
}) => (
  <div
    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-300 ${
      done
        ? "bg-satsoko-green text-white"
        : active
        ? "bg-primary text-white"
        : "bg-foreground/10 text-foreground/40"
    }`}
  >
    {done ? <Check className="w-3.5 h-3.5" /> : num}
  </div>
);

/* ── Step wrapper (handles blur) ─────────────────────────────── */
const StepPanel = ({
  num,
  title,
  activeStep,
  children,
}: {
  num: number;
  title: string;
  activeStep: number;
  children: React.ReactNode;
}) => {
  const isActive = activeStep === num;
  const isDone = activeStep > num;
  const isAhead = activeStep < num;

  return (
    <div
      className="transition-all duration-400"
      style={{
        filter: isActive ? "none" : "blur(2.5px)",
        opacity: isActive ? 1 : isDone ? 0.45 : 0.35,
        pointerEvents: isActive ? "auto" : "none",
        transform: isActive ? "scale(1)" : "scale(0.985)",
      }}
    >
      {/* Step header row — always visible */}
      <div className="flex items-center gap-3 mb-3">
        <StepBadge num={num} active={isActive} done={isDone} />
        <span
          className={`text-sm font-bold transition-colors ${
            isActive ? "text-foreground" : "text-foreground/40"
          }`}
        >
          {title}
        </span>
        {isDone && (
          <span className="text-[10px] font-semibold text-satsoko-green ml-auto">
            Done
          </span>
        )}
      </div>

      {/* Step content */}
      <div
        className="overflow-hidden transition-all duration-400"
        style={{
          maxHeight: isActive ? "600px" : isDone ? "0px" : "44px",
        }}
      >
        {(isActive || isAhead) && (
          <div className="pt-1">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

/* ── Step 1: Lightning address / invoice / LNURL ─────────────── */
const Step1 = ({
  value,
  onChange,
  onNext,
}: {
  value: string;
  onChange: (v: string) => void;
  onNext: () => void;
}) => {
  const isInvoice = isLightningInvoice(value);
  const isAddress = isLightningAddress(value);
  const isLnurlValue = isLnurl(value);
  const isValid = isInvoice || isAddress || isLnurlValue;

  return (
    <div className="space-y-3">
      <label className="text-[11px] font-semibold text-foreground/50 uppercase tracking-wider">
        Paste Lightning address, LNURL, or invoice (BOLT 11) 
      </label>

      <div
        className={`flex items-center gap-2 border rounded-xl px-3 py-2.5 transition-colors ${
          isValid
            ? "border-satsoko-green bg-satsoko-green/5"
            : "border-border bg-background"
        }`}
      >
        <Zap
          className={`w-4 h-4 shrink-0 transition-colors ${
            isValid ? "text-satsoko-green" : "text-primary/50"
          }`}
        />
        <input
          className="flex-1 bg-transparent text-sm font-medium text-foreground outline-none placeholder:text-foreground/30"
          placeholder="satoshi@blink.sv · lnbc… · lnurl1…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
        />
        {isValid && <Check className="w-4 h-4 text-satsoko-green shrink-0" />}
      </div>

      {isInvoice && (
        <div className="flex items-center gap-1.5 text-[11px] text-primary font-semibold">
          <Zap className="w-3 h-3" />
          Invoice detected — amount pre-filled
        </div>
      )}
      {isAddress && (
        <div className="flex items-center gap-1.5 text-[11px] text-satsoko-green font-semibold">
          <Check className="w-3 h-3" />
          Valid Lightning address
        </div>
      )}
      {isLnurlValue && (
        <div className="flex items-center gap-1.5 text-[11px] text-satsoko-green font-semibold">
          <Zap className="w-3 h-3" />
          Valid LNURL — enter KES amount below
        </div>
      )}
      {value.length > 5 && !isValid && (
        <div className="flex items-center gap-1.5 text-[11px] text-destructive font-semibold">
          <AlertCircle className="w-3 h-3" />
          Not a valid Lightning address, LNURL, or invoice (BOLT 11)
        </div>
      )}

      <button
        onClick={onNext}
        disabled={!isValid}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        style={{ background: "hsl(33 93% 54%)", color: "white" }}
      >
        Continue <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

/* ── Step 2: Amount + payment method ─────────────────────────── */
const Step2 = ({
  address,
  amount,
  onAmountChange,
  paymentMethod,
  onMethodChange,
  invoiceAmount,
  onNext,
  onBack,
}: {
  address: string;
  amount: string;
  onAmountChange: (v: string) => void;
  paymentMethod: "mpesa" | "airtel";
  onMethodChange: (v: "mpesa" | "airtel") => void;
  invoiceAmount: number | null;
  onNext: () => void;
  onBack: () => void;
}) => {
  const kes = parseFloat(amount) || 0;
  const sats = satsFromKes(kes);
  const isFixed = invoiceAmount !== null;

  return (
    <div className="space-y-3.5">
      {/* To label */}
      <div className="flex items-center gap-2 text-[11px] text-foreground/50">
        <span className="font-semibold uppercase tracking-wider">To</span>
        <span className="font-medium text-foreground/70 truncate">{address}</span>
      </div>

      {/* Amount input */}
      <div>
        <label className="text-[11px] font-semibold text-foreground/50 uppercase tracking-wider">
          Amount
          {isFixed && (
            <span className="ml-2 text-primary normal-case font-normal">
              (pre-filled from invoice)
            </span>
          )}
        </label>
        <div
          className={`mt-1.5 flex items-center gap-2 border rounded-xl px-3 py-2.5 ${
            isFixed ? "opacity-60" : ""
          }`}
          style={{ borderColor: "hsl(36 30% 88%)", background: "hsl(36 55% 98%)" }}
        >
          <span className="text-base font-bold text-foreground/30">KES</span>
          <input
            type="number"
            className="flex-1 bg-transparent text-lg font-extrabold text-foreground outline-none"
            placeholder="0"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            readOnly={isFixed}
            min={100}
          />
        </div>
        {kes >= 100 && (
          <div className="mt-1.5 flex items-center justify-between text-[11px]">
            <span className="text-foreground/40">You receive</span>
            <div className="flex items-center gap-1 font-bold text-foreground">
              <Zap className="w-3 h-3 text-primary" />
              {sats.toLocaleString()} sats
            </div>
          </div>
        )}
        {kes > 0 && kes < 100 && (
          <p className="text-[11px] text-destructive mt-1">Minimum is KES 100</p>
        )}
      </div>

      {/* Payment method */}
      <div>
        <label className="text-[11px] font-semibold text-foreground/50 uppercase tracking-wider">
          Pay with
        </label>
        <div className="mt-1.5 grid grid-cols-2 gap-2">
          {[
            { id: "mpesa" as const, label: "M-Pesa", color: "hsl(33 93% 54%)", bg: "hsl(33 93% 54% / 0.08)" },
            { id: "airtel" as const, label: "Airtel Money", color: "hsl(36 25% 22%)", bg: "hsl(36 25% 22% / 0.08)" },
          ].map(({ id, label, color, bg }) => (
            <button
              key={id}
              onClick={() => onMethodChange(id)}
              className="flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-bold text-sm transition-all"
              style={{
                borderColor: paymentMethod === id ? color : "hsl(36 30% 88%)",
                background: paymentMethod === id ? bg : "white",
                color: paymentMethod === id ? color : "hsl(36 20% 12% / 0.5)",
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: color }}
              />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={onBack}
          className="flex-1 py-3 rounded-xl font-bold text-sm border transition-all text-foreground/60 hover:text-foreground"
          style={{ borderColor: "hsl(36 30% 88%)" }}
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={kes < 100}
          className="flex-[2] flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all disabled:opacity-40"
          style={{ background: "hsl(33 93% 54%)", color: "white" }}
        >
          Continue <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

/* ── Step 3: Confirm & pay ────────────────────────────────────── */
const Step3 = ({
  address,
  amount,
  paymentMethod,
  phone,
  onPhoneChange,
  onPay,
  onBack,
  loading,
}: {
  address: string;
  amount: string;
  paymentMethod: "mpesa" | "airtel";
  phone: string;
  onPhoneChange: (v: string) => void;
  onPay: () => void;
  onBack: () => void;
  loading: boolean;
}) => {
  const kes = parseFloat(amount) || 0;
  const sats = satsFromKes(kes);
  const methodLabel = paymentMethod === "mpesa" ? "M-Pesa" : "Airtel Money";
  const methodColor = paymentMethod === "mpesa" ? "hsl(33 93% 54%)" : "hsl(36 25% 22%)";

  const rows = [
    { label: "Send to", value: address, truncate: true },
    { label: "Amount", value: `KES ${Number(amount).toLocaleString()}` },
    { label: "You receive", value: `⚡ ${sats.toLocaleString()} sats` },
    { label: "Pay via", value: methodLabel, color: methodColor },
    { label: "Rate", value: `1 BTC ≈ KES ${BTC_PRICE_KES.toLocaleString()}` },
  ];

  return (
    <div className="space-y-3.5">
      {/* Summary */}
      <div
        className="rounded-xl overflow-hidden border"
        style={{ borderColor: "hsl(36 30% 88%)" }}
      >
        {rows.map(({ label, value, truncate, color }, i) => (
          <div
            key={label}
            className={`flex items-center justify-between px-3.5 py-2.5 text-sm ${
              i < rows.length - 1 ? "border-b" : ""
            }`}
            style={{ borderColor: "hsl(36 30% 88%)", background: i % 2 === 0 ? "hsl(36 55% 98%)" : "hsl(36 45% 96%)" }}
          >
            <span className="text-foreground/50 text-[11px] font-medium">{label}</span>
            <span
              className={`font-bold text-[11px] ${truncate ? "truncate max-w-[130px]" : ""}`}
              style={color ? { color } : {}}
            >
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Phone number */}
      <div>
        <label className="text-[11px] font-semibold text-foreground/50 uppercase tracking-wider">
          {methodLabel} number
        </label>
        <div
          className="mt-1.5 flex items-center gap-2 border rounded-xl px-3 py-2.5"
          style={{ borderColor: "hsl(36 30% 88%)", background: "hsl(36 55% 98%)" }}
        >
          <span className="text-sm font-bold text-foreground/40">🇰🇪 +254</span>
          <input
            type="tel"
            className="flex-1 bg-transparent text-sm font-semibold text-foreground outline-none placeholder:text-foreground/30"
            placeholder="7XX XXX XXX"
            value={phone}
            onChange={(e) => onPhoneChange(e.target.value)}
            maxLength={9}
          />
        </div>
      </div>

      <p className="text-[10px] text-foreground/40 leading-relaxed">
        An STK push will be sent to your phone. Confirm the prompt to complete
        the payment. Sats are sent immediately after confirmation.
      </p>

      <div className="flex gap-2">
        <button
          onClick={onBack}
          disabled={loading}
          className="flex-1 py-3 rounded-xl font-bold text-sm border transition-all text-foreground/60 hover:text-foreground disabled:opacity-40"
          style={{ borderColor: "hsl(36 30% 88%)" }}
        >
          Back
        </button>
        <button
          onClick={onPay}
          disabled={phone.length < 9 || loading}
          className="flex-[2] flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all disabled:opacity-40"
          style={{ background: "hsl(33 93% 54%)", color: "white" }}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
              Processing…
            </span>
          ) : (
            <>Pay {methodLabel} <Zap className="w-4 h-4" /></>
          )}
        </button>
      </div>
    </div>
  );
};

/* ── Main HomeScreen ─────────────────────────────────────────── */
const HomeScreen = ({ onSuccess }: { onSuccess: (data: TxData) => void }) => {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"mpesa" | "airtel">("mpesa");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  // If BOLT11 invoice, pre-fill amount (simulate decoding). LNURL and address require user input.
  const handleAddressChange = (v: string) => {
    setAddress(v);
    if (isLightningInvoice(v)) {
      setAmount("1000"); // simulated decoded amount
    } else if (!isLightningInvoice(v)) {
      setAmount("");
    }
  };

  const invoiceAmount = isLightningInvoice(address)
    ? parseFloat(amount) || null
    : null;

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess({
        address,
        kes: parseFloat(amount),
        sats: satsFromKes(parseFloat(amount)),
        method: paymentMethod,
        phone: `+254${phone}`,
        timestamp: new Date(),
      });
    }, 2200);
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="min-h-full flex flex-col px-4 py-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <img src="/satsoko-logo.svg" alt="Satsoko" className="h-7 w-auto object-contain" />
      </div>

      {/* Steps — fill remaining space and center vertically */}
      <div className="flex-1 flex flex-col justify-center py-6">
      <div className="space-y-3">
        <StepPanel num={1} title="Lightning address, invoice or LNURL" activeStep={step}>
          <Step1
            value={address}
            onChange={handleAddressChange}
            onNext={() => setStep(2)}
          />
        </StepPanel>

        <StepPanel num={2} title="Amount & payment method" activeStep={step}>
          <Step2
            address={address}
            amount={amount}
            onAmountChange={setAmount}
            paymentMethod={paymentMethod}
            onMethodChange={setPaymentMethod}
            invoiceAmount={invoiceAmount}
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        </StepPanel>

        <StepPanel num={3} title="Confirm & pay" activeStep={step}>
          <Step3
            address={address}
            amount={amount}
            paymentMethod={paymentMethod}
            phone={phone}
            onPhoneChange={setPhone}
            onPay={handlePay}
            onBack={() => setStep(2)}
            loading={loading}
          />
        </StepPanel>
      </div>
      </div>
      </div>
    </div>
  );
};

export interface TxData {
  address: string;
  kes: number;
  sats: number;
  method: "mpesa" | "airtel";
  phone: string;
  timestamp: Date;
}

export default HomeScreen;
