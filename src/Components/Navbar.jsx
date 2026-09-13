import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const sectionPages = {
  "/AutoWorkshop": [
    { label: "Oil Change", path: "/AutoWorkshop/OilChange" },
    { label: "CarWash", path: "/AutoWorkshop/CarWash" },
    { label: "Car Repair", path: "/AutoWorkshop/CarRepair" },
    { label: "Denting", path: "/AutoWorkshop/Denting" },
    { label: "Painting", path: "/AutoWorkshop/Painting" },
    { label: "Car Diagnostics", path: "/AutoWorkshop/Diagnostics" },
    { label: "Maintenance", path: "/AutoWorkshop/Maintenance" },
  ],

  "/RealEstate": [
    { label: "Properties", path: "/RealEstate/Properties" },
    { label: "Residential", path: "/RealEstate/Residential" },
    { label: "Commercial", path: "/RealEstate/Commercial" },
    { label: "Land & Plots", path: "/RealEstate/Land" },
    { label: "Property Management", path: "/RealEstate/Management" },
  ],

  "/ImportExport": [
    { label: "Import", path: "/ImportExport/Import" },
    { label: "Export", path: "/ImportExport/Export" },
    { label: "Customs & Compliance", path: "/ImportExport/Customs" },
    { label: "Freight & Logistics", path: "/ImportExport/Logistics" },
    { label: "Global Trade", path: "/ImportExport/GlobalTrade" },
  ],
};

const navItems = [
  { label: "Home", path: "/" },
  { label: "Auto Work Shop", path: "/AutoWorkshop" },
  { label: "Real Estate", path: "/RealEstate" },
  { label: "Import And Export", path: "/ImportExport" },
  { label: "Contact", path: "/Contact" },
];

function getSection(pathname) {
  if (pathname.startsWith("/AutoWorkshop")) return "/AutoWorkshop";
  if (pathname.startsWith("/RealEstate")) return "/RealEstate";
  if (pathname.startsWith("/ImportExport")) return "/ImportExport";
  return null;
}

// Change these paths if your logo files are stored somewhere else.
const sectionBrand = {
  "/AutoWorkshop": {
    name: "Aamar Auto Work Shop",
    subtitle: "Automotive Excellence",
    logo: "/assets/logos/workshop-logo.png",
    fallback: "AW",
  },
  "/RealEstate": {
    name: "Aamar Real Estate",
    subtitle: "Property • Trust • Value",
    logo: "/assets/logos/real-estate-logo.png",
    fallback: "RE",
  },
  "/ImportExport": {
    name: "Aamar Global Trade",
    subtitle: "Import • Export • Logistics",
    logo: "/assets/logos/import-export-logo.png",
    fallback: "IE",
  },
};

export default function Navbar() {
  const location = useLocation();
  const [pagesOpen, setPagesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);

  const section = getSection(location.pathname);
  const pages = section ? sectionPages[section] : [];

  useEffect(() => {
    setPagesOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setPagesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return (
      location.pathname === path ||
      location.pathname.startsWith(`${path}/`)
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-8">
      <nav className="mx-auto max-w-7xl rounded-2xl border border-[#b89b5d]/25 bg-[#19324f]/95 shadow-2xl shadow-[#19324f]/20 backdrop-blur-xl">
        <div className="flex h-[76px] items-center justify-between px-5 sm:px-7 lg:px-8">
          {/* Dynamic brand: changes automatically by section */}
          <Link
            to="/"
            className="group flex min-w-0 shrink-0 items-center gap-3"
            aria-label={section ? sectionBrand[section].name : "Aamar Al Watheq Home"}
          >
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#b89b5d]/50 bg-white/10 shadow-lg transition duration-300 group-hover:border-[#b89b5d] group-hover:bg-white/15">
              {section ? (
                <img
                  src={sectionBrand[section].logo}
                  alt={sectionBrand[section].name}
                  className="h-full w-full object-contain p-1.5"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.nextElementSibling.style.display = "flex";
                  }}
                />
              ) : null}

              <span
                className={`absolute inset-0 items-center justify-center text-sm font-black tracking-tight text-[#b89b5d] ${
                  section ? "hidden" : "flex"
                }`}
              >
                {section ? sectionBrand[section].fallback : "A"}
              </span>
            </div>

            <div className="hidden min-w-0 sm:block">
              <p className="truncate text-[15px] font-bold uppercase tracking-[0.14em] text-white">
                {section ? sectionBrand[section].name : "Aamar Al Watheq"}
              </p>
              <p className="mt-0.5 truncate text-[9px] uppercase tracking-[0.24em] text-[#b89b5d]">
                {section
                  ? sectionBrand[section].subtitle
                  : "Business • Excellence • Trust"}
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.slice(0, 1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-[#b89b5d]" />
                )}
              </Link>
            ))}

            {navItems.slice(1, 4).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-white/10 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-[#b89b5d]" />
                )}
              </Link>
            ))}

            {/* Dynamic Pages dropdown */}
            {section && (
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setPagesOpen((open) => !open)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                    pagesOpen
                      ? "bg-white/10 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                  aria-expanded={pagesOpen}
                  aria-haspopup="menu"
                >
                  Pages
                  <svg
                    className={`h-4 w-4 transition-transform duration-300 ${
                      pagesOpen ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      d="m5 7.5 5 5 5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div
                  className={`absolute right-0 top-[calc(100%+12px)] w-64 origin-top-right rounded-2xl border border-[#b89b5d]/25 bg-[#19324f]/98 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-200 ${
                    pagesOpen
                      ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                      : "pointer-events-none -translate-y-2 scale-95 opacity-0"
                  }`}
                  role="menu"
                >
                  <div className="mb-1 px-3 py-2">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#b89b5d]">
                      {section === "/AutoWorkshop"
                        ? "Auto Work Shop"
                        : section === "/RealEstate"
                        ? "Real Estate"
                        : "Import And Export"}
                    </p>
                  </div>

                  {pages.map((page) => (
                    <Link
                      key={page.path}
                      to={page.path}
                      role="menuitem"
                      className={`group flex items-center justify-between rounded-xl px-3 py-3 text-sm transition-all duration-200 ${
                        isActive(page.path)
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span>{page.label}</span>
                      <svg
                        className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      >
                        <path
                          d="M4 10h11m-4-4 4 4-4 4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <Link
              to="/Contact"
              className={`ml-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isActive("/Contact")
                  ? "border-[#b89b5d] bg-[#b89b5d] text-[#19324f]"
                  : "border-[#b89b5d]/60 bg-[#b89b5d]/10 text-[#e7d7b5] hover:border-[#b89b5d] hover:bg-[#b89b5d] hover:text-[#19324f]"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-opacity ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-current transition-transform ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          className={`overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden ${
            mobileOpen ? "max-h-[700px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-1 px-4 pb-4 pt-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                  isActive(item.path)
                    ? "bg-white/10 text-white"
                    : "text-white/70"
                }`}
              >
                {item.label}
              </Link>
            ))}

            {section && (
              <div className="mt-2 rounded-2xl border border-white/10 bg-white/5 p-2">
                <p className="px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#b89b5d]">
                  Pages
                </p>

                {pages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className={`block rounded-xl px-3 py-2.5 text-sm ${
                      isActive(page.path)
                        ? "bg-white/10 text-white"
                        : "text-white/65"
                    }`}
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
