import Image from "next/image";

type Project = {
  name: string;
  href: string;
  logo: string;
  alt: string;
};

const projects: Project[] = [
  {
    name: "Bagaran Agency",
    href: "https://www.bagaranagency.com",
    logo: "/logos/bagaran-light.webp",
    alt: "Bagaran Agency logo",
  },
  {
    name: "Lyovson.com",
    href: "https://www.lyovson.com",
    logo: "/logos/crest-dark-simple.png",
    alt: "Lyovson crest logo",
  },
  {
    name: "Avenews",
    href: "https://www.avenews.am",
    logo: "/logos/avenews-logo.png",
    alt: "Avenews logo",
  },
];

export default function Home() {
  return (
    <div className="h-dvh overflow-hidden flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-4">
        <Image
          src="/logos/roadcorp-logo-dark.png"
          alt="Roadcorp logo"
          width={200}
          height={200}
          priority
          sizes="(max-width: 640px) 140px, 200px"
          className="drop-shadow-sm fade-up mx-auto"
        />
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight fade-up [animation-delay:.08s]">
          The Road to Infinity
        </h1>
      </section>

      {/* Road scroller */}
      <section id="work" className="py-4 sm:py-6">
        <div className="relative">
          <div className="road border mx-6 sm:mx-auto max-w-7xl overflow-hidden">
            <div className="marquee" role="region" aria-label="Featured projects" aria-live="off">
              <ul className="marquee-track items-stretch gap-6 sm:gap-8 px-6 py-6 sm:py-8">
                {[...projects, ...projects].map((p, idx) => {
                  const hidden = idx >= projects.length;
                  return (
                    <li
                      key={`${p.name}-${idx}`}
                      className="inline-block align-top"
                      aria-hidden={hidden}
                    >
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={p.name}
                        tabIndex={hidden ? -1 : 0}
                        className="block w-[70vw] sm:w-[380px] md:w-[480px]"
                      >
                        <div className="lift border bg-background/70 backdrop-blur-sm p-5 sm:p-6 flex items-center gap-4 sm:gap-5">
                          <Image
                            src={p.logo}
                            alt={p.alt}
                            width={64}
                            height={64}
                            className="size-12 sm:size-16 object-contain"
                            loading="lazy"
                          />
                          <div className="min-w-0">
                            <h3 className="text-lg sm:text-xl font-semibold tracking-tight truncate">
                              {p.name}
                            </h3>
                            <p className="text-sm text-foreground/60 truncate">
                              {new URL(p.href).hostname}
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
