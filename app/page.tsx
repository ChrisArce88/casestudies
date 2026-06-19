// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full bg-white text-[#171717]">
      
      {/* HERO SECTION */}
      <header className="max-w-[1400px] mx-auto px-8 pt-28 pb-20">
        <div className="w-full">
          {/* Core Competencies Stack */}
          <div className="font-heading text-4xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] mb-10 text-[#271732]">
            <div>Marketing Operations</div>
            <div>CRM Engineering</div>
            <div className="text-gray-300">Web Development</div>
          </div>
          
          {/* Main Value Proposition */}
          <p className="text-gray-600 text-xl md:text-2xl leading-relaxed max-w-4xl mb-10 font-normal">
            I design systems that improve how leads are acquired, processed, and measured across marketing and CRM platforms.
          </p>
          
          {/* CTA Link to Work */}
          <Link 
            href="#work" 
            className="nav-button secondary inline-block text-xs font-bold tracking-wide uppercase px-8 py-4"
          >
            View Case Studies
          </Link>
        </div>
      </header>

      {/* FEATURED WORK SECTION */}
      <section id="work" className="max-w-[1400px] mx-auto px-8 py-16 border-t border-gray-150">
        <h2 className="font-heading text-xl uppercase tracking-wider text-gray-400 mb-12">
          Featured Work
        </h2>
        
        {/* 3-Card Grid - Updated padding from p-4 to p-2.5 for tighter frame */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: CLEX */}
          <article className="next-case-card flex flex-col justify-between h-full border border-gray-100 p-2.5 rounded-sm">
            <div>
              <div className="relative w-full aspect-[16/10] bg-gray-50 mb-4 overflow-hidden rounded-sm">
                <Image 
                  src="/images/clexthumb.png" 
                  alt="Retail Funnel Optimization"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-1.5"> {/* Added subtle text padding to offset tighter card padding */}
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-1">
                  CLEX
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Built a scalable acquisition platform for a growing multi-partner lending network.
                </p>
              </div>
            </div>
            <div className="mt-auto px-1.5 pb-1.5">
              <Link 
                href="/case-study-retail" 
                className="inline-flex items-center text-xs font-bold tracking-wider uppercase text-[#271732] hover:underline"
              >
                → Read case study
              </Link>
            </div>
          </article>

          {/* Card 2: Multi-Brand CRM Identity */}
          <article className="next-case-card flex flex-col justify-between h-full border border-gray-100 p-2.5 rounded-sm">
            <div>
              <div className="relative w-full aspect-[16/10] bg-gray-50 mb-4 overflow-hidden rounded-sm">
                <Image 
                  src="/images/normthumb.png"
                  alt="Multi-Brand Lead Identity"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-1.5">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-1">
                  Multi-Brand Lead Identity System
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Eliminated cross-brand CRM contamination through identity normalization.
                </p>
              </div>
            </div>
            <div className="mt-auto px-1.5 pb-1.5">
              <Link 
                href="/case-study-identity" 
                className="inline-flex items-center text-xs font-bold tracking-wider uppercase text-[#271732] hover:underline"
              >
                → Read case study
              </Link>
            </div>
          </article>

          {/* Card 3: Retail Partner Funnel */}
          <article className="next-case-card flex flex-col justify-between h-full border border-gray-100 p-2.5 rounded-sm">
            <div id="#work">
              <div className="relative w-full aspect-[16/10] bg-gray-50 mb-4 overflow-hidden rounded-sm">
                <Image 
                  src="/images/retailthumb.png" 
                  alt="Web Infrastructure Pipeline"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-1.5">
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-1">
                  Retail Partner Funnel
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Unified 71 retail locations into a single attributed acquisition experience.
                </p>
              </div>
            </div>
            <div className="mt-auto px-1.5 pb-1.5">
              <Link 
                href="/case-study-performance" 
                className="inline-flex items-center text-xs font-bold tracking-wider uppercase text-[#271732] hover:underline"
              >
                → Read case study
              </Link>
            </div>
          </article>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="max-w-[1400px] mx-auto px-8 py-16 border-t border-gray-150">
        <h2 className="font-heading text-xl uppercase tracking-wider text-gray-400 mb-10">
          About
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Statement */}
          <div className="lg:col-span-5">
            <h3 className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tight text-[#271732] mb-4">
              Hi, I'm Chris.
            </h3>
            <p className="text-gray-700 font-medium text-base md:text-lg leading-relaxed">
              I work at the intersection of marketing operations, CRM systems, and web development. I enjoy turning fragmented processes into reliable systems by combining automation, analytics, and thoughtful product design.
            </p>
          </div>
          
          {/* Methodology & Focus Details */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-gray-600 text-sm md:text-base leading-relaxed">
            <p>
              Most of my projects start with a business problem rather than a technical one. Whether it's improving lead acquisition, resolving data inconsistencies, or redesigning a customer journey, I'm interested in understanding how the entire system works before deciding what to build.
            </p>
            <p>
              I'm currently focused on Marketing Operations and CRM Engineering roles where I can design scalable workflows, build better acquisition experiences, and create systems that are easier to measure, maintain, and improve over time.
            </p>
          </div>
        </div>
      </section>

      {/* SELECTED SKILLS SECTION */}
      <section className="max-w-[1400px] mx-auto px-8 py-16 border-t border-gray-150">
        <h2 className="font-heading text-xl uppercase tracking-wider text-gray-400 mb-8">
          What I work with
        </h2>
        
        {/* Minimalist List Layout */}
        <div className="flex flex-wrap gap-x-12 gap-y-4 font-heading text-lg md:text-xl font-bold uppercase tracking-wide text-gray-800">
          <div>CRM Architecture</div>
          <div>Marketing Automation</div>
          <div>Web Development</div>
          <div>Analytics</div>
          <div>UX</div>
        </div>
      </section>

    </div>
  );
}