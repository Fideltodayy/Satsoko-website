import { Bitcoin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
          <Bitcoin className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold tracking-tight text-foreground">satsoko</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Buy Bitcoin</a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
