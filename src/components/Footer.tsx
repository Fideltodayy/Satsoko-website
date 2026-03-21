import { Instagram, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="text-white/60"
      style={{ background: "hsl(36 15% 13%)" }}
    >
      <div className="max-w-6xl mx-auto px-6 xl:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/satsoko-logo.svg"
                alt="Satsoko"
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Buy Bitcoin instantly with KES via M-Pesa. Straight to your
              Lightning wallet. No sign-up required.
            </p>
            <div className="flex gap-4 mt-5 items-center flex-wrap">
              {/* X / Twitter */}
              <a href="https://x.com/saborishq" target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors font-bold text-[16px] leading-none" title="X">
                𝕏
              </a>
              {/* Instagram — update href to your handle */}
              <a href="https://instagram.com/satsoko" target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors" title="Instagram">
                <Instagram className="w-[18px] h-[18px]" />
              </a>
              {/* LinkedIn — update href to your page */}
              <a href="https://linkedin.com/company/satsoko" target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors" title="LinkedIn">
                <Linkedin className="w-[18px] h-[18px]" />
              </a>
              {/* Nostr — update href to your npub/profile */}
              <a href="#" target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors" title="Nostr">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm-1 4v2H9v2h2v6h2v-6h2v-2h-2V8h-2z"/>
                </svg>
              </a>
              {/* WhatsApp — update href to your wa.me link */}
              <a href="https://wa.me/254000000000" target="_blank" rel="noopener noreferrer"
                className="hover:text-white transition-colors" title="WhatsApp">
                <MessageCircle className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Buy Bitcoin
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Supported Wallets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Fees
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© 2026 Satsoko. All rights reserved.</p>
          <p>Built with ⚡ in Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
