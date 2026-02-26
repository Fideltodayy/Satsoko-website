import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  {
    q: "What is Satsoko?",
    a: "Satsoko is a service that lets you buy Bitcoin (in satoshis) instantly using KES via M-Pesa. We connect your M-Pesa payment directly to your Lightning wallet — no exchange account or sign-up needed.",
  },
  {
    q: "How long does it take to receive my Bitcoin?",
    a: "Usually under 2 minutes. Once you confirm the M-Pesa STK push, our system automatically sends your sats to the Lightning address you provided.",
  },
  {
    q: "Do I need to create an account?",
    a: "No account is needed. Just enter the amount, your Lightning address, and your M-Pesa number. That's it — no sign-up, no KYC for standard amounts.",
  },
  {
    q: "What is the minimum amount I can buy?",
    a: "The minimum purchase is KES 100. There's no strict upper limit, though very large orders may require additional verification.",
  },
  {
    q: "What wallets are compatible with Satsoko?",
    a: "Any Lightning wallet that supports a Lightning address or invoice works — including Blink, Phoenix, Breez, Zeus, and many others. If your wallet can receive via Lightning, it works with Satsoko.",
  },
  {
    q: "What are the fees?",
    a: "Satsoko charges a small service fee on each transaction, clearly displayed before you confirm. Lightning network routing fees are minimal — often less than 1 sat.",
  },
  {
    q: "Is Satsoko safe to use?",
    a: "Yes. We never hold your Bitcoin — sats are sent directly to your wallet immediately after your payment clears. You remain in full control of your funds at all times.",
  },
  {
    q: "What if my M-Pesa goes through but I don't receive sats?",
    a: "This rarely happens, but if it does, contact our support team via the chat icon in the app or email us. We resolve all cases within 24 hours with a full refund or resend.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mt-2">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <AccordionItem
                value={`item-${i}`}
                className="bg-muted border-0 rounded-2xl px-6 data-[state=open]:bg-muted"
              >
                <AccordionTrigger className="font-semibold text-foreground text-sm text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </ScrollReveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
