import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export interface Project {
  title: string;
  description: string;
  imageUrls: string[];
  techStack: string[];
}

export interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);


  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % project.imageUrls.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prevIndex) => 
      prevIndex === 0 ? project.imageUrls.length - 1 : prevIndex - 1
    );
  };


  const handleImageClick = () => {
    setIsImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center backdrop-blur-sm w-full justify-center text-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      />
      <motion.div
        className="bg-background p-8 rounded-lg relative max-w-screen-lg w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute top-2 right-4 text-textPrimary"
          onClick={onClose}
        >
          ×
        </button>
        <div className='flex flex-wrap'>
          <div className='lg:w-1/2 pr-3 text-left'>
            <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
            <p className="text-textSecondary font-medium">{project.description}</p>
            <section className="mt-8">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <div 
                    key={index}
                    className="flex items-center rounded-full bg-yellow-900/10 px-3 py-1 text-xs font-medium leading-5 text-yellow-900 ">
                    {tech}
                </div>
                ))}
              </div>
            </section>
          </div>
          <div className='lg:w-1/2 my-auto relative px-3'>
            {project.imageUrls.length > 1 ? (
              <>
                <Image
                  src={project.imageUrls[activeImageIndex]}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg shadow-[inset_0_0_1px_1px_rgba(148,163,184,0.1)] drop-shadow-lg cursor-pointer"
                  onClick={handleImageClick}
                />

                <button
                  className="absolute -left-1 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-10"
                  onClick={handlePrevImage}
                >
                  {/* &larr; */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>

                </button>

                <button
                  className="absolute -right-1 top-1/2 transform -translate-y-1/2 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 z-10"
                  onClick={handleNextImage}
                >
                  {/* &rarr; */} 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>

                  
                </button>

                <div className="flex mt-4 space-x-4 justify-center">
                  {project.imageUrls.map((imageUrl, index) => (
                    <div key={index} className="cursor-pointer">
                      <Image
                        src={imageUrl}
                        alt={`Thumbnail ${index + 1}`}
                        width={100}
                        height={60}
                        className={`w-24 h-16 object-cover rounded-md border-2 ${activeImageIndex === index ? 'border-primary' : 'border-transparent'}`}
                        onClick={() => setActiveImageIndex(index)} // Update gambar utama saat thumbnail di klik
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <Image
                src={project.imageUrls[activeImageIndex]}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-auto rounded-lg shadow-[inset_0_0_1px_1px_rgba(148,163,184,0.1)] drop-shadow-lg"
                onClick={handleImageClick}
              />
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal untuk gambar */}
      {isImageModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-100"
            onClick={handleCloseImageModal}
          />
          <motion.div
            className="relative max-w-screen-lg w-full p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-6 right-6 text-white bg-black/50 px-2 rounded-full hover:bg-black/70"
              onClick={handleCloseImageModal}
            >
              ×
            </button>
            <Image
              src={project.imageUrls[activeImageIndex]}
              alt={project.title}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg cursor-pointer"
            />
          </motion.div>
        </div>
      )}

    </div>
  );
}
