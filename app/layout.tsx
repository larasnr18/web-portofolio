import { ReactNode } from 'react';
import "./globals.css";
import { Inter } from '@next/font/google';
import CustomCursor from '@/components/CustomCursor';
import ThemeToggle from '@/components/ThemeToggle';

export const metadata = {
  title: 'Laras N | Tech & Data Enthusiast',
  description: `Welcome to Laras' space where I share my work, ideas, and projects. Let's connect!`,
  icons: {
    icon: ['/favicon.ico?v=4']
  },
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="bg-background dark:bg-neutral-800 text-textPrimary lg:px-20 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div className='group/spotlight relative'>
          <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" style={{ background: 'radial-gradient(600px at 1011px 2939px, rgba(29, 78, 216, 0.15), transparent 80%)', }}>
          </div>
          <div className='mx-auto min-h-screen max-w-screen-xl lg:px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
            <CustomCursor />
            <main>{children}</main>
            {/* <Footer /> */}
          </div>
        </div>
        <div className='fixed left-10 bottom-0 md:inline-block hidden'>
          <div className='flex flex-col gap-4'>

            <div className='place-self-center'>
              <hr className="rounded bg-textSecondary dark:bg-neutral-400" style={{ height: '100vh', width: '2px', borderWidth: 0, }} />
            </div>
            <ThemeToggle />
            <div className='place-self-center'>
              <hr className="rounded bg-textSecondary dark:bg-neutral-400" style={{ height: '24vh', width: '2px', borderWidth: 0, }} />
            </div>
          </div>
        </div>
        <div className='inline-block mx-[-2px] md:hidden pb-4'>
          <div className='flex gap-4'>

            <div className='place-self-center'>
              <hr className="rounded bg-textSecondary dark:bg-neutral-400" style={{ height: '2px', width: '20vh', borderWidth: 0, }} />
            </div>
            <ThemeToggle />
            <div className='place-self-center'>
              <hr className="rounded bg-textSecondary dark:bg-neutral-400" style={{ height: '2px', width: '20vh', borderWidth: 0, }} />
            </div>

          </div>
        </div>
      </body>
    </html>
  );
}
