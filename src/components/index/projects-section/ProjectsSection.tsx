import React from 'react';
import { Bulb } from '../../bulb';

interface Tech {
  src: string;
  alt: string;
}

interface ProjectCardProps {
  title: string;
  paragraph: string;
  imageUrl: string;
  techs: Tech[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ className, title, paragraph, imageUrl, techs }) => (
  <div
    className={`grid grid-cols-2 gap-4 rounded-lg bg-white px-4 relative overflow-hidden py-5 md:pt-8 hover:opacity-100 dark:bg-darkCard/50 md:px-8 md:pb-3 transition-opacity ${className}`}
  >
    <div className="absolute bg-gradient-radial from-yellow-500/20 to-70% h-[200%] w-3/4 -top-0 -translate-y-1/2 left-1/3 -z-1" />
    <div>
      <h2 className="mb-3 text-2xl font-medium md:text-3xl">{title}</h2>
      <p>{paragraph}</p>
      <div className="mt-8">
        <div className="uppercase opacity-50 text-xs md:text-sm mb-2">Tech stack</div>
        <div className="flex flex-wrap gap-2">
          {techs.map(({ src, alt }, i) => (
            <div key={src} className="flex items-center rounded bg-light px-3 py-2 dark:bg-dark/50">
              <span style={{ width: 17, height: 17 }}>
                <img key={i} src={src} alt={`${String(alt)} logo`} width={17} height={17} />
              </span>
              <span className="pl-2">{alt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div>
      <img src={imageUrl} alt={title} />
    </div>
  </div>
);

export const ProjectsSection = () => (
  <div className="relative mt-24">
    <div className="flex items-center mb-8">
      <div className="absolute -left-[2.8rem]">
        <Bulb variant="yellow" />
      </div>
      <h1 className="text-3xl font-bold">Projects</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4">
      <ProjectCard
        title="Project Title 1"
        paragraph="Project description 1..."
        imageUrl="path-to-your-image1.jpg"
        techs={[
          { src: 'path-to-tech-logo1.jpg', alt: 'Tech Name 1' },
          // add more techs here...
        ]}
        className="md:col-span-2 md:row-span-1"
      />
      <ProjectCard
        title="Project Title 2"
        paragraph="Project description 2..."
        imageUrl="path-to-your-image2.jpg"
        techs={[
          { src: 'path-to-tech-logo2.jpg', alt: 'Tech Name 2' },
          // add more techs here...
        ]}
        className="md:col-span-1 md:row-span-1"
      />
      <ProjectCard
        title="Project Title 3"
        paragraph="Project description 3..."
        imageUrl="path-to-your-image3.jpg"
        techs={[
          { src: 'path-to-tech-logo3.jpg', alt: 'Tech Name 3' },
          // add more techs here...
        ]}
        className="md:col-span-1 md:row-span-1"
      />
      <ProjectCard
        title="Project Title 4"
        paragraph="Project description 4..."
        imageUrl="path-to-your-image4.jpg"
        techs={[
          { src: 'path-to-tech-logo4.jpg', alt: 'Tech Name 4' },
          // add more techs here...
        ]}
        className="md:col-span-2 md:row-span-1"
      />
    </div>
  </div>
);
