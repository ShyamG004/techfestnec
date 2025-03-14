import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EventCard from "./EventCard";
import { useState, useMemo, useEffect } from "react";

const EventGrid = ({ filteredEvents, initialPage = 1, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const eventsPerPage = 9;

  // Reset to page 1 when filteredEvents changes, but NOT on initial render
  useEffect(() => {
    const shouldResetPage = sessionStorage.getItem('eventListSearchFiltersChanged') === 'true';
    if (shouldResetPage) {
      setCurrentPage(1);
      sessionStorage.setItem('eventListSearchFiltersChanged', 'false');
    }
  }, [filteredEvents]);
  
  // Call parent's onPageChange whenever currentPage changes
  useEffect(() => {
    if (onPageChange) {
      onPageChange(currentPage);
    }
  }, [currentPage, onPageChange]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 50,
      rotateX: -30
    },
    show: { 
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      y: -50,
      rotateX: 30,
      transition: {
        duration: 0.5
      }
    }
  };

  // Calculate pagination values
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  const paginatedEvents = useMemo(() => {
    const startIndex = (currentPage - 1) * eventsPerPage;
    return filteredEvents.slice(startIndex, startIndex + eventsPerPage);
  }, [filteredEvents, currentPage]);

  // Handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    sessionStorage.setItem('eventListCurrentPage', pageNumber.toString());
  };

  // Generate page numbers array - responsive for mobile
  const getPageNumbers = () => {
    const pageNumbers = [];
    // Show fewer pages on small screens
    const isMobile = window.innerWidth < 640;
    const maxVisiblePages = isMobile ? 3 : 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (isMobile) {
        // Simplified mobile view - current, prev, next
        if (currentPage === 1) {
          pageNumbers.push(1, 2, '...', totalPages);
        } else if (currentPage === totalPages) {
          pageNumbers.push(1, '...', totalPages - 1, totalPages);
        } else {
          pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
        }
      } else {
        // Desktop view
        if (currentPage <= 3) {
          for (let i = 1; i <= 4; i++) {
            pageNumbers.push(i);
          }
          pageNumbers.push('...');
          pageNumbers.push(totalPages);
        } else if (currentPage >= totalPages - 2) {
          pageNumbers.push(1);
          pageNumbers.push('...');
          for (let i = totalPages - 3; i <= totalPages; i++) {
            pageNumbers.push(i);
          }
        } else {
          pageNumbers.push(1);
          pageNumbers.push('...');
          for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pageNumbers.push(i);
          }
          pageNumbers.push('...');
          pageNumbers.push(totalPages);
        }
      }
    }
    return pageNumbers;
  };

  // Ensure current page is valid
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  // Extract pagination component for reuse
  const Pagination = ({ position }) => (
    <div className={`flex flex-wrap justify-center items-center gap-1 sm:gap-2 ${position === 'top' ? 'mb-6' : 'mt-8'} px-2`}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-1 sm:p-2 rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      
      {getPageNumbers().map((pageNum, index) => (
        <button
          key={index}
          onClick={() => typeof pageNum === 'number' && handlePageChange(pageNum)}
          className={`px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base rounded-lg border ${
            currentPage === pageNum
              ? 'bg-blue-500 text-white border-blue-500'
              : pageNum === '...'
              ? 'border-transparent cursor-default text-gray-600'
              : 'border-gray-200 text-gray-700 hover:bg-gray-100'
          }`}
          disabled={pageNum === '...'}
        >
          {pageNum}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-1 sm:p-2 rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      
    </div>
  );

  return (
    <motion.div 
      className="relative overflow-hidden py-8"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* Top pagination - only show when there are events */}
      {filteredEvents.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Pagination position="top" />
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-3">
        <AnimatePresence mode="popLayout">
          {paginatedEvents.map((event, index) => (
            <motion.div
              key={event.id}
              layout
              variants={itemVariants}
              style={{
                perspective: 1000
              }}
              onClick={() => {
                // Store the current page before navigating to event details
                sessionStorage.setItem('eventListCurrentPage', currentPage.toString());
              }}
            >
              <EventCard event={event} index={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredEvents.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <div className="text-gray-400 text-lg font-medium">No events found</div>
          <div className="text-gray-600 mt-2">Try adjusting your filters</div>
        </motion.div>
      ) : (
        /* Bottom pagination */
        <Pagination position="bottom" />
      )}
    </motion.div>
  );
};

export default EventGrid;