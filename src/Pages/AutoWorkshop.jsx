import React, { useState } from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Battery,
  CalendarCheck,
  Car,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  Search,
  Settings,
  ShieldCheck,
  Star,
  Thermometer,
  UserRound,
  Users,
  Wrench,
  X,
} from "lucide-react";

import heroImage from "../Images/hero-workshop.jpg";
import aboutImage from "../Images/about-workshop.jpg";
import performanceImage from "../Images/service-performance.jpg";
import transmissionImage from "../Images/service-transmission.jpg";
import brakesImage from "../Images/service-brakes.jpg";
import engineImage from "../Images/service-engine.jpg";
import tyresImage from "../Images/service-tyres.jpg";
import washingImage from "../Images/service-washing.jpg";
import additionalImage from "../Images/additional-service.jpg";
import leaderImage from "../Images/leader-workshop.jpg";
import testimonialImage from "../Images/testimonial.jpg";
import michaelImage from "../Images/team-michael.jpg";
import markImage from "../Images/team-mark.jpg";
import meryImage from "../Images/team-mery.jpg";
import johnImage from "../Images/team-john.jpg";
import Navbar from "../Components/Navbar";

const services = [
  ["Performance Upgrade", performanceImage, Settings],
  ["Transmission Service & Repair", transmissionImage, Wrench],
  ["Brake Repair & Service", brakesImage, ShieldCheck],
  ["Engine Service & Repair", engineImage, Car],
  ["Tyre & Wheels", tyresImage, Settings],
  ["General Service & Washing", washingImage, SparklesIcon],
];

function SparklesIcon({ className = "" }) {
  return <Award className={className} />;
}

const reasons = [
  ["Certified Expert Mechanics", BadgeCheck],
  ["Fast And Quality Service", Wrench],
  ["Best Prices in Town", Star],
  ["Awarded Workshop", Award],
];

const additionalServices = [
  "General Auto Repair & Maintenance",
  "Transmission Repair & Replacement",
  "Tire Repair and Replacement",
  "State Emissions Inspection",
  "Travel 360 / Brake Service",
  "Electrical Diagnostics",
  "Fuel System Repairs",
  "Starting and Charging Repair",
  "Steering and Suspension Work",
  "Emission Repair Facility",
  "Wheel Alignment",
  "Computer Diagnostic Testing",
];

const team = [
  ["Micheal Joe", "Master Technician", michaelImage],
  ["Mark John", "Auto Technician", markImage],
  ["Mery Desulva", "Service Specialist", meryImage],
  ["John ichaile", "Senior Mechanic", johnImage],
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2">
      <div className="flex h-9 w-10 items-center justify-center rounded-full border-2 border-red-500">
        <Car className="h-6 w-6 text-red-500" strokeWidth={1.8} />
      </div>
      <div className="leading-none">
        <div className="text-[15px] font-extrabold italic">AAMAR</div>
        <div className="text-[11px] font-extrabold uppercase text-red-500">AL WATHEQ</div>
        <div className="mt-1 text-[5px] uppercase tracking-wider text-white/70">
          Mechanical Specialists
        </div>
      </div>
    </a>
  );
}

function SectionHeading({ children, dark = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`h-px flex-1 ${dark ? "bg-white/30" : "bg-slate-300"}`} />
      <h2
        className={`text-center text-[20px] font-extrabold uppercase leading-none sm:text-[25px] ${
          dark ? "text-white" : "text-[#101a35]"
        }`}
      >
        {children}
      </h2>
      <span className={`h-px flex-1 ${dark ? "bg-white/30" : "bg-slate-300"}`} />
    </div>
  );
}

function ServiceCard({ item }) {
  const [title, image, Icon] = item;
  return (
    <article className="group relative h-[132px] overflow-hidden bg-slate-900">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
      <div className="relative flex h-full flex-col justify-between p-3 text-white">
        <Icon className="h-6 w-6 text-red-500" strokeWidth={1.5} />
        <div>
          <h3 className="text-[9px] font-extrabold uppercase">{title}</h3>
          <p className="mt-1 max-w-[190px] text-[7px] leading-3 text-white/85">
            Professional service from qualified technicians.
          </p>
        </div>
      </div>
    </article>
  );
}

function EstimateForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      <select className="aw-input"><option>Make</option><option>Toyota</option><option>Ford</option><option>BMW</option></select>
      <select className="aw-input"><option>Model</option><option>Corolla</option><option>Ranger</option><option>3 Series</option></select>
      <select className="aw-input"><option>Year</option><option>2026</option><option>2025</option><option>2024</option></select>
      <select className="aw-input"><option>Repair Needed</option><option>Engine Service</option><option>Brake Repair</option><option>Tyre Service</option></select>
      <button className="col-span-1 bg-[#c91418] py-2 text-[8px] font-extrabold uppercase text-white transition hover:bg-[#a90e12] sm:col-span-2">
        Get Estimate
      </button>
    </form>
  );
}

export default function AutoWorkshop() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = [
    ["HOME", "#home"],
    ["ABOUT US", "#about"],
    ["SERVICES", "#services"],
    ["GALLERY", "#gallery"],
    ["PRICES", "#estimate"],
    ["NEWS", "#news"],
    ["CONTACT US", "#contact"],
  ];

  return (
    <div className="min-h-screen bg-[#f4f6fa] font-sans text-[#121a2d]">
      <style>{`
        .aw-input {
          width: 100%;
          min-height: 31px;
          border: 1px solid #d8d8d8;
          background: #fff;
          padding: 6px 9px;
          font-size: 8px;
          color: #333;
          outline: none;
        }
        .aw-input:focus { border-color: #ed1017; }
      `}</style>

<Navbar/>

      {/* HERO */}
      <section id="home" className="relative min-h-[430px] overflow-hidden bg-[#07132e]">
        <img src={heroImage} alt="Aamar Al Watheq workshop" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07132e]/95 via-[#07132e]/55 to-transparent" />
        <div className="relative mx-auto flex min-h-[430px] max-w-[1180px] items-center px-7 sm:px-12">
          <button className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white">
            <ChevronRight className="h-4 w-4" />
          </button>

          <div className="max-w-[470px] text-white">
            <h1 className="text-[38px] font-extrabold leading-[.98] sm:text-[52px]">
              Highly Skilled
              <br />
              Certified Engineers
              <br />
              <span className="text-[#0877f9]">You Can Trust</span>
            </h1>
            <p className="mt-5 max-w-[420px] text-[9px] leading-[1.6] text-white/90">
              We believe in providing top quality workmanship and are so confident
              in our level of service that we back it up with a good quality.
            </p>
            <a href="#services" className="mt-5 inline-flex items-center gap-2 bg-[#ed1017] px-5 py-3 text-[8px] font-extrabold uppercase">
              View all services <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#f4f6fa] px-5 py-12 sm:px-8">
        <div className="mx-auto grid max-w-[1040px] items-center gap-8 md:grid-cols-[.9fr_1.1fr]">
          <div className="overflow-hidden">
            <img src={aboutImage} alt="Workshop mechanics" className="h-[245px] w-full object-cover" />
          </div>
          <div>
            <h2 className="text-[21px] font-extrabold leading-tight text-[#111b39] sm:text-[27px]">
              Best Car Repairing Workshop in Los
              <br />
              Angle and New York
            </h2>
            <h3 className="mt-4 text-[10px] font-bold text-[#222]">
              User generated content is real-time will have multiple touchpoints for offshore.
            </h3>
            <p className="mt-3 text-[8px] leading-4 text-[#697184]">
              We are offering quality professional automotive repair services for high level coverage.
              Our experienced team provides dependable service and clear communication for every vehicle.
            </p>
            <p className="mt-2 text-[8px] leading-4 text-[#697184]">
              From routine maintenance to complex repairs, we use modern diagnostic equipment and
              proven techniques to keep your vehicle safe and reliable.
            </p>
            <a href="#contact" className="mt-4 inline-flex items-center gap-2 bg-[#ed1017] px-4 py-2.5 text-[7px] font-extrabold uppercase text-white">
              View all services <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white px-5 py-11 sm:px-8">
        <div className="mx-auto max-w-[1040px]">
          <h2 className="text-[18px] font-extrabold text-[#111b39] sm:text-[23px]">Services that we Offer</h2>
          <p className="mt-2 max-w-[820px] text-[7px] leading-3.5 text-[#6e7584]">
            Being to the table within several services to ensure precise diagnosis. At the end of the day,
            going forward, a new normal that has evolved from operations is in the survey heading towards a streamlined visual solution.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item) => <ServiceCard key={item[0]} item={item} />)}
          </div>

          <div className="mt-6 flex justify-center">
            <a href="#estimate" className="inline-flex items-center gap-2 bg-[#ed1017] px-6 py-2.5 text-[7px] font-extrabold uppercase text-white">
              View all services <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="gallery" className="bg-[#f20b12] px-5 py-10 text-white sm:px-8">
        <div className="mx-auto max-w-[1040px]">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-[20px] font-extrabold">Why Choose Us</h2>
              <p className="mt-3 max-w-[450px] text-[7px] leading-3.5 text-white/85">
                Bring to the table win-win survival strategies to ensure proactive domination.
                At the end of the day, going forward, a new normal that has evolved from operational.
              </p>
              <div className="mt-5 grid gap-2">
                {reasons.map(([label, Icon]) => (
                  <div key={label} className="flex items-center gap-3 border-b border-white/20 pb-2 text-[8px] font-bold">
                    <Icon className="h-5 w-5" strokeWidth={1.4} />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-[.55fr_1fr]">
              <img src={additionalImage} alt="Aamar Al Watheq mechanic" className="h-[230px] w-full object-cover" />
              <div>
                <h2 className="text-[18px] font-extrabold">Additional Services</h2>
                <ul className="mt-4 grid gap-1.5 text-[7px] text-white/90">
                  {additionalServices.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check className="h-3 w-3 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-9 grid items-center gap-4 bg-white p-4 text-[#111] sm:grid-cols-[1fr_auto_auto]">
            <div>
              <h3 className="text-[12px] font-extrabold">Schedule Your Appointment Today</h3>
              <p className="text-[7px] text-gray-500">Your Automotive Repair & Maintenance Service Specialist</p>
            </div>
            <div className="text-[20px] font-extrabold">1800.456.7890</div>
            <a href="#estimate" className="bg-[#ed1017] px-5 py-2.5 text-[7px] font-extrabold uppercase text-white">
              Appointment
            </a>
          </div>
        </div>
      </section>

      {/* LEADER */}
      <section id="news" className="relative overflow-hidden bg-[#07132e]">
        <img src={leaderImage} alt="Aamar Al Watheq service" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#07132e]/75" />
        <div className="relative mx-auto flex min-h-[255px] max-w-[1040px] items-center px-5 sm:px-8">
          <div className="text-white">
            <p className="text-[7px] text-white/70">Working since 1992</p>
            <h2 className="mt-2 text-[26px] font-extrabold leading-[1.0]">
              We are leader
              <br />
              in Car Mechanical Work
            </h2>
            <button className="mt-5 flex items-center gap-2 text-[7px] font-bold uppercase">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600">
                <Play className="ml-0.5 h-4 w-4 fill-current" />
              </span>
              Watch intro video
            </button>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-[#f5f7fb] px-5 py-12 sm:px-8">
        <div className="mx-auto max-w-[1040px]">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.3fr]">
            <div>
              <h2 className="text-[22px] font-extrabold leading-tight text-[#102044]">
                #1 Quality Trusted
                <br />
                Car Repairing Company
              </h2>
              <p className="mt-4 max-w-[370px] text-[8px] leading-4 text-[#697184]">
                Leverage agile frameworks to provide a robust synopsis for high level overviews.
                Iterative approaches to corporate strategy foster collaborative thinking.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-5 text-center">
              {[
                ["65+", "Dedicated Engineers"],
                ["24+", "Worldwide Auto Branches"],
                ["40+", "Customer Excellence"],
              ].map(([num, label]) => (
                <div key={num}>
                  <Award className="mx-auto h-7 w-7 text-[#102044]" />
                  <div className="mt-2 text-[22px] font-extrabold text-[#102044]">{num}</div>
                  <p className="text-[7px] text-[#6d7482]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-[720px] text-center">
            <img src={testimonialImage} alt="Customer testimonial" className="mx-auto h-16 w-16 rounded-full object-cover" />
            <div className="mt-3 text-[#ed1017]">“</div>
            <p className="mx-auto max-w-[500px] text-[8px] leading-4 text-[#777]">
              Lorem ipsum dolor sit amet, consectetur elit. Vestibulum nec odio sagittis
              quam. Great service, friendly staff and professional workmanship.
            </p>
            <div className="mt-2 text-[7px] font-extrabold uppercase">Michael John</div>
            <div className="text-[6px] text-red-600">CEO of Company</div>
            <div className="mt-4 flex justify-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600" />
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="bg-white px-5 py-9 sm:px-8">
        <div className="mx-auto grid max-w-[1040px] gap-5 sm:grid-cols-4">
          {[
            ["100%", "Satisfaction Guarantee", "Quality service and customer care."],
            ["", "Quality Support", "Our repair services are built around dependable support."],
            ["", "All Car Makes", "Experienced technicians for every vehicle."],
            ["", "Variety Services", "Full-service solutions for all your needs."],
          ].map(([big, title, text]) => (
            <div key={title} className="border-r border-[#ddd] pr-4">
              {big && <div className="text-[18px] font-extrabold text-[#ed1017]">{big}</div>}
              <h3 className="text-[10px] font-extrabold text-[#121a2d]">{title}</h3>
              <p className="mt-2 text-[7px] leading-3.5 text-[#777]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[#f7f8fb] px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-[1040px]">
          <div className="mb-7 flex items-end justify-between gap-5">
            <h2 className="text-[19px] font-extrabold text-[#102044]">Our Team</h2>
            <p className="max-w-[620px] text-right text-[7px] leading-3.5 text-[#777]">
              Bring to the table win-win survival strategies to ensure proactive domination.
              At the end of the day, going forward, a new normal has evolved.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {team.map(([name, role, image]) => (
              <article key={name} className="bg-white">
                <img src={image} alt={name} className="h-[145px] w-full object-cover" />
                <div className="p-3">
                  <h3 className="text-[9px] font-extrabold">{name}</h3>
                  <p className="mt-1 text-[6px] uppercase text-gray-500">{role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ESTIMATOR */}
      <section id="estimate" className="bg-[#f20b12] px-5 py-7 sm:px-8">
        <div className="mx-auto grid max-w-[1040px] items-center gap-5 md:grid-cols-[.65fr_1.35fr]">
          <div className="text-white">
            <h2 className="text-[20px] font-extrabold">Car Repair Estimator</h2>
            <p className="mt-1 text-[7px]">Get a estimate according your car condition</p>
          </div>
          <EstimateForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-[#07132e] text-white">
        <div className="mx-auto grid max-w-[1120px] gap-8 px-5 py-8 sm:px-8 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-[7px] leading-4 text-white/65">
              Complete car low towing facility directly in local areas.
              We provide quality car repair and maintenance services.
            </p>
            <div className="mt-4 flex gap-2">
              {[   Mail].map((Icon, i) => (
                <span key={i} className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30">
                  <Icon className="h-3 w-3" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[9px] font-extrabold uppercase">Useful Links</h3>
            <div className="mt-4 grid gap-2 text-[7px] text-white/65">
              {nav.slice(0, 5).map(([label, href]) => <a key={label} href={href}>{label}</a>)}
            </div>
          </div>

          <div>
            <h3 className="text-[9px] font-extrabold uppercase">Our Services</h3>
            <div className="mt-4 grid gap-2 text-[7px] text-white/65">
              {services.map(([title]) => <span key={title}>{title}</span>)}
            </div>
          </div>

          <div>
            <h3 className="text-[9px] font-extrabold uppercase">Newsletter</h3>
            <p className="mt-4 text-[7px] text-white/65">Get latest updates and offers.</p>
            <div className="mt-3 flex">
              <input className="min-w-0 flex-1 bg-white px-2 py-2 text-[7px] text-black outline-none" placeholder="Enter your email" />
              <button className="bg-[#ed1017] px-3 text-white"><ArrowRight className="h-3 w-3" /></button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-[1120px] flex-col justify-between gap-2 px-5 py-3 text-[6px] text-white/55 sm:flex-row sm:px-8">
            <span>© 2026 Aamar Al Watheq. All rights reserved.</span>
            <span>Privacy Policy &nbsp; | &nbsp; Terms & Conditions</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
