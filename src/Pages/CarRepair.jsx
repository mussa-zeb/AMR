import React from "react";
import {
  ArrowRight,
  Battery,
  CalendarCheck,
  Car,
  Check,
  ChevronDown,
  ChevronRight,
  Clock3,
  Disc3,
  Gauge,
  Menu,
  MessageSquare,
  Phone,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Thermometer,
  Truck,
  Wrench,
  X,
} from "lucide-react";

import heroImage from "../Images/repair-hero.jpg";
import logbookImage from "../Images/service-logbook.jpg";
import brakesImage from "../Images/service-brakes.jpg";
import engineImage from "../Images/service-engine.jpg";
import batteryImage from "../Images/service-battery.jpg";
import tyresImage from "../Images/service-tyres.jpg";
import suspensionImage from "../Images/service-suspension.jpg";
import roadworthyImage from "../Images/service-roadworthy.jpg";
import acImage from "../Images/service-ac.jpg";
import fleetImage from "../Images/service-fleet.jpg";
import ctaCarImage from "../Images/cta-car.jpg";
import Navbar from "../Components/Navbar";

const services = [
  {
    title: "LOGBOOK SERVICING",
    short: "Logbook servicing",
    description: "Maintain your warranty with expert logbook servicing.",
    image: logbookImage,
    icon: CalendarCheck,
  },
  {
    title: "BRAKE REPAIRS",
    short: "Brake repairs",
    description: "Safe stopping power with quality brake repairs.",
    image: brakesImage,
    icon: Disc3,
  },
  {
    title: "ENGINE DIAGNOSTICS",
    short: "Engine diagnostics",
    description: "Advanced diagnostics for peak engine performance.",
    image: engineImage,
    icon: Gauge,
  },
  {
    title: "BATTERY REPLACEMENT",
    short: "Battery replacement",
    description: "High-performance batteries fitted and tested.",
    image: batteryImage,
    icon: Battery,
  },
  {
    title: "TYRE & WHEEL SERVICES",
    short: "Tyre & wheel services",
    description: "Tyres, balancing, alignments & wheel replacements.",
    image: tyresImage,
    icon: Disc3,
  },
  {
    title: "SUSPENSION REPAIRS",
    short: "Suspension repairs",
    description: "Smooth, safe handling with expert suspension repairs.",
    image: suspensionImage,
    icon: Settings,
  },
  {
    title: "ROADWORTHY INSPECTIONS",
    short: "Roadworthy inspections",
    description: "RWC inspections for registration & peace of mind.",
    image: roadworthyImage,
    icon: ShieldCheck,
  },
  {
    title: "AIR CONDITIONING SERVICE",
    short: "Air conditioning service",
    description: "Stay cool with expert air con regas & repairs.",
    image: acImage,
    icon: Thermometer,
  },
  {
    title: "FLEET MAINTENANCE",
    short: "Fleet maintenance",
    description: "Reliable servicing solutions for business fleets.",
    image: fleetImage,
    icon: Truck,
  },
];

const reasons = [
  ["QUALIFIED MECHANICS", Wrench],
  ["TRANSPARENT PRICING", Search],
  ["MODERN DIAGNOSTICS", Gauge],
  ["SAME-DAY SERVICE", Clock3],
  ["GENUINE PARTS", Settings],
  ["WARRANTY-SAFE SERVICING", ShieldCheck],
  ["CLEAN WORKSHOP STANDARDS", Sparkles],
];

const steps = [
  ["BOOK ONLINE", "Choose a time that suits you.", CalendarCheck],
  ["DESCRIBE THE ISSUE", "Tell us what's happening.", MessageSquare],
  ["VEHICLE INSPECTION", "We inspect & run diagnostics.", Search],
  ["CLEAR QUOTE", "We explain the issue & your options.", Wrench],
  ["SERVICE COMPLETED", "Quality service, you're back on the road.", Check],
];

const reviews = [
  {
    name: "Jason M.",
    text: "Fantastic service and great advice. Sorted in the morning, car was ready by the afternoon!",
    stars: 5,
  },
  {
    name: "Sarah T.",
    text: "Professional, friendly and great communication. Highly recommend Aamar Al Watheq Auto Care.",
    stars: 5,
  },
  {
    name: "Michael R.",
    text: "Best mechanic I've found. Great team and fair pricing. Will be back for sure.",
    stars: 5,
  },
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2.5">
      <div className="relative flex h-11 w-12 items-center justify-center">
        <div className="absolute h-9 w-9 rounded-full border-[4px] border-[#ed1c24]" />
        <Car className="relative h-7 w-8 text-white" strokeWidth={1.7} />
      </div>
      <div className="leading-[0.88]">
        <div className="text-[14px] font-black italic tracking-tight text-white">AUS</div>
        <div className="text-[13px] font-black italic text-[#ed1c24]">AAMAR AL WATHEQ</div>
        <div className="mt-0.5 text-[5px] font-bold uppercase tracking-[0.14em] text-white">
          Mechanical specialists
        </div>
      </div>
    </a>
  );
}

function SectionTitle({ children }) {
  return (
    <div className="mb-7 flex items-center gap-3">
      <span className="hidden h-px flex-1 bg-[#c9c9c9] sm:block" />
      <h2 className="whitespace-nowrap text-center text-[19px] font-black uppercase leading-none tracking-tight text-[#171717] sm:text-[24px]">
        {children}
      </h2>
      <span className="hidden h-px flex-1 bg-[#c9c9c9] sm:block" />
    </div>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="group relative h-[125px] overflow-hidden border border-[#d8d8d8] bg-[#111]">
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/5" />
      <div className="relative flex h-full flex-col justify-between p-3 text-white">
        <Icon className="h-7 w-7 text-[#ef2027]" strokeWidth={1.4} />
        <div>
          <h3 className="text-[10px] font-black leading-tight">{service.title}</h3>
          <p className="mt-1 max-w-[155px] text-[7px] leading-[1.25] text-white/85">
            {service.description}
          </p>
        </div>
      </div>
    </article>
  );
}

function AppointmentForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="grid grid-cols-1 gap-2 sm:grid-cols-2"
    >
      <input className="repair-input" placeholder="Name" />
      <input className="repair-input" placeholder="Phone" />
      <select className="repair-input">
        <option>Vehicle Make</option>
        <option>Toyota</option>
        <option>Ford</option>
        <option>Mazda</option>
        <option>BMW</option>
      </select>
      <select className="repair-input">
        <option>Service Needed</option>
        {services.map((s) => <option key={s.title}>{s.short}</option>)}
      </select>
      <select className="repair-input">
        <option>Suburb</option>
        <option>City Centre</option>
        <option>Northside</option>
        <option>Southside</option>
      </select>
      <select className="repair-input">
        <option>Preferred Booking Time</option>
        <option>Morning</option>
        <option>Afternoon</option>
        <option>Evening</option>
      </select>
      <button className="col-span-1 mt-1 flex items-center justify-center gap-2 bg-[#ed1c24] py-3 text-[9px] font-black uppercase text-white transition hover:bg-[#c9141a] sm:col-span-2">
        BOOK MY SERVICE <ArrowRight className="h-3 w-3" />
      </button>
    </form>
  );
}

export default function CarRepair() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showAllServices, setShowAllServices] = React.useState(false);

  const nav = [
    ["HOME", "#home"],
    ["SERVICES", "#services"],
    ["ABOUT US", "#why"],
    ["REVIEWS", "#reviews"],
    ["SPECIALS", "#appointment"],
    ["CONTACT", "#contact"],
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#151515]">
      <style>{`
        .repair-input {
          width: 100%;
          min-height: 34px;
          border: 1px solid #4b4b4b;
          background: #111;
          color: #fff;
          padding: 7px 10px;
          font-size: 8px;
          outline: none;
        }
        .repair-input::placeholder { color: #aaa; }
        .repair-input:focus { border-color: #ed1c24; }
        .repair-input option { background: #111; color: #fff; }
      `}</style>

<Navbar/>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden bg-[#080909]">
        <div className="mx-auto grid min-h-[420px] max-w-[1180px] grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative z-10 flex flex-col justify-center px-7 py-12 sm:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(30,30,30,.9),transparent_65%)]" />
            <div className="relative">
              <h1 className="max-w-[480px] text-[38px] font-black uppercase leading-[0.95] tracking-[-0.025em] text-white sm:text-[53px]">
                Reliable Car
                <br />
                Servicing & Repairs
                <br />
                <span className="text-[#1670dd]">You Can Trust</span>
              </h1>
              <p className="mt-5 max-w-[430px] text-[10px] leading-[1.55] text-[#e2e2e2]">
                Logbook servicing, brake repairs, engine diagnostics,
                roadworthy checks, tyre services, battery replacement
                & same-day workshop bookings.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <a href="#appointment" className="bg-[#ed1c24] px-5 py-3 text-[8px] font-black uppercase text-white">
                  Book a service
                </a>
                <a href="#appointment" className="bg-[#1670dd] px-5 py-3 text-[8px] font-black uppercase text-white">
                  Request a repair quote
                </a>
              </div>
            </div>
          </div>

          <div className="relative min-h-[300px] overflow-hidden">
            <img
              src={heroImage}
              alt="Aamar Al Watheq mechanic servicing a car"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#080909] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>

        {/* Hero benefits */}
        <div className="relative mx-auto -mt-10 max-w-[1120px] px-5 sm:px-8">
          <div className="grid grid-cols-2 divide-x divide-[#555] border border-[#444] bg-[#101010] sm:grid-cols-4">
            {[
              ["SAME-DAY", "BOOKINGS", Clock3],
              ["QUALIFIED", "MECHANICS", Wrench],
              ["3 YEAR / 60,000KM", "NATIONWIDE WARRANTY", ShieldCheck],
              ["LOCAL AUSTRALIAN", "WORKSHOP", Search],
            ].map(([a, b, Icon]) => (
              <div key={a} className="flex items-center gap-2 p-3 text-white">
                <Icon className="h-7 w-7 shrink-0" />
                <div>
                  <div className="text-[7px] font-black">{a}</div>
                  <div className="text-[6px] text-[#bbb]">{b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-[1120px]">
          <SectionTitle>
            OUR AUTOMOTIVE <span className="text-[#ed1c24]">SERVICES</span>
          </SectionTitle>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {(showAllServices ? services : services.slice(0, 9)).map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>

          <div className="mt-5 flex justify-center">
            <button
              onClick={() => setShowAllServices((v) => !v)}
              className="border border-[#222] px-12 py-2.5 text-[8px] font-black uppercase hover:bg-[#111] hover:text-white"
            >
              {showAllServices ? "SHOW FEWER SERVICES" : "VIEW ALL SERVICES"}
            </button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="border-t border-[#ddd] px-5 py-9 sm:px-8">
        <div className="mx-auto max-w-[1120px]">
          <SectionTitle>
            WHY DRIVERS <span className="text-[#ed1c24]">CHOOSE US</span>
          </SectionTitle>

          <div className="grid grid-cols-2 gap-y-7 sm:grid-cols-4 lg:grid-cols-7">
            {reasons.map(([label, Icon]) => (
              <div key={label} className="flex flex-col items-center text-center">
                <Icon className="h-7 w-7 text-[#202020]" strokeWidth={1.35} />
                <span className="mt-2 max-w-[100px] text-[7px] font-black uppercase leading-tight">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT */}
      <section id="appointment" className="px-5 py-6 sm:px-8">
        <div className="mx-auto grid max-w-[1120px] overflow-hidden bg-[#111] lg:grid-cols-[0.75fr_1.25fr]">
          <div className="relative min-h-[235px] overflow-hidden">
            <img src={ctaCarImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
            <div className="relative flex h-full flex-col justify-center p-7 text-white">
              <h2 className="max-w-[230px] text-[25px] font-black uppercase leading-[0.95]">
                NEED YOUR CAR
                <br />
                CHECKED <span className="text-[#1670dd]">TODAY?</span>
              </h2>
              <p className="mt-3 max-w-[225px] text-[8px] leading-4 text-[#ddd]">
                Book online in 60 seconds.
                <br />
                Same-day bookings available.
              </p>
              <ul className="mt-3 grid gap-1 text-[7px] text-white">
                <li className="flex gap-1"><Check className="h-3 w-3 text-[#1670dd]" /> No obligation</li>
                <li className="flex gap-1"><Check className="h-3 w-3 text-[#1670dd]" /> Transparent quotes</li>
                <li className="flex gap-1"><Check className="h-3 w-3 text-[#1670dd]" /> Quality workmanship</li>
                <li className="flex gap-1"><Check className="h-3 w-3 text-[#1670dd]" /> Local Australian workshop</li>
              </ul>
            </div>
          </div>

          <div className="p-6">
            <AppointmentForm />
          </div>
        </div>
      </section>

      {/* REVIEWS / GUARANTEE */}
      <section id="reviews" className="px-5 py-6 sm:px-8">
        <div className="mx-auto grid max-w-[1120px] gap-3 lg:grid-cols-[1fr_0.3fr]">
          <div className="grid grid-cols-1 divide-y divide-[#ddd] border border-[#ddd] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {reviews.map((review) => (
              <article key={review.name} className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-black">{review.name}</div>
                  <div className="flex text-[#e8ad00]">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <Star key={i} className="h-2.5 w-2.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-[7px] leading-4 text-[#666]">"{review.text}"</p>
              </article>
            ))}
          </div>

          <div className="border border-[#ddd] p-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-10 w-10" />
              <h3 className="text-[11px] font-black uppercase">Our service guarantee</h3>
            </div>
            <ul className="mt-3 grid gap-2 text-[7px] text-[#555]">
              <li className="flex gap-1"><Check className="h-3 w-3" /> Quality workmanship</li>
              <li className="flex gap-1"><Check className="h-3 w-3" /> Genuine parts</li>
              <li className="flex gap-1"><Check className="h-3 w-3" /> 3 Year / 60,000km nationwide warranty</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-[#ddd] px-5 py-9 sm:px-8">
        <div className="mx-auto max-w-[1120px]">
          <SectionTitle>
            HOW IT <span className="text-[#ed1c24]">WORKS</span>
          </SectionTitle>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-5">
            {steps.map(([title, text, Icon], i) => (
              <div key={title} className="relative flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#a8bfdc] text-[#1670dd]">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="mt-2 text-[7px] font-black uppercase">
                  {i + 1}. {title}
                </div>
                <p className="mt-1 max-w-[130px] text-[7px] leading-3 text-[#666]">{text}</p>
                {i < steps.length - 1 && (
                  <ArrowRight className="absolute right-[-12px] top-4 hidden h-4 w-4 text-[#aaa] sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS */}
      <section className="border-t border-[#ddd] px-5 py-4 sm:px-8">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4">
          <span className="text-[9px] font-black uppercase">WE USE & RECOMMEND QUALITY BRANDS</span>
          {["BOSCH", "Castrol", "RYCO", "NGK", "ACDelco", "NULON"].map((brand) => (
            <span key={brand} className="text-[13px] font-black italic text-[#303030]">{brand}</span>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#090b0c] text-white">
        <div className="mx-auto grid max-w-[1120px] gap-8 px-5 py-8 sm:px-8 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 max-w-[220px] text-[7px] leading-4 text-[#aaa]">
              Your local Australian workshop for reliable car servicing, repairs and maintenance.
            </p>
            <div className="mt-4 flex gap-2">
              {["f", "◎", "G", "▶"].map((x) => (
                <span key={x} className="flex h-6 w-6 items-center justify-center rounded-full border border-[#444] text-[8px] font-bold">
                  {x}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[8px] font-black uppercase">Services</h3>
            <div className="mt-3 grid gap-1.5 text-[7px] text-[#999]">
              {services.slice(0, 6).map((s) => <span key={s.title}>{s.short}</span>)}
            </div>
          </div>

          <div>
            <h3 className="text-[8px] font-black uppercase">Car servicing</h3>
            <div className="mt-3 grid gap-1.5 text-[7px] text-[#999]">
              <span>Major service</span>
              <span>Minor service</span>
              <span>Logbook service</span>
              <span>New car warranty</span>
              <span>Roadworthy inspection</span>
              <span>Safety check</span>
            </div>
          </div>

          <div>
            <h3 className="text-[8px] font-black uppercase">Opening hours</h3>
            <div className="mt-3 grid gap-1.5 text-[7px] text-[#999]">
              <span>Mon – Fri: 7:30am – 5:30pm</span>
              <span>Sat: 8:00am – 1:00pm</span>
              <span>Sun: Closed</span>
              <span className="mt-3 flex items-center gap-1.5 text-white">
                <Phone className="h-3 w-3 text-[#1670dd]" />
                03 9876 5432
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-[#252525] bg-[#0c4fae]">
          <div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-2 px-5 py-2 text-[6px] sm:flex-row sm:px-8">
            <span>© 2026 Aamar Al Watheq Auto Care. All Rights Reserved.</span>
            <span>Privacy Policy &nbsp; | &nbsp; Terms & Conditions</span>
          </div>
        </div>
      </footer>

      {/* MOBILE FIXED CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex h-12 border-t border-white/20 bg-[#111] lg:hidden">
        <a href="tel:0398765432" className="flex flex-1 items-center justify-center gap-2 bg-[#0c4fae] text-[9px] font-black text-white">
          <Phone className="h-4 w-4" /> 03 9876 5432
        </a>
        <a href="#appointment" className="flex flex-1 items-center justify-center gap-2 bg-[#ed1c24] text-[9px] font-black text-white">
          BOOK NOW <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
