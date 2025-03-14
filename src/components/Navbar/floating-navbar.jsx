"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils.js";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit mx-auto border border-transparent rounded-full bg-white/10 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pr-8 pl-8 py-2 items-center justify-center space-x-6",
          className
        )}>
        {navItems.map((navItem, idx) => (
          <a
            href={navItem.link}
            key={`nav-item-${idx}`}
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1.5 hover:text-neutral-300 cursor-pointer transition-colors duration-200",
              navItem.hasDropdown && "group"
            )}
            onMouseEnter={navItem.onMouseEnter}
            onMouseLeave={navItem.onMouseLeave}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
            {navItem.hasDropdown && (
              <motion.span
                className="h-1 w-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              />
            )}
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
