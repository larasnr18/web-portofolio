import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [activeTab, setActiveTab] = useState<string>('experience');

  const handleClick = (section: string) => {
    setActiveTab(section);
  };

  return (
    <header className="sticky top-0 lg:flex justify-between items-center pt-24 pb-2 px-3 bg-background hover:bg-background border-2 border-background z-50 mx-[-32px] font-bold text-yellow-900 hidden">
      <h1 className="text-2xl text-primary"></h1>
      <nav>
        <ul className="flex space-x-6">
          <li
            className={`pb-2 transition ease-in-out hover:border-b border-yellow-900 hover:-translate-y-1 hover:scale-105 duration-300 ${
              activeTab === 'experience' ? 'border-b' : ''
            }`}
          >
            <Link href="#experience" className=' text-yellow-900' onClick={() => handleClick('experience')}>Experience</Link>
          </li>
          <li
            className={`pb-2 transition ease-in-out hover:border-b border-yellow-900 hover:-translate-y-1 hover:scale-105 duration-300 ${
              activeTab === 'projects' ? 'border-b' : ''
            }`}
          >
            <Link href="#projects" className=' text-yellow-900' onClick={() => handleClick('projects')}>Projects</Link>
          </li>
          <li
            className={`pb-2 transition ease-in-out hover:border-b border-yellow-900 hover:-translate-y-1 hover:scale-105 duration-300 ${
              activeTab === 'writing' ? 'border-b' : ''
            }`}
          >
            <Link href="#writing" className=' text-yellow-900' onClick={() => handleClick('writing')}>Writing</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
