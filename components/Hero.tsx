
"use client";

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 px-4'>
      <div>
        <motion.p
          className="text-4xl md:text-7xl font-bold text-textPrimary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Laras N
        </motion.p>
        <motion.h4
          className="text-2xl text-textSecondary font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1}}
        >
          Software Engineer & Web Developer
        </motion.h4>
        <motion.p
          className="text-xl text-textSecondary font-semibold mt-4  max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Crafting seamless, innovative, and user-centric digital solutions.
        </motion.p>
      </div>
      <motion.p 
        className="mt-4 text-md text-textSecondary leading-7 max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}  
      >
        Passionate software developer with over 3 years of experience in crafting full-stack applications, creating engaging data visualizations, and automating processes. I excel in utilizing modern web technologies and frameworks to build scalable and efficient solutions. Whether managing CI/CD pipelines or collaborating in agile teams, I am dedicated to delivering top-notch software. Known for my innovative approach and problem-solving skills, I thrive in both solo and team environments, constantly seeking new challenges and opportunities to grow.
      </motion.p>
      {/* <nav>
        <ul className="space-y-6 text-left mt-6">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#projects">Projects</Link></li>
        </ul>
      </nav> */}
      <motion.div 
        className='ml-1 mt-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }} 
      >
        <p className="max-w-xl mx-auto text-sm text-textSecondary">
          Interested in working together? Feel free to reach out to me!
        </p>
        <a href="mailto:work.larasn@gmail.com" className="text-sm mt-2 font-semibold hover:font-bold inline-block bg-primary text-black py-1 px-3 rounded-lg">
          Say Hello
        </a>
        <div className="flex gap-4 mt-4">
          <a href="https://www.linkedin.com/in/laras-n-828a3b160/" target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0,0,256,256" className="transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
              <g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g>
            </svg>
          </a>
          <a href="https://github.com/larasnr18" target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0,0,256,256" className="transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
              <g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path></g></g>
            </svg>
          </a>
          <a href="https://medium.com/@larasn_" target='_blank'>
           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0,0,256,256" className="m-[-6px] transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-300">
            <g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(3.55556,3.55556)"><path d="M45.049,14c12.011,0 12.951,0.94 12.951,12.951v18.098c0,12.011 -0.94,12.951 -12.951,12.951h-18.098c-12.011,0 -12.951,-0.94 -12.951,-12.951v-18.098c0,-12.011 0.94,-12.951 12.951,-12.951zM29.713,44.151c4.502,0 8.151,-3.649 8.151,-8.151c0,-4.502 -3.649,-8.151 -8.151,-8.151c-4.502,0 -8.151,3.649 -8.151,8.151c0,4.502 3.65,8.151 8.151,8.151zM42.713,43.757c2.228,0 4.034,-3.473 4.034,-7.757c0,-4.284 -1.806,-7.757 -4.034,-7.757c-2.228,0 -4.034,3.473 -4.034,7.757c0,4.284 1.806,7.757 4.034,7.757zM48.98,42.928c0.775,0 1.403,-3.102 1.403,-6.928c0,-3.826 -0.628,-6.928 -1.403,-6.928c-0.775,0 -1.403,3.102 -1.403,6.928c0,3.826 0.628,6.928 1.403,6.928z"></path></g></g>
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
