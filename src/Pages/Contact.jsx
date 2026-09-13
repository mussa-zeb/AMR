import React, { useState } from "react";
import {
  Search,
  Heart,
  Moon,
  UserRound,
  ShoppingBag,
  Menu,
  X,
  Mail,
  Phone,
  MessageSquare,
  Clock3,
  MapPin,
  ChevronDown,
  ArrowRight,
  Send,
} from "lucide-react";
import Navbar from "../Components/Navbar";

/*
  Aamar Al Watheq — Contact Page

  IMPORTANT:
  Replace the clearly marked contact values below with your exact
  Import/Export, Auto Workshop and Real Estate details.
  The previous project context did not contain the exact phone/email/
  address values, so they are intentionally not invented.
*/

const companyContacts = [
  {
    key: "import-export",
    name: "Import & Export",
    short: "Import / Export",
    email: "your-import-export@email.com",
    phone: "+92 XXX XXXXXXX",
    location: "Your Import & Export office address",
    hours: "Mon–Sat, 9:00–18:00",
    description: "International trading, import, export and logistics support.",
  },
  {
    key: "auto-workshop",
    name: "Auto Workshop",
    short: "Auto Workshop",
    email: "your-workshop@email.com",
    phone: "+92 XXX XXXXXXX",
    location: "Your Auto Workshop address",
    hours: "Mon–Sat, 9:00–18:00",
    description: "Professional vehicle repair, denting, painting and maintenance.",
  },
  {
    key: "real-estate",
    name: "Real Estate",
    short: "Real Estate",
    email: "your-realestate@email.com",
    phone: "+92 XXX XXXXXXX",
    location: "Your Real Estate office address",
    hours: "Mon–Sat, 9:00–18:00",
    description: "Property buying, selling, rental and real-estate consultation.",
  },
];

const navItems = ["Home", "Shop", "Collections", "About", "Contact"];

function ContactCard({ icon: Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-black/[0.08] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.025)]">
      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.08] bg-[#fafafa]">
        <Icon size={17} strokeWidth={1.7} />
      </div>
      <h3 className="text-[13px] font-medium text-black">{title}</h3>
      <div className="mt-1 text-[13px] leading-5 text-[#222]">{children}</div>
    </div>
  );
}

export default function Contact() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [topic, setTopic] = useState("General inquiry");
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    company: "Import & Export",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#101010] antialiased">

<Navbar/>

      {/* Hero */}
      <section className="border-b border-black/[0.08] bg-[#f8f8f8]">
        <div className="mx-auto max-w-[1100px] px-5 pb-[62px] pt-[57px] md:px-8 md:pb-[68px]">
          <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.08em] text-[#777]">
            Contact
          </p>
          <h1 className="max-w-[700px] text-[38px] font-medium leading-[1.04] tracking-[-0.045em] md:text-[46px]">
            We are here to help.
          </h1>
          <p className="mt-3 max-w-[560px] text-[14px] leading-6 text-[#666]">
            Questions about a product, an order, or just want to talk? Reach out — real humans,
            fast answers.
          </p>
        </div>
      </section>

      {/* Main contact area */}
      <main className="mx-auto max-w-[1100px] px-5 py-[45px] md:px-8 md:py-[52px]">
        <div className="grid items-start gap-[22px] md:grid-cols-[216px_minmax(0,1fr)] lg:grid-cols-[216px_1fr]">
          {/* Sidebar */}
          <aside className="space-y-3">
            <ContactCard icon={Mail} title="Email us">
              <a className="font-medium hover:underline" href={`mailto:${companyContacts[0].email}`}>
                {companyContacts[0].email}
              </a>
              <p className="text-[10px] text-[#777]">We reply within 24 hours.</p>
            </ContactCard>

            <ContactCard icon={Phone} title="Call us">
              <a className="font-medium hover:underline" href={`tel:${companyContacts[0].phone}`}>
                {companyContacts[0].phone}
              </a>
              <p className="text-[10px] text-[#777]">Mon–Sat, 9am–6pm.</p>
            </ContactCard>

            <ContactCard icon={MessageSquare} title="Live chat">
              <p className="font-medium">Available in app</p>
              <p className="text-[10px] text-[#777]">Average response: 2 minutes.</p>
            </ContactCard>

            <div className="rounded-2xl border border-black/[0.08] bg-[#fafafa] p-5">
              <div className="mb-3 flex items-center gap-2">
                <Clock3 size={14} strokeWidth={1.5} />
                <h3 className="text-[12px] font-medium">Support hours</h3>
              </div>
              <div className="space-y-2 text-[10px] text-[#666]">
                <div className="flex justify-between gap-4">
                  <span>Mon–Fri</span>
                  <span className="font-medium text-black">9:00 – 18:00 CET</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Saturday</span>
                  <span className="font-medium text-black">10:00 – 16:00 CET</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span>Sunday</span>
                  <span className="font-medium text-black">Closed</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-black/[0.08] bg-white p-5">
              <div className="mb-3 flex items-center gap-2">
                <MapPin size={14} strokeWidth={1.5} />
                <h3 className="text-[12px] font-medium">Visit the showroom</h3>
              </div>
              <p className="text-[10px] leading-4 text-[#666]">
                {companyContacts[0].location}
              </p>
            </div>
          </aside>

          {/* Form */}
          <section className="rounded-2xl border border-black/[0.09] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.025)] md:p-6">
            <h2 className="text-[14px] font-semibold tracking-[-0.01em]">Send us a message</h2>

            <form onSubmit={handleSubmit} className="mt-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[10px] font-medium">Name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    required
                    className="h-8 w-full rounded-md border border-black/[0.12] bg-white px-3 text-[10px] outline-none transition placeholder:text-[#999] focus:border-black"
                  />
                </label>

                <label className="block">
                  <span className="mb-1.5 block text-[10px] font-medium">Email</span>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@email.com"
                    required
                    className="h-8 w-full rounded-md border border-black/[0.12] bg-white px-3 text-[10px] outline-none transition placeholder:text-[#999] focus:border-black"
                  />
                </label>
              </div>

              <label className="mt-3 block">
                <span className="mb-1.5 block text-[10px] font-medium">Company</span>
                <select
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="h-8 rounded-md border border-black/[0.12] bg-white px-3 text-[10px] outline-none focus:border-black"
                >
                  {companyContacts.map((company) => (
                    <option key={company.key}>{company.name}</option>
                  ))}
                </select>
              </label>

              <label className="mt-3 block">
                <span className="mb-1.5 block text-[10px] font-medium">Topic</span>
                <div className="relative w-fit">
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="h-8 min-w-[105px] appearance-none rounded-md border border-black/[0.12] bg-white pl-3 pr-8 text-[10px] outline-none focus:border-black"
                  >
                    <option>General inquiry</option>
                    <option>Order question</option>
                    <option>Import & Export</option>
                    <option>Auto Workshop</option>
                    <option>Real Estate</option>
                    <option>Partnership</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" size={12} />
                </div>
              </label>

              <label className="mt-3 block">
                <span className="mb-1.5 block text-[10px] font-medium">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  required
                  rows={5}
                  className="w-full resize-y rounded-md border border-black/[0.12] bg-white px-3 py-2 text-[10px] leading-4 outline-none placeholder:text-[#999] focus:border-black"
                />
              </label>

              <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[9px] text-[#777]">We respect your privacy. No spam, ever.</p>
                <button
                  type="submit"
                  className="inline-flex h-8 items-center justify-center gap-2 rounded-full bg-black px-4 text-[10px] font-medium text-white transition hover:bg-[#222]"
                >
                  {sent ? "Message sent" : "Send message"}
                  {sent ? <ArrowRight size={12} /> : <Send size={11} />}
                </button>
              </div>
            </form>
          </section>
        </div>
      </main>

      {/* Three companies */}
      <section className="border-t border-black/[0.08] bg-white">
        <div className="mx-auto max-w-[1100px] px-5 py-[52px] md:px-8">
          <div className="mb-7 max-w-[600px]">
            <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.08em] text-[#777]">
              Aamar Al Watheq
            </p>
            <h2 className="text-[28px] font-medium tracking-[-0.04em] md:text-[34px]">
              Three businesses. One place to reach us.
            </h2>
            <p className="mt-2 text-[12px] leading-5 text-[#707070]">
              Choose the company you need. Each business has its own contact details and
              location.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {companyContacts.map((company, index) => (
              <article
                key={company.key}
                className="rounded-2xl border border-black/[0.09] bg-[#fafafa] p-5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.08em] text-[#888]">
                    0{index + 1}
                  </span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] bg-white">
                    {index === 0 ? (
                      <ArrowRight size={14} />
                    ) : index === 1 ? (
                      <Phone size={14} />
                    ) : (
                      <MapPin size={14} />
                    )}
                  </div>
                </div>

                <h3 className="text-[16px] font-semibold tracking-[-0.02em]">{company.name}</h3>
                <p className="mt-1 text-[10px] leading-4 text-[#777]">{company.description}</p>

                <div className="mt-5 space-y-3 border-t border-black/[0.07] pt-4">
                  <a
                    href={`mailto:${company.email}`}
                    className="flex gap-2 text-[10px] text-[#333] hover:underline"
                  >
                    <Mail size={13} className="mt-[1px] shrink-0" />
                    <span>{company.email}</span>
                  </a>
                  <a
                    href={`tel:${company.phone}`}
                    className="flex gap-2 text-[10px] text-[#333] hover:underline"
                  >
                    <Phone size={13} className="mt-[1px] shrink-0" />
                    <span>{company.phone}</span>
                  </a>
                  <div className="flex gap-2 text-[10px] leading-4 text-[#555]">
                    <MapPin size={13} className="mt-[1px] shrink-0" />
                    <span>{company.location}</span>
                  </div>
                  <div className="flex gap-2 text-[10px] text-[#555]">
                    <Clock3 size={13} className="mt-[1px] shrink-0" />
                    <span>{company.hours}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-black/[0.08] bg-[#f8f8f8]">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-4 px-5 py-9 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <h2 className="text-[19px] font-medium tracking-[-0.03em]">Need a quick answer?</h2>
            <p className="mt-1 text-[10px] text-[#777]">
              Send us a message and the right Aamar Al Watheq team will get back to you.
            </p>
          </div>
          <a
            href="#message"
            className="inline-flex h-9 w-fit items-center gap-2 rounded-full bg-black px-5 text-[10px] font-medium text-white"
          >
            Contact us <ArrowRight size={12} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/[0.08] bg-white">
        <div className="mx-auto flex max-w-[1100px] flex-col gap-4 px-5 py-7 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-2">
            <span className="flex h-[17px] w-[17px] items-center justify-center rounded-full border-[1.5px] border-black">
              <span className="h-[4px] w-[4px] rounded-full bg-black" />
            </span>
            <span className="text-[11px] font-medium">Aamar Al Watheq</span>
          </div>
          <p className="text-[9px] text-[#888]">© {new Date().getFullYear()} Aamar Al Watheq. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
