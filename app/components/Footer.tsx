// app/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#120b17] text-white mt-24 w-full block">
      <div className="max-w-[1400px] mx-auto px-8 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-t border-white/10">
        
        {/* Left Side: Identity & Contact */}
        <div className="flex flex-col gap-1">
          <span className="font-heading text-lg font-bold tracking-wider uppercase">
            Tu Nombre
          </span>
          <Link 
            href="mailto:your-email@domain.com" 
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            your-email@domain.com
          </Link>
        </div>

        {/* Right Side: Professional Links & Tech Stack */}
        <div className="flex flex-col md:items-end gap-2">
          <div className="flex gap-4 text-sm font-medium tracking-wide uppercase">
            <a 
              href="https://linkedin.com/in/tu-perfil" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/tu-usuario" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </div>
          <p className="text-xs text-gray-500 font-mono mt-1">
            Built with Next.js
          </p>
        </div>

      </div>
    </footer>
  );
}