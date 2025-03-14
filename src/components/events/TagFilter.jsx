import React, { useState, useRef, useEffect } from "react";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

const TagFilter = ({ tags = [], selectedTag, onChange }) => {
  useEffect(()=>{
    const searchTag=sessionStorage.getItem('eventListSelectedTag');
    if(searchTag){
      onChange(searchTag);
    }
  },[]);
  // Return null if no tags are provided
  if (!tags || tags.length === 0) return null;
  
  const [hoveredTag, setHoveredTag] = useState(null);
  const scrollContainerRef = useRef(null);
  let hoverTimer = null;

  const handleMouseEnter = (tag) => {
    setHoveredTag(tag);
  };

  const handleMouseLeave = (tag) => {
    hoverTimer = setTimeout(() => {
      if (hoveredTag === tag) {
        setHoveredTag(null);
      }
    }, 500);
  };

  const handleTagClick = (tag) => {
    if (selectedTag === tag) {
      onChange(null);
    } else {
      onChange(tag);
    }
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const TagButton = ({ tag, className = "" }) => {
    const isSelected = selectedTag === tag;
    const isHovered = hoveredTag === tag;

    return (
      <button
        key={tag}
        onClick={() => handleTagClick(tag)}
        onMouseEnter={() => handleMouseEnter(tag)}
        onMouseLeave={() => handleMouseLeave(tag)}
        className={`
          px-3 py-1 text-sm rounded-full transition-all duration-300
          flex items-center gap-1
          ${
            isSelected
              ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium border-2 border-violet-400 shadow-lg shadow-violet-500/20"
              : isHovered
              ? "bg-gradient-to-r from-gray-700 to-gray-600 text-white border-2 border-gray-500"
              : "bg-gray-800 text-gray-300 border-2 border-transparent hover:border-gray-600"
          }
          ${className}
        `}
      >
        {isSelected && <Check className="w-3 h-3" />}
        {tag}
      </button>
    );
  };

  return (
    <div className="p-4 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800">
           
      {/* Desktop View - Normal wrap */}
      <div className="hidden sm:flex flex-wrap gap-2">
        <h2 className="text-xl font-bold text-white mb-4">Tags</h2>
        {tags.map((tag) => (
          <TagButton key={tag} tag={tag} />
        ))}
      </div>

      {/* Mobile View - Scrollable with arrows */}
      <div className="sm:hidden relative flex items-center">
        <button
          onClick={() => scroll('left')}
          className="flex-none w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <div 
          ref={scrollContainerRef}
          className="flex-2 overflow-x-auto scrollbar-hide mx-2"
        >
          <div className="flex gap-2 items-center">
            {tags.map((tag) => (
              <TagButton 
                key={tag} 
                tag={tag} 
                className="whitespace-nowrap flex-none"
              />
            ))}
          </div>
        </div>

        <button
          onClick={() => scroll('right')}
          className="flex-none w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default TagFilter;