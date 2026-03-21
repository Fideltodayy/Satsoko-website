const Navbar = () => {
  return (
    <nav className="w-full py-3 px-6 md:px-10 xl:px-16 flex items-center justify-between max-w-[1600px] mx-auto">
      <div className="flex items-center gap-2">
        <img
          src="/satsoko-logo.svg"
          alt="Satsoko"
          className="h-16 md:h-20 w-auto object-contain"
        />
      </div>
      <div className="hidden md:flex items-center gap-8 xl:gap-12">
        <a href="#how-it-works" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">How it works</a>
        <a href="#wallets" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">Wallets</a>
        <a href="#faq" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
      </div>
    </nav>
  );
};

export default Navbar;
