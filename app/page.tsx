import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

type Project = {
  name: string;
  href: string;
  logo: string;
  alt: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    name: "Bagaran Agency",
    href: "https://www.bagaranagency.com",
    logo: "/logos/bagaran-light.webp",
    alt: "Bagaran Agency logo",
    description: "Creative digital agency specializing in brand identity and web development",
    tags: ["Design", "Branding", "Web Dev"]
  },
  {
    name: "Lyovson.com",
    href: "https://www.lyovson.com",
    logo: "/logos/crest-dark-simple.png",
    alt: "Lyovson crest logo",
    description: "Personal portfolio and blog featuring design insights and projects",
    tags: ["Portfolio", "Design", "Blog"]
  },
  {
    name: "Avenews",
    href: "https://www.avenews.am",
    logo: "/logos/avenews-logo.png",
    alt: "Avenews logo",
    description: "Armenian news platform delivering timely and accurate journalism",
    tags: ["News", "Media", "Armenia"]
  },
];

export default function Home() {
  return (
    <TooltipProvider>
      <main className="h-dvh overflow-hidden flex flex-col">
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
          <div className="road border-y overflow-hidden w-full">
            <div className="marquee" role="region" aria-label="Featured projects" aria-live="off">
              <ul className="marquee-track items-stretch gap-6 sm:gap-8 px-6 py-6 sm:py-8">
                {Array.from({ length: 12 }, (_, i) => projects[i % projects.length]).map((p, idx) => {
                  const hidden = idx >= projects.length;
                  return (
                    <li
                      key={`${p.name}-${idx}`}
                      className="inline-block align-top"
                      aria-hidden={hidden}
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="lg"
                            asChild
                            className="lift h-auto w-[70vw] sm:w-[380px] md:w-[480px] p-5 sm:p-6 border border-border bg-card/70 backdrop-blur-sm hover:bg-card/90 transition-all duration-200"
                            tabIndex={hidden ? -1 : 0}
                          >
                            <a
                              href={p.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Visit ${p.name}`}
                              className="flex items-center gap-4 sm:gap-5 text-left"
                            >
                              <Image
                                src={p.logo}
                                alt={p.alt}
                                width={64}
                                height={64}
                                className="size-12 sm:size-16 object-contain flex-shrink-0"
                                loading="lazy"
                              />
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  <h3 className="text-lg sm:text-xl font-semibold tracking-tight truncate">
                                    {p.name}
                                  </h3>
                                  <ExternalLink className="size-4 text-muted-foreground flex-shrink-0" />
                                </div>
                                <p className="text-sm text-muted-foreground truncate mb-2">
                                  {new URL(p.href).hostname}
                                </p>
                                <div className="flex flex-wrap gap-1">
                                  {p.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="max-w-xs">
                          <p className="font-medium">{p.name}</p>
                          <p className="text-sm text-muted-foreground">{p.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
      </main>
    </TooltipProvider>
  );
}
