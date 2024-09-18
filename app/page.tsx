"use client";
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Career from '@/components/Career';
import Header from '@/components/Header';
import MediumPosts from '@/components/Writing';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Hero />
        <div className='lg:w-1/2 lg:pb-24'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <Header />
            {/* <About /> */}
            <Career />
            <Projects />
            <MediumPosts />

          </motion.div>
        </div>
      </div>
    </div>
  );
}
