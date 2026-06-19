import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b border-gray-150 sticky top-0 bg-white/80 backdrop-blur-md z-50 w-full block">
      <div className="max-w-[1400px] mx-auto px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading text-lg font-bold uppercase tracking-wider text-[#271732]">
          CHRIS ARCE
        </Link>
        <div className="flex gap-6 items-center">
          <Link href="/#work" className="nav-button ghost py-2 text-sm font-medium">
            Work
          </Link>
          <Link href="/#about" className="nav-button ghost py-2 text-sm font-medium">
            About
          </Link>
          <Link href="/#contact" className="nav-button secondary text-xs font-bold tracking-wide uppercase px-4 py-2">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}