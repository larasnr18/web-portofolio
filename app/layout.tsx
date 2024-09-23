import { ReactNode } from 'react';
import "./globals.css";
import { Inter } from '@next/font/google';
import CustomCursor from '@/components/CustomCursor';

export const metadata = {
  title: 'Laras N | Developer',
  description: 'Personal portfolio website',
  icons: {
    icon: '/icon.png',
  },
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="bg-background text-textPrimary lg:px-20 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div className='group/spotlight relative'>
          <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{ background: 'radial-gradient(600px at 1011px 2939px, rgba(29, 78, 216, 0.15), transparent 80%)', }}>
          </div>
          <div className='mx-auto min-h-screen max-w-screen-xl lg:px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
            <CustomCursor />
            <main>{children}</main>
            {/* <Footer /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
