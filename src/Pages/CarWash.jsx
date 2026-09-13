import React from "react";
import {
  ArrowRight,
  Award,
  CalendarDays,
  Car,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Droplets,
  Gauge,
  MapPin,
  Menu,
  Play,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wrench,
  X,
} from "lucide-react";

import heroCar from "../Images/hero-car-wash.png";
import aboutCar from "../Images/about-car.png";
import exteriorImg from "../Images/service-exterior.jpg";
import interiorImg from "../Images/service-interior.jpg";
import polishImg from "../Images/service-polish.jpg";
import steamImg from "../Images/service-steam.jpg";
import wheelImg from "../Images/service-wheel.jpg";
import waxImg from "../Images/service-wax.jpg";
import basicCar from "../Images/package-basic.jpg";
import premiumCar from "../Images/package-premium.jpg";
import deluxeCar from "../Images/package-deluxe.jpg";
import ultimateCar from "../Images/package-ultimate.jpg";
import johnAvatar from "../Images/avatar-john.jpg";
import sarahAvatar from "../Images/avatar-sarah.jpg";
import davidAvatar from "../Images/avatar-david.jpg";
import Navbar from "../Components/Navbar";

const services = [
  {
    title: "Exterior Wash",
    description: "Hand wash with premium shampoo and care.",
    image: exteriorImg,
    icon: Droplets,
  },
  {
    title: "Interior Cleaning",
    description: "Deep cleaning for a fresh and healthy interior.",
    image: interiorImg,
    icon: Sparkles,
  },
  {
    title: "Car Polishing",
    description: "Restore shine and remove swirl marks.",
    image: polishImg,
    icon: Sparkles,
  },
  {
    title: "Steam Cleaning",
    description: "High temperature steam for deep cleaning.",
    image: steamImg,
    icon: Gauge,
  },
  {
    title: "Wheel Cleaning",
    description: "Special care for wheels and tires.",
    image: wheelImg,
    icon: Car,
  },
  {
    title: "Waxing",
    description: "Protect your car with long lasting shine.",
    image: waxImg,
    icon: ShieldCheck,
  },
];

const packages = [
  {
    name: "BASIC WASH",
    subtitle: "Exterior wash",
    price: "$19.99",
    image: basicCar,
    items: ["Exterior Hand Wash", "Tire & Rim Cleaning", "Windows Cleaning", "Exterior Dry"],
  },
  {
    name: "PREMIUM WASH",
    subtitle: "Interior + Exterior",
    price: "$39.99",
    image: premiumCar,
    featured: true,
    items: ["Everything in Basic", "Interior Vacuum", "Dashboard Cleaning", "Door Panel Wipe"],
  },
  {
    name: "DELUXE DETAIL",
    subtitle: "Deep Cleaning",
    price: "$69.99",
    image: deluxeCar,
    items: ["Everything in Premium", "Seat Shampoo", "Steam Cleaning", "Air Freshener"],
  },
  {
    name: "ULTIMATE DETAIL",
    subtitle: "Complete Care",
    price: "$99.99",
    image: ultimateCar,
    items: ["Everything in Deluxe", "Paint Protection", "Waxing", "Engine Bay Cleaning"],
  },
];

const testimonials = [
  {
    name: "John D.",
    role: "Happy Customer",
    avatar: johnAvatar,
    text: "Amazing service! My car looks brand new. The staff is professional and very friendly.",
  },
  {
    name: "Sarah M.",
    role: "Happy Customer",
    avatar: sarahAvatar,
    text: "Best car wash experience ever. They pay attention to every little detail.",
  },
  {
    name: "David P.",
    role: "Happy Customer",
    avatar: davidAvatar,
    text: "Quick service, great results and very reasonable prices. Highly recommended!",
  },
];

const stats = [
  { value: "10+", label: "Years of\nExperience", icon: Award },
  { value: "5K+", label: "Happy\nCustomers", icon: Users },
  { value: "20+", label: "Expert\nStaff", icon: Users },
  { value: "100%", label: "Satisfaction\nGuarantee", icon: ShieldCheck },
];

const process = [
  { number: "1", title: "BOOK YOUR SLOT", text: "Choose your service and book online.", icon: CalendarDays },
  { number: "2", title: "WE WASH YOUR CAR", text: "Our experts wash your car with care.", icon: Car },
  { number: "3", title: "DETAILING & DRY", text: "Deep cleaning & drying for perfect finish.", icon: Scissors },
  { number: "4", title: "ENJOY THE SHINE", text: "Drive home in your sparkling clean car.", icon: Sparkles },
];

function Logo({ light = false }) {
  return (
    <a href="#home" className="flex items-center gap-3 shrink-0">
      <div className="relative flex h-10 w-12 items-center justify-center">
        <Car className="h-9 w-11 text-white stroke-[1.35]" />
        <Droplets className="absolute -bottom-1 left-1 h-3 w-3 text-[#ffc400]" />
      </div>
      <div className="leading-[0.9]">
        <div className={`text-[13px] font-black tracking-wide ${light ? "text-white" : "text-slate-900"}`}>
          AAMAR AL
        </div>
        <div className="text-[13px] font-black tracking-wide text-[#ffc400]">WATHEQ</div>
      </div>
    </a>
  );
}

function SectionHeading({ eyebrow, title, dark = false }) {
  return (
    <div className="mb-7 text-center">
      <p className={`mb-1 text-[8px] font-extrabold uppercase tracking-[0.18em] ${dark ? "text-[#ffc400]" : "text-[#45678b]"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-[22px] font-black leading-tight sm:text-[26px] ${dark ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
      <div className="mx-auto mt-2 flex w-20 items-center justify-center gap-2">
        <span className={`h-px w-7 ${dark ? "bg-white/30" : "bg-slate-300"}`} />
        <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full border border-[#7893ae]">
          <Droplets className="h-2 w-2 text-[#7893ae]" />
        </span>
        <span className={`h-px w-7 ${dark ? "bg-white/30" : "bg-slate-300"}`} />
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  const Icon = service.icon;
  return (
    <article className="group w-[180px] overflow-hidden rounded-md border border-slate-100 bg-white shadow-[0_5px_18px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-30 overflow-hidden">
        <img src={service.image} alt={service.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute bottom-[-5px] left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-white text-[#365c82] shadow-md">
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div className="px-3 pb-3 pt-5 text-center h-30 w-[180px]">
        <h3 className="text-[10px] font-black text-slate-900">{service.title}</h3>
        <p className="mx-auto mt-1 min-h-[28px] max-w-[145px] text-[7px] leading-[1.45] text-slate-500">{service.description}</p>
        <a href="#packages" className="mt-2 inline-flex items-center gap-1 text-[7px] font-black uppercase text-[#315d85]">
          Learn more <ArrowRight className="h-2.5 w-2.5" />
        </a>
      </div>
    </article>
  );
}

function PackageCard({ pkg }) {
  return (
    <article
      className={`relative overflow-hidden rounded-md border bg-white p-3 shadow-[0_5px_18px_rgba(15,23,42,0.06)] ${
        pkg.featured ? "border-[#ffc400] shadow-[0_6px_22px_rgba(255,196,0,0.15)]" : "border-slate-100"
      }`}
    >
      {pkg.featured && (
        <span className="absolute right-2 top-0 rounded-b-md bg-[#ffc400] px-2 py-1 text-[6px] font-black uppercase text-slate-900">
          Most Popular
        </span>
      )}
      <div className="text-center">
        <h3 className="text-[9px] font-black text-slate-900">{pkg.name}</h3>
        <p className="mt-0.5 text-[6px] text-slate-400">{pkg.subtitle}</p>
        <div className="mt-1 text-[13px] font-black text-[#173657]">{pkg.price}</div>
      </div>

      <div className="my-2 flex h-[58px] items-center justify-center">
        <img src={pkg.image} alt="" className="max-h-full w-full object-contain mix-blend-multiply" />
      </div>

      <ul className="space-y-1.5">
        {pkg.items.map((item) => (
          <li key={item} className="flex items-start gap-1 text-[6px] text-slate-500">
            <Check className="mt-px h-2 w-2 shrink-0 text-[#7d94aa]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <button className={`mt-3 flex w-full items-center justify-center gap-1 rounded-sm border py-1.5 text-[7px] font-black ${
        pkg.featured ? "border-[#ffc400] bg-[#ffc400] text-slate-900" : "border-[#9bb0c3] text-[#365d83]"
      }`}>
        BOOK NOW <ArrowRight className="h-2.5 w-2.5" />
      </button>
    </article>
  );
}

export default function CarWash() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const nav = [
    ["HOME", "#home"],
    ["ABOUT US", "#about"],
    ["SERVICES", "#services"],
    ["PACKAGES", "#packages"],
    ["GALLERY", "#gallery"],
    ["REVIEWS", "#reviews"],
    ["CONTACT", "#contact"],
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar/>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden bg-[#060d16] h-screen w-full">
        
            <div className="absolute inset-0 bg-gradient-to-r from-[#060d16] via-transparent to-transparent lg:z-10" />
            <img src={heroCar} alt="Car being washed" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060d16]/70 via-transparent to-[#060d16]/10" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(30,65,98,.36),transparent_45%)]" />
        <div className="mx-auto grid min-h-[470px] max-w-[1280px] grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] pt-40">
          <div className="relative z-10 flex flex-col justify-center px-7 py-14 sm:px-12 lg:px-14">
            <p className="mb-3 text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#4d8bc2]">Premium car wash & detailing</p>
            <h1 className="max-w-[520px] text-[38px] font-black leading-[0.98] tracking-tight text-white sm:text-[54px]">
              CLEAN CAR
              <br />
              <span className="text-[#ffc400]">HAPPY DRIVE</span>
            </h1>
            <p className="mt-5 max-w-[390px] text-[10px] leading-5 text-slate-300 sm:text-[11px]">
              We provide the best car wash and detailing services
              <br className="hidden sm:block" />
              to make your car look brand new.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href="#contact" className="inline-flex items-center gap-1.5 rounded bg-[#ffc400] px-5 py-2.5 text-[8px] font-black text-slate-900">
                BOOK APPOINTMENT
                <ArrowRight className="h-3 w-3" />
              </a>
              <a href="#gallery" className="inline-flex items-center gap-1.5 rounded border border-slate-500/70 px-5 py-2.5 text-[8px] font-black text-white">
                <span className="flex h-4 w-4 items-center justify-center rounded-full border border-[#ffc400]">
                  <Play className="ml-px h-2.5 w-2.5 fill-[#ffc400] text-[#ffc400]" />
                </span>
                WATCH VIDEO
              </a>
            </div>

            <div className="mt-8 grid max-w-[560px] grid-cols-2 gap-5 border-t border-white/10 pt-5 sm:grid-cols-4">
              {[
                ["PREMIUM\nPRODUCTS", "High quality products for perfect shine", Droplets],
                ["EXPERT\nTEAM", "Trained professionals at your service", Users],
                ["QUICK & ON TIME\nSERVICE", "We value your time & deliver on time", Clock3],
                ["100% CUSTOMER\nSATISFACTION", "Your satisfaction is our priority", ShieldCheck],
              ].map(([title, desc, Icon]) => (
                <div key={title} className="flex gap-2">
                  <Icon className="h-5 w-5 shrink-0 text-[#4c88bc]" />
                  <div>
                    <div className="whitespace-pre-line text-[7px] font-black text-white">{title}</div>
                    <div className="mt-1 text-[6px] leading-3 text-slate-400">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#fafafa] px-5 py-7 sm:px-8">
        <div className="mx-auto max-w-[1120px]">
          <SectionHeading eyebrow="Our services" title="Professional Car Wash & Detailing Services" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto grid max-w-[1120px] overflow-hidden lg:grid-cols-[0.95fr_1.45fr]">
          <div className="min-h-[290px] overflow-hidden">
            <img src={aboutCar} alt="Aamar Al Watheq car wash" className="h-full w-full object-cover" />
          </div>

          <div className="px-6 py-5 lg:px-9">
            <p className="text-[8px] font-extrabold uppercase tracking-[0.16em] text-[#456f98]">Why choose us</p>
            <h2 className="mt-1 text-[23px] font-black leading-tight text-slate-900">We Care About Your Car</h2>
            <p className="mt-2 max-w-[550px] text-[8px] leading-4 text-slate-500">
              At Aamar Al Watheq, we go the extra mile to ensure your car gets the best care and you get the best experience.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={value} className="flex items-center gap-2">
                  <Icon className="h-7 w-7 text-[#365e85]" />
                  <div>
                    <div className="text-[18px] font-black leading-none text-slate-800">{value}</div>
                    <div className="mt-1 whitespace-pre-line text-[6px] leading-3 text-slate-500">{label}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[7px] font-black uppercase tracking-[0.14em] text-[#365e85]">Our process</p>
            <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4">
              {process.map(({ number, title, text, icon: Icon }, index) => (
                <React.Fragment key={number}>
                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 bg-white shadow-[0_3px_15px_rgba(15,23,42,0.08)]">
                      <Icon className="h-5 w-5 text-[#365e85]" />
                    </div>
                    <span className="absolute -left-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#174e80] text-[6px] font-black text-white">
                      {number}
                    </span>
                    <h3 className="mt-2 text-[7px] font-black text-slate-800">{title}</h3>
                    <p className="mt-1 max-w-[115px] text-[6px] leading-3 text-slate-500">{text}</p>
                    {index < process.length - 1 && (
                      <ArrowRight className="absolute -right-4 top-4 hidden h-4 w-4 text-slate-300 sm:block" />
                    )}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="bg-[#fafafa] px-5 py-7 sm:px-8">
        <div className="mx-auto max-w-[1120px]">
          <SectionHeading eyebrow="Our packages" title="Choose The Best Package For Your Car" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#0b2947] px-5 py-5 text-white">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(#fff_0.6px,transparent_0.6px)] [background-size:8px_8px]" />
        <div className="relative mx-auto flex max-w-[1120px] flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#3e78aa]">
              <CalendarDays className="h-7 w-7 text-white" />
            </div>
            <div>
              <p className="text-[7px] font-bold uppercase tracking-[0.12em] text-[#91b4d2]">Book your appointment now</p>
              <h2 className="text-[18px] font-black">Give Your Car the Care It Deserves</h2>
              <p className="mt-0.5 text-[7px] text-slate-300">Book your slot today and experience the best car wash in town.</p>
            </div>
          </div>
          <a href="#contact" className="inline-flex items-center gap-1 rounded bg-[#ffc400] px-7 py-3 text-[8px] font-black text-slate-900">
            BOOK APPOINTMENT <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-white px-5 py-8 sm:px-8">
        <div className="mx-auto max-w-[1120px]">
          <SectionHeading eyebrow="What our customers say" title="Customer Satisfaction is Our Priority" />
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {testimonials.map((review) => (
              <article key={review.name} className="rounded-md border border-slate-100 bg-white p-4 shadow-[0_5px_18px_rgba(15,23,42,0.05)]">
                <div className="flex gap-0.5 text-[#ffc400]">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3 w-3 fill-current" />)}
                </div>
                <p className="mt-2 min-h-[44px] text-[8px] leading-4 text-slate-600">"{review.text}"</p>
                <div className="mt-3 flex items-center gap-2">
                  <img src={review.avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
                  <div>
                    <div className="text-[8px] font-black text-slate-800">{review.name}</div>
                    <div className="text-[6px] text-slate-400">{review.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-4 flex justify-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#173f65]" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section id="gallery" className="hidden">
        <img src={heroCar} alt="" />
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#050d17] px-5 py-7 text-white sm:px-8">
        <div className="mx-auto grid max-w-[1120px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light />
            <p className="mt-4 max-w-[210px] text-[7px] leading-4 text-slate-400">
              We are passionate about cars and committed to delivering premium car wash and detailing services.
            </p>
            <div className="mt-3 flex gap-2">
              {["f", "◎", "▶", "in"].map((item) => (
                <span key={item} className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 text-[8px] font-bold text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[8px] font-black">QUICK LINKS</h3>
            <div className="mt-3 grid gap-1.5">
              {nav.map(([label, href]) => (
                <a key={label} href={href} className="text-[7px] text-slate-400 hover:text-[#ffc400]">{label}</a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[8px] font-black">OUR SERVICES</h3>
            <div className="mt-3 grid gap-1.5">
              {services.map((service) => (
                <a key={service.title} href="#services" className="text-[7px] text-slate-400 hover:text-[#ffc400]">{service.title}</a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[8px] font-black">CONTACT US</h3>
            <div className="mt-3 grid gap-2 text-[7px] text-slate-400">
              <div className="flex gap-2"><MapPin className="h-3 w-3 shrink-0 text-[#ffc400]" /> 123 Clean Street, Los Angeles, CA 90001, USA</div>
              <div className="flex gap-2"><Phone className="h-3 w-3 shrink-0 text-[#ffc400]" /> +1 (234) 567-8900</div>
              <div className="flex gap-2"><Sparkles className="h-3 w-3 shrink-0 text-[#ffc400]" /> info@aamarwatheq.com</div>
              <div className="flex gap-2"><Clock3 className="h-3 w-3 shrink-0 text-[#ffc400]" /> Mon - Sat: 8:00 AM - 7:00 PM<br />Sunday: 9:00 AM - 5:00 PM</div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-7 flex max-w-[1120px] flex-col justify-between gap-2 border-t border-white/10 pt-3 text-[6px] text-slate-500 sm:flex-row">
          <span>© 2026 Aamar Al Watheq. All Rights Reserved.</span>
          <span>Privacy Policy &nbsp; | &nbsp; Terms & Conditions</span>
        </div>
      </footer>
    </div>
  );
}
