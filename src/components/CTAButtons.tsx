import { useState, useRef, useEffect } from "react";
import { Globe, Zap, ChevronDown } from "lucide-react";

const AppleIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76c.3.17.64.24.99.2l12.87-11.85-2.87-2.87L3.18 23.76zm16.4-13.3-3.14-1.96-2.93 2.7 2.93 2.93 3.16-1.83c.9-.52.9-1.83-.02-2.34zM2.09 1.02C1.76 1.36 1.6 1.86 1.6 2.5v19c0 .64.16 1.14.5 1.48l.08.07 10.64-10.64v-.25L2.17.95l-.08.07zm11.2 10.29L3.18.23c.35-.04.7.03 1 .2l10.95 6.35-2.84 2.83v.7z" />
  </svg>
);

const HuaweiIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.5c1.795 0 3.09 1.272 3.09 3.022 0 1.75-1.295 3.022-3.09 3.022S8.91 7.272 8.91 5.522C8.91 3.772 10.205 2.5 12 2.5zM5.5 8.228c1.682-.462 3.228.54 3.722 2.14.494 1.6-.26 3.39-1.82 4.13-1.56.74-3.39.17-4.13-1.39-.74-1.56-.004-3.42 2.228-4.88zm13 0c2.232 1.46 2.968 3.32 2.228 4.88-.74 1.56-2.57 2.13-4.13 1.39-1.56-.74-2.314-2.53-1.82-4.13.494-1.6 2.04-2.602 3.722-2.14zM8.46 15.11c1.54-.56 3.54-.56 5.08 0 1.54.56 2.68 1.81 2.96 3.38.28 1.57-.42 3.17-1.84 4.05-1.42.88-3.24.94-4.72.15a4.91 4.91 0 01-2.44-3.11c-.44-1.42-.04-2.95.96-4.47z" />
  </svg>
);

const AndroidIcon = () => (
  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.341A1.5 1.5 0 0116 16.82V19a1 1 0 01-2 0v-2h-4v2a1 1 0 01-2 0v-2.18A1.5 1.5 0 016.477 15.34V9.65a.5.5 0 01.5-.5h10.046a.5.5 0 01.5.5v5.69zM5 9.15a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm14 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM8.5 3.78l-.92-1.59a.27.27 0 10-.468.27l.94 1.63A5.97 5.97 0 006.15 8.15h11.7a5.97 5.97 0 00-1.902-4.07l.94-1.63a.27.27 0 10-.468-.27L15.5 3.78A5.95 5.95 0 0012 3c-1.23 0-2.37.37-3.5.78zm2.5 1.87a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1z" />
  </svg>
);

const INSTALL_OPTIONS = [
  { label: "App Store", Icon: AppleIcon },
  { label: "Google Play", Icon: GooglePlayIcon },
  { label: "App Gallery", Icon: HuaweiIcon },
  { label: "Get APK", Icon: AndroidIcon },
  { label: "Zapstore", Icon: () => <Zap className="w-[18px] h-[18px]" /> },
  { label: "Use Web App", Icon: () => <Globe className="w-[18px] h-[18px]" /> },
];

const CTAButtons = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center gap-3 px-8 h-[56px] rounded-full font-bold text-base transition-all hover:opacity-90 active:scale-95"
          style={{ background: "hsl(36 15% 16%)", color: "white" }}
        >
          Get the App
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>

        {open && (
          <div
            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-3xl overflow-hidden shadow-2xl z-50"
            style={{ background: "hsl(36 15% 14%)" }}
          >
            <div className="px-5 py-4 border-b border-white/10">
              <p className="text-white font-bold text-sm tracking-tight">Get Satsoko</p>
            </div>
            {INSTALL_OPTIONS.map(({ label, Icon }, i) => (
              <a
                key={label}
                href="#"
                className={`flex items-center justify-between px-5 py-4 text-white/80 hover:text-white hover:bg-white/8 transition-colors text-sm font-medium ${
                  i < INSTALL_OPTIONS.length - 1 ? "border-b border-white/[0.07]" : ""
                }`}
              >
                <span>{label}</span>
                <Icon />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CTAButtons;
