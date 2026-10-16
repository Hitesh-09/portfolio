import Link from "next/link";
import { Dock, DockIcon } from "@/components/ui/dock";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#111111] pt-12 pb-8 border-t border-white/5 relative z-10 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center">
        
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-white/80 font-medium">
          <Link href="/work" className="hover:text-white transition-colors">Work</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/stack" className="hover:text-white transition-colors">Stack</Link>
          <Link href="/experience" className="hover:text-white transition-colors">Experience</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="mb-8">
          <Dock direction="middle" iconSize={40} iconMagnification={60} iconDistance={140}>
            {/* Instagram */}
            <DockIcon>
              <Link href="https://www.instagram.com/eyem.hitesh/" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center" aria-label="Instagram">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </Link>
            </DockIcon>
            {/* LinkedIn */}
            <DockIcon>
              <Link href="https://www.linkedin.com/in/hitesh45/" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center" aria-label="LinkedIn">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </Link>
            </DockIcon>
            {/* Twitter / X */}
            <DockIcon>
              <Link href="https://x.com/Hiteish79" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center" aria-label="Twitter / X">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </Link>
            </DockIcon>
            {/* WhatsApp */}
            <DockIcon>
              <Link href="https://wa.me/918055181811" target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center" aria-label="WhatsApp">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </Link>
            </DockIcon>
            {/* Mail */}
            <DockIcon>
              <Link href="mailto:hiteishshimpi@gmail.com" className="w-full h-full flex items-center justify-center" aria-label="Mail">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </Link>
            </DockIcon>
          </Dock>
        </div>
        
        {/* Decorative Separator Line */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Logo and Copyright at the bottom */}
        <div className="flex flex-col items-center justify-center gap-4">
          <Link href="/" className="flex items-center justify-center w-12 h-10 bg-white text-black rounded-lg text-xl font-bold tracking-tighter">
            H
          </Link>
          <div className="text-white/40 text-xs font-light">
            © {currentYear} Hitesh. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
