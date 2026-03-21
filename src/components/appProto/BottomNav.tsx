import { Home, Clock, RefreshCw } from "lucide-react";

type Screen = "home" | "history" | "dca";

const tabs: { id: Screen; label: string; Icon: React.FC<{ className?: string }> }[] = [
  { id: "home", label: "Buy", Icon: ({ className }) => <Home className={className} /> },
  { id: "history", label: "History", Icon: ({ className }) => <Clock className={className} /> },
  { id: "dca", label: "Recurring", Icon: ({ className }) => <RefreshCw className={className} /> },
];

const BottomNav = ({
  active,
  onChange,
}: {
  active: Screen;
  onChange: (s: Screen) => void;
}) => (
  <div
    className="flex items-center justify-around border-t px-2 pt-2 pb-4"
    style={{ borderColor: "hsl(36 30% 88%)", background: "hsl(36 65% 96%)" }}
  >
    {tabs.map(({ id, label, Icon }) => {
      const isActive = active === id;
      return (
        <button
          key={id}
          onClick={() => onChange(id)}
          className="flex flex-col items-center gap-1 flex-1 py-1 transition-all"
        >
          <Icon
            className={`w-5 h-5 transition-colors ${
              isActive ? "text-primary" : "text-foreground/35"
            }`}
          />
          <span
            className={`text-[10px] font-semibold transition-colors ${
              isActive ? "text-primary" : "text-foreground/35"
            }`}
          >
            {label}
          </span>
        </button>
      );
    })}
  </div>
);

export default BottomNav;
export type { Screen };
