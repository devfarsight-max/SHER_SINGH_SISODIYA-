import { Link } from "react-router-dom";
import { navigation } from "../../data/business";

export default function Footer() {
  return (
    <footer className="bg-[#678458] px-5 pb-8 pt-16 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="grid size-14 place-items-center rounded-2xl bg-[#678458] p-1">
              <img src="/logo-mark.svg" alt="" className="h-full w-full object-contain drop-shadow-[0_2px_3px_rgba(17,53,38,.22)]" />
            </span>
            <strong className="leading-tight">
              SHER SINGH
              <br />
              SISODIYA
              <span className="mt-1 block text-[9px] font-medium tracking-[.3em] text-[#d7f1b1]">ENTERPRISE</span>
            </strong>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
            Procurement and wholesale supply of fresh raw milk for processors,
            businesses, hospitality, and institutional buyers.
          </p>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#c7e7a1]">
            Explore
          </h3>
          <div className="mt-5 grid gap-3">
            {navigation.slice(0, 3).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-white/60 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#c7e7a1]">
            Business
          </h3>
          <div className="mt-5 grid gap-3">
            {navigation.slice(3).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm text-white/60 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#c7e7a1]">
            Connect
          </h3>
          <p className="mt-5 text-sm leading-7 text-white/60">
            For supply requirements and business partnerships:
          </p>
          <a
            href="mailto:info@shersinghsisodiya.com"
            className="mt-3 block break-all text-sm text-white hover:text-[#d7f1b1]"
          >
            info@shersinghsisodiya.com
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 pt-7 text-xs text-white/40 sm:flex-row">
        <p>
          © {new Date().getFullYear()} Sher Singh Sisodiya. All rights reserved.
        </p>
        <p>Raw Milk Procurement & Wholesale Supply</p>
      </div>
    </footer>
  );
}


