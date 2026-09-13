import React, { useState } from "react";
import {
  ArrowRight, Award, BadgeCheck, Car, Check, ChevronRight, Clock3,
 Mail, MapPin, Menu, Phone, Play, ShieldCheck,
  Star, Users, Wrench, X, 
} from "lucide-react";

import heroImage from "../Images/hero-denting.svg";
import pdrImage from "../Images/pdr-repair.svg";
import panelImage from "../Images/panel-beating.svg";
import bumperImage from "../Images/bumper-repair.svg";
import dentImage from "../Images/dent-puller.svg";
import paintImage from "../Images/paint-match.svg";
import workshopImage from "../Images/workshop.svg";
import Navbar from "../Components/Navbar";

const services = [
  ["Paintless Dent Repair", pdrImage, "Remove eligible dents while preserving the original factory paint."],
  ["Panel Beating", panelImage, "Restore damaged panels to their correct shape, gaps and alignment."],
  ["Bumper Repair", bumperImage, "Repair bumper dents, cracks and impact damage before refinishing."],
  ["Dent Removal", dentImage, "Professional dent pulling and reshaping using controlled body-repair techniques."],
  ["Colour Matching", paintImage, "Match repaired panels with a clean, consistent factory-style finish."],
  ["Accident Body Repair", workshopImage, "Restore collision-damaged bodywork with inspection, alignment and finishing."],
];

const team = [
  ["Michael Joe", "Senior Denting Specialist", pdrImage],
  ["Mark John", "Panel Beating Expert", panelImage],
  ["Mery Desulva", "Body Repair Specialist", paintImage],
  ["John Ichaile", "Workshop Technician", workshopImage],
];

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-2 text-white">
      <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-red-500">
        <Car className="h-5 w-5 text-red-500" />
      </span>
      <span className="leading-none">
        <b className="block text-[15px] font-black italic">AAMAR</b>
        <b className="block text-[11px] font-black text-red-500">AL WATHEQ</b>
        <small className="text-[6px] uppercase tracking-[.18em] text-white/60">Car Denting & Body Care</small>
      </span>
    </a>
  );
}

function BookingForm() {
  const [sent, setSent] = useState(false);
  return (
    <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-3 sm:grid-cols-2">
      <input className="cd-field" required placeholder="Your Name" />
      <input className="cd-field" required placeholder="Phone / WhatsApp" />
      <input className="cd-field" placeholder="Car Make & Model" />
      <select className="cd-field" defaultValue="">
        <option value="" disabled>Service Needed</option>
        <option>Paintless Dent Repair</option><option>Panel Beating</option>
        <option>Bumper Repair</option><option>Accident Body Repair</option>
      </select>
      <input className="cd-field" type="date" />
      <select className="cd-field" defaultValue="">
        <option value="" disabled>Preferred Time</option>
        <option>09:00 AM</option><option>11:00 AM</option><option>02:00 PM</option><option>04:00 PM</option>
      </select>
      <textarea className="cd-field min-h-24 sm:col-span-2" placeholder="Describe the dent or damage (optional)" />
      <button className="sm:col-span-2 flex items-center justify-center gap-2 bg-red-600 px-5 py-3.5 text-xs font-black uppercase text-white hover:bg-red-700">
        Request Free Estimate <ArrowRight className="h-4 w-4" />
      </button>
      {sent && <p className="sm:col-span-2 text-center text-xs font-bold text-green-600">Request received — we will contact you shortly.</p>}
    </form>
  );
}

export default function CarDenting() {
  const [open, setOpen] = useState(false);
  const nav = [["HOME","#home"],["ABOUT US","#about"],["DENTING SERVICES","#services"],["OUR WORK","#work"],["WHY CHOOSE US","#why"],["CONTACT","#contact"]];

  return (
    <div className="min-h-screen bg-[#f4f5f7] font-sans text-[#101a35]">
      <style>{`
        html{scroll-behavior:smooth}
        .cd-field{width:100%;border:1px solid #d8dce4;background:#fff;padding:11px 13px;font-size:12px;outline:0}
        .cd-field:focus{border-color:#ed1017;box-shadow:0 0 0 2px rgba(237,16,23,.08)}
      `}</style>

<Navbar/>

      <section id="home" className="relative min-h-[590px] overflow-hidden bg-[#07132e]">
        <img src={heroImage} alt="Professional car denting" className="absolute inset-0 h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#07132e]/95 via-[#07132e]/55 to-transparent"/>
        <div className="relative mx-auto flex min-h-[590px] max-w-[1180px] items-center px-6">
          <div className="max-w-[590px] text-white">
            <p className="text-[10px] font-black uppercase tracking-[.22em] text-red-500">Aamar Al Watheq • Professional Body Care</p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-[.98] sm:text-6xl">Expert Car Denting.<br/><span className="text-red-500">Perfect Finish.</span></h1>
            <p className="mt-6 max-w-[510px] text-sm leading-6 text-white/80">Professional dent removal, panel beating, bumper repair and body restoration for all vehicle makes and models.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className="flex items-center gap-2 bg-red-600 px-6 py-3.5 text-[10px] font-black uppercase">Book A Service <ArrowRight className="h-4 w-4"/></a>
              <a href="#work" className="flex items-center gap-2 border border-white/35 bg-white/10 px-6 py-3.5 text-[10px] font-black uppercase"><Play className="h-4 w-4 fill-white"/> View Our Work</a>
            </div>
            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[["10+","Years Experience"],["5K+","Cars Repaired"],["30+","Expert Staff"],["100%","Quality Focus"]].map(([n,t])=>
                <div key={t} className="border-l-2 border-red-600 pl-3"><b className="text-lg">{n}</b><small className="block text-[8px] uppercase text-white/60">{t}</small></div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="bg-white px-5 py-14">
        <div className="mx-auto grid max-w-[1080px] items-center gap-10 md:grid-cols-2">
          <img src={pdrImage} alt="Paintless dent repair" className="h-[350px] w-full object-cover"/>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[.2em] text-red-600">Why Aamar Al Watheq</p>
            <h2 className="mt-2 text-3xl font-black uppercase sm:text-4xl">We Restore The Shape Of Your Car</h2>
            <p className="mt-5 text-sm leading-6 text-slate-500">From small parking dents to accident-damaged panels, our denting specialists focus on accurate shaping, panel alignment and a clean final finish.</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[[BadgeCheck,"Experienced Technicians"],[Wrench,"Professional Tools"],[ShieldCheck,"Quality Work"],[Clock3,"Reliable Turnaround"]].map(([I,t])=>
                <div key={t} className="flex items-center gap-2"><I className="h-5 w-5 text-red-600"/><span className="text-[10px] font-black">{t}</span></div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f4f5f7] px-5 py-14">
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center">
            <p className="text-[10px] font-black uppercase tracking-[.2em] text-red-600">Our Automotive Services</p>
            <h2 className="mt-2 text-3xl font-black uppercase">Car Denting & Body Repair</h2>
            <p className="mx-auto mt-3 max-w-[650px] text-xs leading-5 text-slate-500">Specialized body repair services for dents, damaged panels, bumpers and accident-related exterior damage.</p>
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(([title,image,text])=><article key={title} className="group overflow-hidden bg-white shadow-sm ring-1 ring-slate-200 hover:-translate-y-1 hover:shadow-lg">
              <div className="h-48 overflow-hidden"><img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105"/></div>
              <div className="p-5"><h3 className="text-sm font-black uppercase">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{text}</p><a href="#contact" className="mt-4 inline-flex items-center gap-2 text-[10px] font-black uppercase text-red-600">Learn More <ChevronRight className="h-3 w-3"/></a></div>
            </article>)}
          </div>
          <div className="mt-8 text-center"><a href="#contact" className="inline-flex items-center gap-2 border-2 border-[#101a35] px-7 py-3 text-[10px] font-black uppercase">Get A Free Estimate <ArrowRight className="h-4 w-4"/></a></div>
        </div>
      </section>

      <section id="why" className="bg-red-600 px-5 py-14 text-white">
        <div className="mx-auto grid max-w-[1080px] gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[.2em] text-white/70">Why Choose Us</p>
            <h2 className="mt-2 text-3xl font-black uppercase">Quality Denting. Honest Service.</h2>
            <p className="mt-4 text-sm leading-6 text-white/80">A proper dent repair is about more than making a panel look better. We inspect the damage, explain the repair and focus on clean alignment and finishing.</p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {["Certified Repair Experts","Transparent Estimates","Modern Denting Tools","All Car Makes","Careful Panel Alignment","Quality Finish"].map(t=><div key={t} className="flex items-center gap-3 border-b border-white/20 pb-3 text-xs font-bold"><Check className="h-4 w-4"/>{t}</div>)}
            </div>
          </div>
          <img src={panelImage} alt="Panel beating" className="h-[360px] w-full object-cover"/>
        </div>
      </section>

      <section className="bg-white px-5 py-14">
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center"><p className="text-[10px] font-black uppercase tracking-[.2em] text-red-600">Simple Process</p><h2 className="mt-2 text-3xl font-black uppercase">How It Works</h2></div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[["01","INSPECT","We check the dent, panel and paint condition."],["02","QUOTE","You receive a clear estimate before repair."],["03","REPAIR","Our team restores the body panel carefully."],["04","CHECK","We inspect the finished repair before delivery."]].map(([n,t,d])=><div key={n} className="text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-full border-2 border-red-600 text-sm font-black text-red-600">{n}</div><h3 className="mt-4 text-sm font-black">{t}</h3><p className="mt-2 text-xs leading-5 text-slate-500">{d}</p></div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#07132e] px-5 py-14">
        <img src={workshopImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20"/>
        <div className="absolute inset-0 bg-[#07132e]/85"/>
        <div className="relative mx-auto max-w-[1080px]">
          <div className="mb-8 text-white"><p className="text-[10px] font-black uppercase tracking-[.2em] text-red-500">Free Repair Estimate</p><h2 className="mt-2 text-3xl font-black uppercase sm:text-4xl">Need Your Car Dented Today?</h2><p className="mt-3 text-sm text-white/60">Send your details and tell us what happened. We will guide you through the next step.</p></div>
          <div className="grid gap-8 lg:grid-cols-[1fr_.65fr]">
            <div className="bg-white p-5 sm:p-7"><BookingForm/></div>
            <div className="text-white">
              <div className="border-b border-white/15 pb-5"><Phone className="h-6 w-6 text-red-500"/><p className="mt-2 text-[9px] uppercase text-white/50">Call / WhatsApp</p><b className="text-2xl">1800 456 7890</b></div>
              <div className="mt-5 border-b border-white/15 pb-5"><MapPin className="h-6 w-6 text-red-500"/><p className="mt-2 text-sm font-bold">Aamar Al Watheq Denting Centre</p><p className="mt-1 text-xs text-white/55">Professional car body repair workshop</p></div>
              <div className="mt-5 grid gap-3">{["Free inspection","Clear estimate","Professional dent repair","Quality-focused finishing"].map(t=><div key={t} className="flex gap-2 text-xs"><Check className="h-4 w-4 text-red-500"/>{t}</div>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="bg-white px-5 py-14">
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center"><p className="text-[10px] font-black uppercase tracking-[.2em] text-red-600">Workshop Gallery</p><h2 className="mt-2 text-3xl font-black uppercase">Our Denting Work</h2></div>
          <div className="mt-8 grid gap-4 md:grid-cols-3"><img src={dentImage} className="h-64 w-full object-cover" alt="Dent repair"/><img src={bumperImage} className="h-64 w-full object-cover" alt="Bumper repair"/><img src={paintImage} className="h-64 w-full object-cover" alt="Colour matching"/></div>
        </div>
      </section>

      <section className="bg-[#f4f5f7] px-5 py-14">
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center"><p className="text-[10px] font-black uppercase tracking-[.2em] text-red-600">Our Specialists</p><h2 className="mt-2 text-3xl font-black uppercase">Meet Our Team</h2></div>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">{team.map(([name,role,image])=><article key={name} className="overflow-hidden bg-white shadow-sm"><img src={image} alt={name} className="h-52 w-full object-cover"/><div className="p-4"><b className="text-sm">{name}</b><p className="mt-1 text-[9px] font-black uppercase text-red-600">{role}</p></div></article>)}</div>
        </div>
      </section>

      <section className="bg-white px-5 py-12">
        <div className="mx-auto grid max-w-[1080px] gap-4 md:grid-cols-4">{[[Award,"QUALITY WORK"],[ShieldCheck,"TRUSTED SERVICE"],[Users,"EXPERT TEAM"],[Star,"CUSTOMER CARE"]].map(([I,t])=><div key={t} className="flex items-center gap-3 border border-slate-200 p-5"><I className="h-7 w-7 text-red-600"/><b className="text-[10px]">{t}</b></div>)}</div>
      </section>

      <footer className="bg-[#07132e] text-white">
        <div className="mx-auto grid max-w-[1080px] gap-9 px-5 py-12 md:grid-cols-4">
          <div><Logo/><p className="mt-5 text-xs leading-5 text-white/50">Aamar Al Watheq provides professional denting, panel beating, bumper repair and car body restoration.</p><div className="mt-5 flex gap-2">{[Mail].map((I,i)=><span key={i} className="grid h-8 w-8 place-items-center rounded-full border border-white/20"><I className="h-3.5 w-3.5"/></span>)}</div></div>
          <div><b className="text-xs uppercase">Useful Links</b><div className="mt-5 grid gap-3 text-xs text-white/50">{nav.map(([t,h])=><a key={t} href={h} className="hover:text-white">{t}</a>)}</div></div>
          <div><b className="text-xs uppercase">Denting Services</b><div className="mt-5 grid gap-3 text-xs text-white/50">{services.map(([t])=><span key={t}>{t}</span>)}</div></div>
          <div><b className="text-xs uppercase">Contact Us</b><div className="mt-5 grid gap-4 text-xs text-white/50"><span className="flex gap-2"><Phone className="h-4 w-4 text-red-500"/>1800 456 7890</span><span className="flex gap-2"><MapPin className="h-4 w-4 text-red-500"/>Aamar Al Watheq Workshop</span><span className="flex gap-2"><Mail className="h-4 w-4 text-red-500"/>info@aamaralwatheq.com</span></div></div>
        </div>
        <div className="border-t border-white/10 px-5 py-4 text-center text-[9px] text-white/40">© 2026 Aamar Al Watheq. All Rights Reserved.</div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 flex lg:hidden"><a href="tel:18004567890" className="flex flex-1 items-center justify-center gap-2 bg-[#07132e] py-3 text-[10px] font-black text-white"><Phone className="h-4 w-4"/> CALL</a><a href="#contact" className="flex flex-1 items-center justify-center gap-2 bg-red-600 py-3 text-[10px] font-black text-white">BOOK NOW <ArrowRight className="h-4 w-4"/></a></div>
    </div>
  );
}
