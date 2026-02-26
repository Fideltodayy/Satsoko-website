import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Wanjiku M.",
    handle: "@wanjiku_btc",
    avatar: "W",
    avatarColor: "#F7931A",
    text: "Just bought my first sats via Satsoko! KES 500 straight to my Phoenix wallet in under 2 minutes. This is what financial freedom looks like 🧡⚡",
    likes: 47,
    time: "2h",
  },
  {
    name: "Brian Otieno",
    handle: "@botieno_stacks",
    avatar: "B",
    avatarColor: "#7B3FE4",
    text: "The M-Pesa to Lightning flow is so smooth. I've been looking for this in Kenya for ages. Satsoko makes it dead simple. No KYC nonsense. 🙌",
    likes: 83,
    time: "5h",
  },
  {
    name: "Amina Hassan",
    handle: "@aminasats",
    avatar: "A",
    avatarColor: "#00B87A",
    text: "Sent my mum her weekly support in sats instead of M-Pesa. She got it instantly on her Blink wallet. The future is already here in East Africa ⚡🌍",
    likes: 129,
    time: "1d",
  },
  {
    name: "David Kamau",
    handle: "@kamau_hodl",
    avatar: "D",
    avatarColor: "#3B82F6",
    text: "Been stacking sats via Satsoko every Friday for 3 months. The UX is clean, fast, and the rates are fair. Best Bitcoin on-ramp in Kenya, full stop.",
    likes: 61,
    time: "2d",
  },
  {
    name: "Fatuma Ali",
    handle: "@fatuma_lightning",
    avatar: "F",
    avatarColor: "#EC4899",
    text: "As a small business owner, being able to top up sats via M-Pesa is a game changer. Satsoko is genuinely doing something special here 🙏",
    likes: 95,
    time: "3d",
  },
  {
    name: "James Mwangi",
    handle: "@jmwangi_21m",
    avatar: "J",
    avatarColor: "#F59E0B",
    text: "KES 1,000 → 7,845 sats in 90 seconds. I timed it. STK push confirmed, sats arrived. Absolutely wild. Orange pill Kenya 🟠",
    likes: 214,
    time: "4d",
  },
];

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    checkScroll();
  }, []);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="bg-muted py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Community
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mt-2">
              What people are saying
            </h2>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors disabled:opacity-25"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors disabled:opacity-25"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="hide-scrollbar flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory"
        >
          {testimonials.map((t) => (
            <div
              key={t.handle}
              className="min-w-[290px] max-w-[290px] snap-start bg-background rounded-3xl p-5 flex flex-col gap-3 border border-border/40"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ backgroundColor: t.avatarColor }}
                >
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground text-sm truncate">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.handle}</p>
                </div>
                <span className="text-foreground/60 font-bold text-sm shrink-0">𝕏</span>
              </div>

              <p className="text-sm text-foreground/75 leading-relaxed flex-1">{t.text}</p>

              <div className="flex items-center gap-1.5 text-muted-foreground text-xs pt-2 border-t border-border/40">
                <Heart className="w-3.5 h-3.5" />
                <span>{t.likes}</span>
                <span className="ml-auto">{t.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
