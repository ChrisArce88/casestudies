// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  // Guardamos el gradiente solicitado en una constante limpia para las tarjetas
  const cardGradientStyle = {
    background: 'linear-gradient(135deg, #271732 0%, #481A47 100%)'
  };

  return (
    <div className="w-full bg-white text-[#171717]">
      
     {/* HERO SECTION - Optimizado horizontalmente para reducir espacio vertical */}
      <header className="max-w-[1400px] mx-auto px-8 pt-24 pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda: Gran Título de Competencias - Centrado en mobile */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95] text-[#271732]">
              <div>Growth & Marketing</div>
              <div className="text-gray-300">Operations</div>
            </h1>
          </div>
          
          {/* Columna Derecha: Propuesta de Valor y Acción Inmediata - Centrado en mobile */}
          <div className="lg:col-span-5 lg:pt-2 text-center lg:text-left">
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6 font-normal">
              I design and build measurable acquisition systems that connect marketing, product, analytics, and CRM.
            </p>
            <Link 
              href="#work" 
              className="nav-button secondary inline-block text-xs font-bold tracking-wide uppercase px-8 py-4"
            >
              View Case Studies
            </Link>
          </div>

        </div>
      </header>

    {/* FEATURED WORK SECTION - Forzando el color blanco con inline styles */}
      <section id="work" className="max-w-[1400px] mx-auto px-8 py-12 border-t border-gray-150">
        <h2 className="font-heading text-xl uppercase tracking-wider text-gray-400 mb-8">
          Featured Work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: CLEX */}
          <article 
            style={cardGradientStyle} 
            className="next-case-card flex flex-col justify-between h-full p-2.5 rounded-sm shadow-md"
          >
            <div>
              <div className="relative w-full aspect-[16/10] bg-white/5 mb-4 overflow-hidden rounded-sm">
                <Image 
                  src="/images/clexthumb.png" 
                  alt="Retail Funnel Optimization"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-1.5">
                <h3 className="font-heading text-lg font-bold text-white mb-1" style={{ color: '#ffffff' }}>
                  Unified Acquisition & Attribution Platform
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Built a scalable acquisition platform for a growing multi-partner lending network.
                </p>
              </div>
            </div>
            <div className="mt-auto px-1.5 pb-1.5">
              <Link target='_blank'
                href="/casestudies/aaplatform" 
                className="inline-flex items-center text-xs font-bold tracking-wider uppercase hover:underline transition-colors"
                style={{ color: '#ffffff' }}
              >
                → Read case study
              </Link>
            </div>
          </article>

          {/* Card 2: Multi-Brand CRM Identity */}
          <article 
            style={cardGradientStyle} 
            className="next-case-card flex flex-col justify-between h-full p-2.5 rounded-sm shadow-md"
          >
            <div>
              <div className="relative w-full aspect-[16/10] bg-white/5 mb-4 overflow-hidden rounded-sm">
                <Image 
                  src="/images/normthumb.png"
                  alt="Multi-Brand Lead Identity"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-1.5">
                <h3 className="font-heading text-lg font-bold text-white mb-1" style={{ color: '#ffffff' }}>
                  Multi-Brand Lead Identity System
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Eliminated cross-brand CRM contamination through identity normalization.
                </p>
              </div>
            </div>
            <div className="mt-auto px-1.5 pb-1.5">
              <Link target='_blank'
                href="/casestudies/brandnormalization" 
                className="inline-flex items-center text-xs font-bold tracking-wider uppercase hover:underline transition-colors"
                style={{ color: '#ffffff' }}
              >
                → Read case study
              </Link>
            </div>
          </article>

          {/* Card 3: Retail Partner Funnel */}
          <article 
            style={cardGradientStyle} 
            className="next-case-card flex flex-col justify-between h-full p-2.5 rounded-sm shadow-md"
          >
            <div>
              <div className="relative w-full aspect-[16/10] bg-white/5 mb-4 overflow-hidden rounded-sm">
                <Image 
                  src="/images/retailthumb.png" 
                  alt="Web Infrastructure Pipeline"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-1.5">
                <h3 className="font-heading text-lg font-bold text-white mb-1" style={{ color: '#ffffff' }}>
                  Retail Partner Funnel
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Unified 71 retail locations into a single attributed acquisition experience.
                </p>
              </div>
            </div>
            <div className="mt-auto px-1.5 pb-1.5">
              <Link target='_blank'
                href="/casestudies/partner-funnel" 
                className="inline-flex items-center text-xs font-bold tracking-wider uppercase hover:underline transition-colors"
                style={{ color: '#ffffff' }}
              >
                → Read case study
              </Link>
            </div>
          </article>

        </div>
      </section>

    {/* IMPACT STRIP - Variante Ultra-Minimalista sin líneas ni fondo */}
      <section className="max-w-[1400px] mx-auto px-8 pt-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
         {/* Column 1: Unified Acquisition Platform - Centrado responsivo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">
              Unified Acquisition Platform
            </span>
            <div className="space-y-2 w-full flex flex-col items-center md:items-start">
              
              <div className="flex items-baseline justify-center md:justify-start gap-2 w-full">
                <span className="text-lg font-black text-[#271732]">+63%</span>
                <span className="text-xs text-gray-600 uppercase font-medium tracking-tight">Conversion Rate</span>
              </div>
              
              <div className="flex items-baseline justify-center md:justify-start gap-2 w-full">
                <span className="text-lg font-black text-[#271732]">+128%</span>
                <span className="text-xs text-gray-600 uppercase font-medium tracking-tight">Engagement Boost</span>
              </div>
              
              <div className="flex items-baseline justify-center md:justify-start gap-2 w-full">
                <span className="text-lg font-black text-[#271732]">51%</span>
                <span className="text-xs text-gray-600 uppercase font-medium tracking-tight">Qualified Leads</span>
              </div>
              
            </div>
          </div>

          {/* Column 2: Multi-Brand CRM System */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
           
            <ul className="space-y-2.5 text-sm text-gray-700 font-medium leading-tight">
              <li className="flex items-start gap-2">
                <span className="text-gray-300">▪</span> Eliminated data contamination
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-300">▪</span> Unified lead identity across brands
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-300">▪</span> Improved attribution consistency
              </li>
            </ul>
          </div>

          {/* Column 3: Retail Partner Funnel */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
          
            <ul className="space-y-2.5 text-sm text-gray-700 font-medium leading-tight">
              <li className="flex items-start gap-2">
                <span className="text-gray-300">▪</span> 71 → 1 form system architecture
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-300">▪</span> Full partner-level attribution
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-300">▪</span> Scalable location onboarding
              </li>
            </ul>
          </div>

        </div>
      </section>

     {/* ABOUT SECTION - Centrado exclusivo en mobile */}
      <section id="about" className="max-w-[1400px] mx-auto px-8 py-16 border-t border-gray-150">
        {/* Titular "HOW I WORK" centrado en mobile */}
        <h2 className="font-heading text-xl uppercase tracking-wider text-gray-400 mb-10 text-center lg:text-left">
          HOW I WORK
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Statement - text-center en mobile, retoma la izquierda en desktop */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <h3 className="font-heading text-2xl md:text-3xl font-black uppercase tracking-tight text-[#271732] mb-4">
              Hi, I'm Chris.
            </h3>
            <p className="text-gray-700 font-medium text-base md:text-lg leading-relaxed mb-4">
              I work across <b>marketing operations, CRM systems, and web development,</b> building structured acquisition 
              systems from fragmented workflows.
            </p>
            <p className="text-gray-700 font-medium text-base md:text-lg leading-relaxed">
              I focus on connecting automation, analytics, and product thinking <b>to make growth 
              measurable and operationally reliable.</b>
            </p>
          </div>
          
          {/* Methodology / Workflow Diagram */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="flow-diagram w-full">
              <div className="node">Business Problem</div>
              <div className="arrow">↓</div>
              <div className="node">Research &amp; Constraints</div>
              <div className="arrow">↓</div>
              <div className="node">System Design (UX + Funnel)</div>
              <div className="arrow">↓</div>
              <div className="node">Implementation (Front-end + Integrations)</div>
              <div className="arrow">↓</div>
              <div className="node">Optimization</div>
            </div>
          </div>

        </div>
      </section>

     {/* SELECTED SKILLS & CALL TO ACTION */}
      <section className="max-w-[1400px] mx-auto px-8 py-16 border-t border-gray-150">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda: Stack Técnico Estructurado */}
          <div className="lg:col-span-7">
            <h2 className="font-heading text-xl uppercase tracking-wider text-gray-400 mb-8">
              What I work with
            </h2>
            
            {/* Lista organizada en dos columnas en pantallas medianas/grandes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 font-heading text-sm md:text-base font-bold uppercase tracking-wide text-gray-800">
              
              <div className="flex items-start gap-3 py-2 border-b border-gray-100 md:border-b-0">
                <span className="font-mono text-xs font-normal text-gray-400 mt-0.5">▪</span>
                <span>Growth Systems & Acquisition Architecture</span>
              </div>
              
              <div className="flex items-start gap-3 py-2 border-b border-gray-100 md:border-b-0">
                <span className="font-mono text-xs font-normal text-gray-400 mt-0.5">▪</span>
                <span>CRM & Data Infrastructure</span>
              </div>
              
              <div className="flex items-start gap-3 py-2 border-b border-gray-100 md:border-b-0">
                <span className="font-mono text-xs font-normal text-gray-400 mt-0.5">▪</span>
                <span>Marketing Automation & Lifecycle Workflows</span>
              </div>
              
              <div className="flex items-start gap-3 py-2 border-b border-gray-100 md:border-b-0">
                <span className="font-mono text-xs font-normal text-gray-400 mt-0.5">▪</span>
                <span>Attribution & Funnel Analytics</span>
              </div>
              
              <div className="flex items-start gap-3 py-2 border-b border-gray-100 md:border-b-0">
                <span className="font-mono text-xs font-normal text-gray-400 mt-0.5">▪</span>
                <span>UX</span>
              </div>
              
              <div className="flex items-start gap-3 py-2">
                <span className="font-mono text-xs font-normal text-gray-400 mt-0.5">▪</span>
                <span>Web Applications</span>
              </div>

            </div>
          </div>

          




          
          {/* Columna Derecha: Disponibilidad y CTA de Correo */}
          <div className="lg:col-span-5 lg:pt-14">
            <div className="space-y-4">
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                Currently open to collaboration and growth-focused projects. Let's build something measurable.
              </p>
              <a 
                href="mailto:chris.arce882@gmail.com" 
                className="nav-button secondary inline-block text-xs font-bold tracking-wide uppercase px-6 py-3.5"
              >
                Get in touch ↗
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER & BACK TO TOP - Ahora estrictamente para utilitarios */}
      <footer className="max-w-[1400px] mx-auto px-8 py-8 border-t border-gray-150 flex flex-row justify-between items-center text-xs font-medium tracking-wide uppercase text-gray-400">
        <div>
          © {new Date().getFullYear()} Chris Arce.
        </div>
        <Link 
          href="#" 
          className="hover:text-[#271732] transition-colors inline-flex items-center gap-1 font-bold"
        >
          Back to top ↑
        </Link>
      </footer>

    </div>
  );
}