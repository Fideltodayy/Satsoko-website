const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img
          src="/icons/satsoko.png"
          alt="Satsoko"
          className="h-24 mt-0 pt-0 w-auto object-contain"
        />
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
