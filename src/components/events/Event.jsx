import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import HeroSection from "./HeroSection";
import SearchBar from "./SearchBar";
import TagFilter from "./TagFilter";
import EventGrid from "./EventGrid";
import { useEvents } from "../../utils/eventData";
import { ArrowLeft } from "lucide-react";

const Event = () => {
  const { eventType } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const { events, tags } = useEvents();
  const scrollPositionRef = useRef(0);
  
  // Load current page from sessionStorage or default to 1
  const [currentPage, setCurrentPage] = useState(() => {
    const savedPage = sessionStorage.getItem('eventListCurrentPage');
    return savedPage ? parseInt(savedPage) : 1;
  });
  
  // Update sessionStorage when page changes
  useEffect(() => {
    sessionStorage.setItem('eventListCurrentPage', currentPage.toString());
  }, [currentPage]);
  
  // Store scroll position and other state before navigation
  useEffect(() => {
    // Save scroll position before unmounting
    return () => {
      scrollPositionRef.current = window.scrollY;
      sessionStorage.setItem('eventListScrollPosition', scrollPositionRef.current.toString());
      
      // Also save search and filter state
      sessionStorage.setItem('eventListSearchQuery', searchQuery);
      sessionStorage.setItem('eventListSelectedTag', selectedTag || '');
    };
  }, [searchQuery, selectedTag]);
  
  // Restore state when returning to page
  useEffect(() => {
    const handleNavigation = (e) => {
      // Check if we're navigating back from event page
      if (e.currentTarget.performance && e.currentTarget.performance.navigation.type === 2) {
        // Restore previously saved values
        const savedPosition = sessionStorage.getItem('eventListScrollPosition');
        const savedSearchQuery = sessionStorage.getItem('eventListSearchQuery');
        const savedSelectedTag = sessionStorage.getItem('eventListSelectedTag');
        
        if (savedSearchQuery) setSearchQuery(savedSearchQuery);
        if (savedSelectedTag) setSelectedTag(savedSelectedTag === '' ? null : savedSelectedTag);
        
        if (savedPosition) {
          setTimeout(() => {
            window.scrollTo(0, parseInt(savedPosition));
          }, 100);
        }
      } else {
        // New navigation - scroll to top
        window.scrollTo(0, 0);
      }
    };
    
    window.addEventListener('pageshow', handleNavigation);
    
    return () => {
      window.scrollTo(0, 0);
      window.removeEventListener('pageshow', handleNavigation);
    };
    
  }, []);

  const filterEvents = () => {
    return events.filter((event) => {
      // Handle category-specific events (non-tech, etc.)
      const matchesCategory = eventType ? event.category.toLowerCase() === eventType.toLowerCase() : true;

      const matchesSearch =
        event.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event?.description?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag = 
        !selectedTag || 
        event.tags?.includes(selectedTag) || 
        event.organizer === selectedTag;

      return matchesCategory && matchesSearch && matchesTag;
    });
  };

  const getRelevantTags = () => {
    return tags[eventType];
  };

  const filteredEvents = filterEvents();

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTag(null);
  };

  const getHeroHeading = () => {
    if (eventType) {
      return `${eventType.charAt(0).toUpperCase() + eventType.slice(1)} Events`;
    }
    return "Events";
  };

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <div className="relative z-10 bg-gradient-to-br from-purple-600/20 via-transparent to-violet-500/20">
        {/* Back Button */}
        <button
          onClick={() => {
            sessionStorage.removeItem('eventListScrollPosition');
            sessionStorage.removeItem('eventListSearchQuery');
            sessionStorage.removeItem('eventListSelectedTag');
            sessionStorage.removeItem('eventListCurrentPage');
            navigate("/");
          }
          }
          className="fixed top-4 left-4 z-50 flex items-center gap-2 text-white hover:text-purple-300 transition-colors duration-300 mb-4 font-['Orbitron'] tracking-widest"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>

        <HeroSection title={getHeroHeading()} />
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col-reverse lg:flex-row gap-8">
            <div className="lg:w-3/4">
              <EventGrid 
                filteredEvents={filteredEvents} 
                initialPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
            <div className="lg:w-1/4 space-y-6">
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              {(searchQuery || selectedTag) && (
                <button
                  onClick={clearFilters}
                  className="w-full p-2 rounded bg-[#613aeb] text-white hover:bg-[#4f2ec7] transition-colors"
                >
                  Clear All Filters
                </button>
              )}
              <TagFilter
                tags={getRelevantTags()}
                selectedTag={selectedTag}
                onChange={setSelectedTag}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;