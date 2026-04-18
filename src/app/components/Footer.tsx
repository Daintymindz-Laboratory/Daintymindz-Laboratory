import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-foreground/5">
      <div className="overflow-hidden py-6 border-b border-foreground/5">
        <div className="animate-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="inline-block mx-8 font-display font-extrabold text-6xl lg:text-8xl text-foreground/[0.03] select-none"
            >
              DAINTYMINDZ
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-amber rounded-sm rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center text-graphite-deep font-display font-extrabold text-lg">
                  D
                </span>
              </div>
              <span className="font-display font-bold text-lg tracking-wider text-foreground">
                DAINTYMINDZ LTD | RC: 9161423
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed text-foreground/40 max-w-md">
              <em>Engineering Intelligent Futures.</em>
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm tracking-wider text-foreground mb-6">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/research" className="golden-border relative pb-0.5 font-body text-sm text-foreground/40 hover:text-amber transition-colors duration-300">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/projects" className="golden-border relative pb-0.5 font-body text-sm text-foreground/40 hover:text-amber transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/team" className="golden-border relative pb-0.5 font-body text-sm text-foreground/40 hover:text-amber transition-colors duration-300">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/internships" className="golden-border relative pb-0.5 font-body text-sm text-foreground/40 hover:text-amber transition-colors duration-300">
                  Internships
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="golden-border relative pb-0.5 font-body text-sm text-foreground/40 hover:text-amber transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm tracking-wider text-foreground mb-6">
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li className="font-body text-sm text-foreground/40">info@daintymindz.com</li>
              <li className="font-body text-sm text-foreground/40">USA · Nigeria · South Korea · Canada</li>
              <li className="font-body text-sm text-foreground/40">Research institute & innovation studio</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-foreground/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-foreground/30">
            © {new Date().getFullYear()} DAINTYMINDZ LTD
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="font-body text-xs text-foreground/30 hover:text-amber transition-colors duration-300">
              Back to Top
            </Link>
            <Link href="/privacy" className="font-body text-xs text-foreground/30 hover:text-amber transition-colors duration-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
