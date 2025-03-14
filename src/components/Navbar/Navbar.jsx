"use client";
import React, { useState, useRef } from "react";
import { FloatingNav } from "./floating-navbar.jsx";
import {
  IconHome,
  IconBuilding,
  IconDeviceGamepad2,
  IconBulb,
  IconMenu2,
  IconX,
  IconBook2,
  IconBed,
  IconPhone,
  IconChevronDown
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [showDepartments, setShowDepartments] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const associationsRef = useRef(null);

  const departments = [
    "CSE Association",
    "EEE Association",
    "IT Association",
    "ECE Association",
    "Mechanical Association",
    "Civil Association",
    "AI&DS Association",
    "S&H Association"
  ];


  const navItems = [
    {
      name: "Home",
      link: "/nectechfest2k25/#/",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "Technical",
      link: "/nectechfest2k25/#/events/technical",
      icon: <IconDeviceGamepad2 className="h-4 w-4 text-white" />,
    },
    {
      name: "Non-Tech",
      link: "/nectechfest2k25/#/events/non-tech",
      icon: <IconDeviceGamepad2 className="h-4 w-4 text-white" />,
    },
    {
      name: "Ideathon",
      link: "/nectechfest2k25/#/ideathon",
      icon: <IconBulb className="h-4 w-4 text-white" />,
    },
    {
      name: "Workshops",
      link: "/nectechfest2k25/#/events/workshops",
      icon: <IconBook2 className="h-4 w-4 text-white" />,
    },
    {
      name: "Accommodations",
      link: "/nectechfest2k25/#/events/accommodations",
      icon: <IconBed className="h-4 w-4 text-white" />,
    },
    {
      name: "Contact",
      link: "/nectechfest2k25/#/events/contact",
      icon: <IconPhone className="h-4 w-4 text-white" />,

    },
  ];

  const MobileDrawer = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
  
    return (
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        exit={{ x: -300 }}
        className="fixed top-0 left-0 h-full w-[250px] bg-purple-900/95 backdrop-blur-md z-[1001] shadow-lg flex flex-col"
      >
        <div className="p-4 border-b border-purple-800">
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="absolute top-4 right-4 text-white"
          >
            <IconX size={24} />
          </button>
        </div>
  
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 flex flex-col space-y-4">
            {navItems.map((item, idx) => (
              <div key={idx}>
                <a
                  href={item.hasDropdown ? '#' : item.link}
                  className="flex items-center space-x-2 text-white p-2 hover:bg-purple-800/50 rounded-md"
                  onClick={(e) => {
                    if (item.hasDropdown) {
                      e.preventDefault();
                      setOpenDropdown(openDropdown === idx ? null : idx);
                    } else {
                      setIsDrawerOpen(false);
                    }
                  }}
                >
                  {item.icon}
                  <span className="flex items-center gap-2">
                    {item.name}
                    {item.hasDropdown && (
                      <motion.div
                        animate={{ rotate: openDropdown === idx ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconChevronDown className="h-4 w-4 text-white" />
                      </motion.div>
                    )}
                  </span>
                </a>
  
                {item.hasDropdown && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: openDropdown === idx ? 'auto' : 0,
                      opacity: openDropdown === idx ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="ml-8 mt-2 space-y-2">
                      {departments.map((dept, index) => (
                        <a
                          key={index}
                          href={`/nectechfest2k25/#/associations/department/${dept.toLowerCase().replace(/\s+/g, '-')}`}
                          className="block text-white text-sm p-2 hover:bg-purple-800/50 rounded-md"
                          onClick={() => setIsDrawerOpen(false)}
                        >
                          {dept}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  };
  
  



  return (
    <>
     {!isDrawerOpen && <button
  className="max-[970px]:block hidden fixed top-4 right-4 z-[1002] bg-purple-900/30 p-2 rounded-md backdrop-blur-md"
  onClick={() => setIsDrawerOpen(true)}
>
  <IconMenu2 className="h-6 w-6 text-white" />
</button>}


      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[1000] max-[970px]:block hidden"
            onClick={() => setIsDrawerOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && <MobileDrawer />}
      </AnimatePresence>
      <div className="hidden min-[970px]:flex fixed top-4 w-full z-[1000] flex-col items-center">
    <div className="fixed top-4 w-full z-[1000] flex flex-col items-center">
      <div className="relative w-[75%] sm:w-[80%] md:w-[70%] lg:w-[900px]">
        {/* Navbar */}
        <div className="relative">
          <FloatingNav
            navItems={navItems}
            className="bg-purple-900/30 backdrop-blur-md shadow-[0_0_20px_rgba(88,28,135,0.7)] border-purple-600/50 text-white font-monoton"
          />

          {/* Departments Dropdown */}
          <AnimatePresence>
            {showDepartments && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-[-1px] sm:left-[120px] md:left-[170px] top-[calc(100%+5px)] w-48 rounded-md shadow-lg bg-purple-900/90 backdrop-blur-md ring-1 ring-purple-500 ring-opacity-5"

                onMouseEnter={() => setShowDepartments(true)}
                onMouseLeave={() => setShowDepartments(false)}
              >
                {/* Add a decorative arrow */}
                <div className="absolute -top-2 left-[50%] -translate-x-1/2 w-4 h-4 rotate-45 bg-purple-900/90 z-[-10]"></div>

                <div className="relative py-1 rounded-md bg-purple-900/90">
                  {departments.map((department, index) => (
                    <a
                      key={index}
                      href={`/nectechfest2k25/#/associations/department/${department.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-white hover:bg-purple-800/50 transition-colors duration-150"
                    >
                      {department}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
    </div>
    </>
  );
}