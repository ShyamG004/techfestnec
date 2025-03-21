import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Navbar } from './Navbar/Navbar';

const DevelopersTeam = () => {
  const developers = [
    {
      id: 2,
      name: "Sankara Narayanan T",
      designation: "Full-Stack Developer",
      image: "/team/sankar.webp",
      dept:"CSE",
      linkedin: "https://www.linkedin.com/in/sankara-narayanan-81b4a4256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Sankar2408"
    },
    {
      id: 3,
      name: "Shyam Shunmugam G",
      designation: "Full-Stack Developer",
      image: "/team/shyam1.jpg",
      dept:"CSE",
      linkedin: "https://www.linkedin.com/in/shyam-shunmugam-g-936265254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/ShyamG004"
    },
    {
      id: 4,
      name: "Palani Kumar S",
      designation: "Full-Stack Developer",
      dept:"CSE",
      image: "/team/palani.webp",
      linkedin: "https://www.linkedin.com/in/palani-kumar-s-a256492b1/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/Palanikumar106"
    },
    {
      id: 5,
      name: "Akhil R",
      designation: "Full-Stack Developer",
      dept:"IT",
      image: "/team/Akhil.webp",
      linkedin: "https://www.linkedin.com/in/akhil-r777/",
      github: "https://github.com/ALANAK777"
    },
    {
      id: 6,
      name: "Hari Rajesh B",
      designation: "Full-Stack Developer",
      dept:"IT",
      image: "/team/Hari.webp",
      linkedin: "https://www.linkedin.com/in/harirajesh",
      github: "https://github.com/hari-rajesh"
    },
    {
      id: 7,
      name: "Alex S",
      designation: "Full-Stack Developer",
      dept:"IT",
      image: "/team/Alex.webp",
      linkedin: "https://www.linkedin.com/in/alex7842/",
      github: "https://github.com/alex7842"
    },
    {
      id: 9,
      name: "Narmada G",
      designation: "Frontend Developer",
      dept:"CSE",
      image: "/team/narmadha.webp",
      linkedin: "https://www.linkedin.com/in/narmadha-g-3aa776256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/rockstar-narmu"
    },
    {
      id: 10,
      name: "Sankareswari M",
      designation: "Frontend Developer",
      dept:"CSE",
      image: "/team/sankareswari.webp",
      linkedin: "https://www.linkedin.com/in/sankareswari-m-929a51256/",
      github: "https://github.com/SANKARESWARI-M"
    },
    {
      id: 11,
      name: "Fiona Jores Marshal S",
      designation: "Frontend Developer",
      dept:"CSE",
      image: "/team/fiona.webp",
      linkedin: "https://www.linkedin.com/in/fiona-jores-b23020264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/FionaJores"
    }
  ];

  return (
    <div className="bg-[#130733] py-12 px-4">
      <Navbar/>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-wider text-white mb-2 text-shadow-neon mt-3">
            OUR TEAM
          </h1>
          <p className="text-lg text-[#9d4edd]">
            The Developers Behind NEC TECH FEST
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {developers.map((dev) => (
            <div 
              key={dev.id} 
              className="bg-[#280a46]/70 rounded-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_15px_rgba(157,78,221,0.5)]"
            >
              <div className="w-full">
                <div className="h-80 sm:h-64 overflow-hidden border-b border-[#9d4edd]/30">
                  <img 
                    src={dev.image} 
                    alt={dev.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'top center'
                    }}
                  />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{dev.name}</h3>
                <p className="text-sm text-[#9d4edd] mb-3">{dev.designation}</p>
                <p className="text-sm text-[#9d4edd] mb-3">III year {dev.dept}</p>
                <div className="flex gap-2">
                  <SocialLink href={dev.linkedin} icon={<FaLinkedin />} />
                  <SocialLink href={dev.github} icon={<FaGithub />} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Extracted Social Link Component
const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-8 h-8 bg-[#9d4edd]/20 rounded-full flex items-center justify-center transition-all hover:bg-[#9d4edd] hover:scale-110 hover:shadow-lg"
  >
    <span className="text-white text-sm">
      {icon}
    </span>
  </a>
);

export default DevelopersTeam;
