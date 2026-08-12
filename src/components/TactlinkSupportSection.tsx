import Image from "next/image";

const tactlinkLinks = {
  website: "https://tactlink.com",
  appStore: "https://apps.apple.com/id/app/tactlink/id1469516661",
  playStore: "https://play.google.com/store/apps/details?id=com.tactlink.app",
};

function AppleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-10 w-10 shrink-0"
      fill="currentColor"
    >
      <path d="M16.365 1.43c0 1.14-.466 2.22-1.22 3.04-.79.86-2.08 1.52-3.16 1.43-.14-1.09.4-2.25 1.13-3.04.8-.86 2.2-1.5 3.25-1.43ZM20.74 17.36c-.55 1.25-.82 1.8-1.53 2.9-.99 1.52-2.38 3.41-4.1 3.43-1.53.02-1.93-.99-4.01-.98-2.08.01-2.52 1-4.05.98-1.72-.02-3.03-1.72-4.02-3.24-2.76-4.25-3.05-9.24-1.35-11.9 1.21-1.9 3.13-3.01 4.93-3.01 1.83 0 2.98 1.01 4.5 1.01 1.47 0 2.37-1.01 4.5-1.01 1.61 0 3.32.88 4.52 2.4-3.97 2.18-3.33 7.85.61 9.42Z" />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-10 w-10 shrink-0"
    >
      <path
        fill="#34A853"
        d="M3.3 1.7c-.24.25-.38.64-.38 1.14v18.32c0 .5.14.89.38 1.14l.06.06 10.28-10.28v-.16L3.36 1.64l-.06.06Z"
      />
      <path
        fill="#4285F4"
        d="m17.06 15.52-3.42-3.44v-.16l3.42-3.44.08.05 4.05 2.3c1.16.66 1.16 1.74 0 2.4l-4.05 2.3-.08.04Z"
      />
      <path
        fill="#FBBC04"
        d="m17.14 15.47-3.5-3.5L3.3 22.3c.38.4 1 .45 1.7.05l12.14-6.88Z"
      />
      <path
        fill="#EA4335"
        d="M17.14 8.53 5 1.65c-.7-.4-1.32-.35-1.7.05l10.34 10.34 3.5-3.51Z"
      />
    </svg>
  );
}

function AppStoreBadge() {
  return (
    <div className="grid w-full grid-cols-[32px_1fr] sm:grid-cols-[54px_1fr] items-center gap-2 sm:gap-4">
      <div className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center">
        <AppleIcon />
      </div>

      <div className="text-left leading-none">
        <p className="text-[9px] sm:text-[12px] font-black uppercase tracking-[0.08em] text-[#070713]/65">
          Download on the
        </p>

        <p className="mt-1 whitespace-nowrap text-sm sm:text-xl font-black leading-none text-[#070713]">
          App Store
        </p>
      </div>
    </div>
  );
}

function PlayStoreBadge() {
  return (
    <div className="grid w-full grid-cols-[32px_1fr] sm:grid-cols-[54px_1fr] items-center gap-2 sm:gap-4">
      <div className="flex h-8 w-8 sm:h-12 sm:w-12 items-center justify-center">
        <PlayStoreIcon />
      </div>

      <div className="text-left leading-none">
        <p className="text-[9px] sm:text-[12px] font-black uppercase tracking-[0.08em] text-[#070713]/65">
          Get it on
        </p>

        <p className="mt-1 whitespace-nowrap text-sm sm:text-xl font-black leading-none text-[#070713]">
          Google Play
        </p>
      </div>
    </div>
  );
}

export default function TactlinkSupportSection() {
  return (
    <section className="relative w-full py-16 px-4 md:px-6 bg-white border-b-8 border-black overflow-hidden">
      <div className="mx-auto max-w-[1140px] relative z-10">
        <div className="bg-white comic-border comic-shadow-lg px-6 py-8 sm:py-12 md:px-12 md:py-14 rounded-3xl transform rotate-1">
          <div className="relative z-10 grid gap-6 sm:gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            
            {/* Left Content */}
            <div className="flex flex-col">
              <span className="bg-bgs-yellow text-black comic-border comic-shadow-sm px-4 py-2 font-black text-xs md:text-sm uppercase inline-block transform -rotate-2 w-fit mb-4">
                Website Supported By
              </span>

              <div className="flex flex-row items-center gap-4 sm:gap-6 mt-2">
                <div className="flex h-20 w-20 sm:h-24 sm:w-24 shrink-0 items-center justify-center bg-white p-2 sm:p-4 comic-border comic-shadow-sm rounded-2xl sm:rounded-3xl transform rotate-1">
                  <Image
                    src="/logo/logo-tactlink.webp"
                    alt="Tactlink Logo"
                    width={180}
                    height={180}
                    className="h-full w-full object-contain"
                    priority
                  />
                </div>

                <div className="min-w-0 flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight text-black uppercase italic text-outline-black-sm mb-2">
                    Connect smarter with{" "}
                    <span className="text-bgs-blue">Tactlink</span>
                  </h2>
                  <p className="max-w-xl leading-snug sm:leading-relaxed text-sm sm:text-base text-black font-bold">
                    Experience smarter networking and modern digital business cards.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Button */}
            <a
              href={tactlinkLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 rounded-2xl bg-bgs-blue comic-border comic-shadow-sm px-6 sm:px-8 py-3 sm:py-4 font-black uppercase text-white transition-all hover:-translate-y-1 hover:bg-white hover:text-black w-full sm:w-auto text-sm sm:text-lg mt-4 lg:mt-0 transform -rotate-1"
            >
              Visit Tactlink
              <span className="material-symbols-outlined font-bold text-lg sm:text-xl">open_in_new</span>
            </a>
          </div>

          <div className="relative z-10 mt-8 sm:mt-10 border-t-4 border-black border-dashed pt-8 flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Store Badges */}
            <div className="flex flex-row flex-wrap items-center gap-4 w-full lg:w-auto justify-center sm:justify-start">
              <a
                href={tactlinkLinks.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none group flex h-[60px] sm:h-[76px] items-center justify-center rounded-2xl bg-white px-4 sm:px-6 comic-border comic-shadow-sm transition-all hover:-translate-y-1 hover:bg-bgs-yellow sm:w-[260px] transform rotate-1 text-black"
              >
                <AppStoreBadge />
              </a>

              <a
                href={tactlinkLinks.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none group flex h-[60px] sm:h-[76px] items-center justify-center rounded-2xl bg-white px-4 sm:px-6 comic-border comic-shadow-sm transition-all hover:-translate-y-1 hover:bg-bgs-yellow sm:w-[260px] transform -rotate-1 text-black"
              >
                <PlayStoreBadge />
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-6 bg-bgs-yellow comic-border comic-shadow-sm px-4 sm:px-6 py-3 sm:py-4 rounded-2xl text-center sm:text-left flex-wrap sm:flex-nowrap transform rotate-1">
              <p className="text-sm sm:text-lg font-black text-black uppercase">
                10,000+ Cards Shared
              </p>
              <div className="hidden sm:block h-2 w-2 rounded-full bg-black" />
              <p className="inline-flex items-center gap-2 text-xs sm:text-base font-bold text-black uppercase">
                <span className="material-symbols-outlined text-lg sm:text-xl font-black">public</span>
                Available in 8 Countries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}