import React from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleArrowUp,
  Droplets,
  Menu,
  Palette,
  Phone,
  Sparkles,
  SprayCan,
  Star,
  X,
} from "lucide-react";

// Put the matching car images in your project's ../Images folder.
// If your filenames are different, only change the import paths below.
import heroCar from "../Images/hero-car.png";
import fullCar from "../Images/full-car.png";
import detailedCar from "../Images/detailed-car.png";
import calipers from "../Images/calipers.png";
import wheels from "../Images/wheels.png";
import localCar from "../Images/local-car.png";
import finalCars from "../Images/final-cars.png";
import Navbar from "../Components/Navbar";

const paintingTypes = [
  {
    title: "FULL CAR PAINTING",
    image: fullCar,
  },
  {
    title: "DETAILED CAR PAINTING",
    image: detailedCar,
  },
  {
    title: "PAINTING OF CALIPERS",
    image: calipers,
  },
  {
    title: "PAINTING OF WHEELS",
    image: wheels,
  },
  {
    title: "LOCAL CAR PAINTING",
    image: localCar,
  },
];

const features = [
  {
    title: "COLOR HIT 100%",
    text: "The exact selection of the palette from our experts ensures every difference with your current car is covered.",
  },
  {
    title: "CLUB SERVICE №1",
    text: "It is not for nothing that dozens of satisfied customers trust us with their cars and quality of work.",
  },
  {
    title: "EXACTLY ACCORDING TO YOUR BUDGET",
    text: "We will offer several open options even for the same type of repair. Let the nearest shop be the process.",
  },
  {
    title: "FRIENDS WON'T SEE THE DIFFERENCE",
    text: "According to statistics, out of 10 of the closest acquaintances, not one will say there is a change in your car.",
  },
];

function Button({ children, dark = false }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-[11px] font-medium transition-all duration-300 ${
        dark
          ? "bg-white text-black hover:bg-[#3972e6] hover:text-white"
          : "bg-[#3c6fd8] text-white hover:bg-[#4d80ec]"
      }`}
    >
      {children}
    </button>
  );
}

function SectionTitle({ children, className = "" }) {
  return (
    <h2
      className={`max-w-[570px] text-[34px] font-light uppercase leading-[0.96] tracking-[-0.035em] text-white sm:text-[42px] ${className}`}
    >
      {children}
    </h2>
  );
}

function PaintingCard({ item }) {
  return (
    <article className="group relative min-h-[175px] overflow-hidden rounded-[3px] border border-[#272727] bg-[#1c1c1c] transition duration-300 hover:border-[#3d70dc]">
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#171717]/95 via-[#171717]/35 to-transparent" />
      <div className="relative flex h-full min-h-[175px] flex-col justify-between p-4">
        <h3 className="max-w-[190px] text-[10px] font-medium uppercase text-white">
          {item.title}
        </h3>
        <a
          href="#contact"
          className="inline-flex items-center gap-1 text-[8px] text-white transition hover:text-[#4d7fe3]"
        >
          Learn more <ArrowRight className="h-2.5 w-2.5" />
        </a>
      </div>
    </article>
  );
}

function FeatureCard({ title, text }) {
  return (
    <article className="border border-[#252525] bg-[#1d1d1d] p-4">
      <h3 className="text-[10px] font-medium uppercase text-white">{title}</h3>
      <p className="mt-3 text-[8px] font-light leading-[1.5] text-[#a1a1a1]">
        {text}
      </p>
    </article>
  );
}

export default function CarPaint() {
  const [open, setOpen] = React.useState(false);

  const links = [
    ["Home", "#home"],
    ["Service", "#services"],
    ["Shop", "#services"],
    ["Company", "#company"],
    ["Contacts", "#contact"],
  ];

  return (
    <div className="min-h-screen bg-[#191919] font-sans text-white selection:bg-[#3d70dc] selection:text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute left-[8%] top-[4%] h-[520px] w-[520px] rounded-full bg-[#174aab]/20 blur-[150px]" />
        <div className="absolute right-[3%] top-[35%] h-[520px] w-[520px] rounded-full bg-[#1d55c0]/10 blur-[170px]" />
        <div className="absolute left-[20%] bottom-[5%] h-[450px] w-[650px] rounded-full bg-[#123d93]/20 blur-[150px]" />
      </div>

<Navbar/>

      <main className="relative z-10">
        {/* HERO */}
        <section
          id="home"
          className="mx-auto flex min-h-[700px] max-w-[1120px] flex-col items-center justify-center px-5 pb-20 pt-28 text-center sm:px-8"
        >
          <h1 className="max-w-[690px] text-[44px] font-light uppercase leading-[0.92] tracking-[-0.045em] text-white sm:text-[66px]">
            TURN THE COLOR
            <br />
            TO THE MAXIMUM
          </h1>

          <p className="mt-6 max-w-[360px] text-[9px] font-light leading-[1.55] text-[#9b9b9b]">
            We offer a wide range of services from partial
            <br className="hidden sm:block" />
            painting to complete restoration of cars.
          </p>

          <div className="mt-5">
            <Button>Callback</Button>
          </div>

          <div className="relative mt-8 w-full max-w-[780px]">
            <div className="absolute bottom-[3%] left-1/2 h-24 w-[76%] -translate-x-1/2 rounded-full bg-[#4b73bd]/35 blur-[38px]" />
            <img
              src={heroCar}
              alt="Blue car"
              className="relative mx-auto h-auto w-full object-contain"
            />
          </div>
        </section>

        {/* COMPANY INTRO */}
        <section
          id="company"
          className="mx-auto grid max-w-[1120px] gap-12 px-5 py-24 sm:px-8 md:grid-cols-2 md:gap-20"
        >
          <SectionTitle>
            WE OFFER PAINTING
            <br />
            SERVICES FOR CARS
            <br />
            OF ALL BRANDS
          </SectionTitle>

          <div className="flex flex-col justify-center">
            <p className="text-[10px] font-light leading-[1.65] text-[#9d9d9d]">
              Our efforts are focused on constantly being able and improving
              car body repair and painting techniques. We are constantly
              gaining new equipment and high quality materials.
            </p>
            <p className="mt-4 text-[10px] font-light leading-[1.65] text-[#9d9d9d]">
              We are highly standards aimed to obtain certificates for the
              quality of services, ensuring the repair of cars and
              manufacturing of new parts as close as possible to the original
              equipment condition.
            </p>
            <div className="mt-6">
              <Button>About company</Button>
            </div>
          </div>
        </section>

        {/* PAINTING TYPES */}
        <section id="services" className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8">
          <SectionTitle>Types of car painting</SectionTitle>

          <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {paintingTypes.map((item) => (
              <PaintingCard key={item.title} item={item} />
            ))}

            <article className="flex min-h-[175px] flex-col justify-between bg-[#3d70dc] p-5">
              <h3 className="max-w-[180px] text-[11px] font-medium uppercase leading-[1.1]">
                Leave a request for a free consultation
              </h3>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-[8px] text-white"
              >
                Callback <ArrowRight className="h-2.5 w-2.5" />
              </a>
            </article>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mx-auto max-w-[1120px] px-5 py-24 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionTitle>
                WE CAN DO WHAT
                <br />
                OTHERS CAN&apos;T DO!
              </SectionTitle>
              <p className="mt-8 max-w-[310px] text-[9px] font-light leading-[1.65] text-[#989898]">
                We handle any problems and ensure maximum efficiency for you.
                We strive to make the result comfortable and accessible to the
                customer.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          id="contact"
          className="relative mx-auto flex max-w-[1120px] flex-col items-center overflow-hidden px-5 pb-0 pt-28 text-center sm:px-8"
        >
          <div className="absolute bottom-0 left-1/2 h-[350px] w-[760px] -translate-x-1/2 rounded-full bg-[#153f94]/35 blur-[110px]" />

          <h2 className="relative max-w-[650px] text-[38px] font-light uppercase leading-[0.96] tracking-[-0.035em] sm:text-[52px]">
            STAND OUT FROM THE
            <br />
            CROWD WITH MAX COLOR
          </h2>

          <p className="relative mt-5 max-w-[300px] text-[8px] leading-[1.5] text-[#9b9b9b]">
            Leave a request for painting your car
            <br />
            and we will contact you.
          </p>

          <div className="relative mt-5">
            <Button>Callback</Button>
          </div>

          <img
            src={finalCars}
            alt="Cars painted by Aamar Al Watheq"
            className="relative mt-12 w-full max-w-[800px] object-contain"
          />
        </section>
      </main>

      {/* FOOTER */}
      <footer className="mx-auto max-w-[1120px] border-t border-[#2b2b2b] px-5 py-10 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-[11px] font-semibold uppercase">AAMAR AL WATHEQ</h3>
            <p className="mt-5 text-[8px] leading-[1.7] text-[#888]">
              Car painting and restoration services for modern vehicles.
            </p>
            <p className="mt-5 text-[7px] text-[#777]">
              © 2026 Aamar Al Watheq
            </p>
          </div>

          <div>
            <h4 className="text-[8px] uppercase text-white">Home</h4>
            <div className="mt-4 grid gap-2">
              {links.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-[8px] text-[#777] hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[8px] uppercase text-white">Our contacts</h4>
            <div className="mt-4 grid gap-2 text-[8px] text-[#777]">
              <span>+1 234 567 8900</span>
              <span>info@aamar-al-watheq.com</span>
              <span>Mon–Sat, 09:00–18:00</span>
            </div>
          </div>

          <div>
            <h4 className="text-[8px] uppercase text-white">Services</h4>
            <div className="mt-4 grid gap-2 text-[8px] text-[#777]">
              <span>Full car painting</span>
              <span>Detailed painting</span>
              <span>Caliper painting</span>
              <span>Wheel painting</span>
              <span>Local car painting</span>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="#home"
        aria-label="Back to top"
        className="fixed bottom-5 right-5 z-40 flex h-9 w-9 items-center justify-center rounded-full border border-[#3a3a3a] bg-[#1d1d1d] text-[#aaa] shadow-lg transition hover:border-[#3d70dc] hover:text-white"
      >
        <CircleArrowUp className="h-4 w-4" />
      </a>
    </div>
  );
}
